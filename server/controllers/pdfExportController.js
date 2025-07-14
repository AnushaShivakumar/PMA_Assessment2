/** @format */

import PDFDocument from "pdfkit";
import { Forecast } from "../models/Forecast.js";

export const exportForecastsToPDF = async (req, res) => {
	try {
		const records = await Forecast.find().sort({ createdAt: -1 });

		const doc = new PDFDocument();
		const filename = "weather_forecasts.pdf";

		// Set headers
		res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
		res.setHeader("Content-type", "application/pdf");

		doc.pipe(res);

		doc.fontSize(20).text("📜 Saved Weather Forecasts", { underline: true });
		doc.moveDown();

		records.forEach((record, index) => {
			const { location, dateRange, createdAt } = record;

			doc.fontSize(12).text(`📝 Record #${index + 1}`);
			doc.text(`📍 Location: ${location}`);
			doc.text(`📅 Start Date: ${new Date(dateRange.start).toLocaleString()}`);
			doc.text(`📅 End Date: ${new Date(dateRange.end).toLocaleString()}`);
			doc.text(`🕓 Created At: ${new Date(createdAt).toLocaleString()}`);
			doc.moveDown();
		});

		doc.end();
	} catch (err) {
		console.error("❌ Failed to generate PDF:", err);
		res.status(500).json({ error: "Failed to generate PDF" });
	}
};

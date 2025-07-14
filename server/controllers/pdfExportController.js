/** @format */

import PDFDocument from "pdfkit";
import Forecast from "../models/Forecast.js";

export const exportForecastsToPDF = async (req, res) => {
	try {
		const forecasts = await Forecast.find().sort({ createdAt: -1 });

		const doc = new PDFDocument();
		const filename = "weather_forecasts.pdf";

		// Set headers
		res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
		res.setHeader("Content-type", "application/pdf");

		doc.pipe(res);

		doc.fontSize(20).text("📜 Saved Weather Forecasts", { underline: true });
		doc.moveDown();

		forecasts.forEach((item, index) => {
			const { location, dateRange, weatherData, createdAt } = item;

			doc.fontSize(12).text(`📝 Record #${index + 1}`);
			doc.text(`📍 Location: ${location}`);
			doc.text(`📅 Start: ${new Date(dateRange.start).toLocaleDateString()}`);
			doc.text(`📅 End: ${new Date(dateRange.end).toLocaleDateString()}`);
			doc.text(`🌡️ Temp: ${weatherData?.temp || "N/A"}`);
			doc.text(`💧 Humidity: ${weatherData?.humidity || "N/A"}`);
			doc.text(`🌤️ Condition: ${weatherData?.condition || "N/A"}`);
			doc.text(`🕓 Saved At: ${new Date(createdAt).toLocaleString()}`);
			doc.moveDown();
		});

		doc.end();
	} catch (err) {
		console.error("❌ Failed to generate PDF:", err);
		res.status(500).json({ error: "Failed to generate PDF" });
	}
};

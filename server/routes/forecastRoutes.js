/** @format */

import express from "express";
import {
	createForecast,
	getForecasts,
	updateForecast,
	deleteForecast,
} from "../controllers/forecastController.js";

import { exportForecastsToPDF } from "../controllers/pdfExportController.js"; // 👈 Add this

const router = express.Router();

// Routes
router.post("/", createForecast); // Create
router.get("/", getForecasts); // Read all
router.put("/:id", updateForecast); // Update
router.delete("/:id", deleteForecast); // Delete
router.get("/export/pdf", exportForecastsToPDF); // 👈 PDF Export

export default router;

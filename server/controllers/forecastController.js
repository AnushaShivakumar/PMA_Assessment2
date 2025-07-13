/** @format */

import { Forecast } from "../models/Forecast.js";

export const createForecast = async (req, res) => {
	try {
		const { location, dateRange, weatherData, forecast } = req.body;

		if (
			!location ||
			!dateRange?.start ||
			!dateRange?.end ||
			!Array.isArray(forecast)
		) {
			return res.status(400).json({ message: "Invalid input" });
		}

		const newForecast = new Forecast({
			location,
			dateRange,
			weatherData,
			forecast,
		});
		await newForecast.save();
		res.status(201).json(newForecast);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getForecasts = async (req, res) => {
	try {
		const forecasts = await Forecast.find();
		res.status(200).json(forecasts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const updateForecast = async (req, res) => {
	try {
		const updated = await Forecast.findByIdAndUpdate(
			req.params.id,
			{ weatherData: req.body.weatherData, updatedAt: new Date() },
			{ new: true }
		);
		res.status(200).json(updated);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const deleteForecast = async (req, res) => {
	try {
		await Forecast.findByIdAndDelete(req.params.id);
		res.status(204).send();
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

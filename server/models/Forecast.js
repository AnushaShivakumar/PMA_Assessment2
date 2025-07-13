/** @format */

import mongoose from "mongoose";

const forecastSchema = new mongoose.Schema(
	{
		location: { type: String, required: true },
		dateRange: {
			start: { type: Date, required: true },
			end: { type: Date, required: true },
		},
		weatherData: {
			uvIndex: Number,
			humidity: String,
			windSpeed: String,
			cloud: String,
			feelsLike: String,
			temp: String,
			condition: String,
		},
		forecast: [
			{
				date: String,
				temperature: Number,
				condition: String,
			},
		],
		savedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

export const Forecast = mongoose.model("Forecast", forecastSchema);

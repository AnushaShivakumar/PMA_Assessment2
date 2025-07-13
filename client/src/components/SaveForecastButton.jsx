/** @format */

import React from "react";
import axios from "axios";

const SaveForecastButton = ({ location, current, forecastday }) => {
	const transformForecastData = () => {
		return forecastday.map((day) => ({
			date: day.date,
			temperature: day.day.avgtemp_c,
			condition: day.day.condition.text,
		}));
	};

	const saveForecastToDatabase = async () => {
		const payload = {
			location: location.name + ", " + location.country,
			dateRange: {
				start: forecastday[0].date,
				end: forecastday[forecastday.length - 1].date,
			},
			weatherData: {
				uvIndex: current.uv,
				humidity: current.humidity + "%",
				windSpeed: current.wind_kph + " kph",
				cloud: current.cloud + "%",
				feelsLike: current.feelslike_c + "°C",
				temp: current.temp_c + "°C",
				condition: current.condition.text,
			},
			forecast: transformForecastData(),
		};

		const backendURL = import.meta.env.VITE_BACKEND_URL || "";

		try {
			const res = await axios.post(`${backendURL}/api/forecasts`, payload);
			alert("Forecast saved successfully!");
			console.log("Saved:", res.data);
		} catch (error) {
			console.error("Error saving forecast:", error);
			alert("Failed to save forecast.");
		}
	};

	return (
		<button
			className="toggle-hourly-btn save-forecast-button"
			onClick={saveForecastToDatabase}
		>
			Save Forecast
		</button>
	);
};

export default SaveForecastButton;

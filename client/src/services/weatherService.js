/** @format */

import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getWeather(location) {
	const res = await axios.get(`${BASE_URL}/forecast.json`, {
		params: {
			key: API_KEY,
			q: location,
			days: 5,
			aqi: "no",
			alerts: "no",
		},
	});
	return res.data;
}

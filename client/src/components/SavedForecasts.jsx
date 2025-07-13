/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL || "";

export default function SavedForecasts({ onClose }) {
	const [forecasts, setForecasts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`${backendURL}/api/forecasts`);
				setForecasts(res.data);
			} catch (err) {
				console.error("Error fetching saved forecasts:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) return <p>Loading saved forecasts...</p>;

	return (
		<div className="saved-modal">
			<h2>📜 Saved Forecasts</h2>
			<button onClick={onClose} className="saved-close-btn">
				Close
			</button>

			{forecasts.length === 0 ? (
				<p>No saved forecasts yet.</p>
			) : (
				<div className="saved-forecast-grid">
					{forecasts.map((item) => (
						<div key={item._id} className="saved-forecast-card">
							<h3>{item.location}</h3>
							<p>
								🗓️ {item.dateRange.start.split("T")[0]} →{" "}
								{item.dateRange.end.split("T")[0]}
							</p>
							<p>🌡️ Temp: {item.weatherData.temp}</p>
							<p>🌤️ {item.weatherData.condition}</p>
							<p>💧 Humidity: {item.weatherData.humidity}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

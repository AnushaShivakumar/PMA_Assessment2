/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const backendURL = import.meta.env.VITE_BACKEND_URL || "";

export default function HistoryPage() {
	const [forecasts, setForecasts] = useState([]);
	const [editingId, setEditingId] = useState(null);
	const [editedData, setEditedData] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		fetchForecasts();
	}, []);

	const fetchForecasts = async () => {
		try {
			const res = await axios.get(`${backendURL}/api/forecasts`);
			setForecasts(res.data);
		} catch (err) {
			console.error("Fetch error:", err);
		}
	};

	const handleDelete = async (id) => {
		if (!confirm("Delete this forecast?")) return;
		await axios.delete(`${backendURL}/api/forecasts/${id}`);
		fetchForecasts();
	};

	const handleEdit = (forecast) => {
		setEditingId(forecast._id);
		setEditedData({ ...forecast.weatherData });
	};

	const handleSave = async (id) => {
		await axios.put(`${backendURL}/api/forecasts/${id}`, {
			weatherData: editedData,
		});
		setEditingId(null);
		fetchForecasts();
	};

	return (
		<div className="history-page">
			<h2>📜 Saved Forecasts</h2>

			<div className="forecast-grid">
				{forecasts.map((item) => (
					<div key={item._id} className="forecast-card">
						<h3>{item.location}</h3>
						<p>
							🗓️ {item.dateRange.start.split("T")[0]} →{" "}
							{item.dateRange.end.split("T")[0]}
						</p>

						{editingId === item._id ? (
							<div>
								<p>
									<input
										value={editedData.temp}
										onChange={(e) =>
											setEditedData({ ...editedData, temp: e.target.value })
										}
									/>
								</p>
								<p>
									<input
										value={editedData.humidity}
										onChange={(e) =>
											setEditedData({ ...editedData, humidity: e.target.value })
										}
									/>
								</p>
								<p>
									<input
										value={editedData.condition}
										onChange={(e) =>
											setEditedData({
												...editedData,
												condition: e.target.value,
											})
										}
									/>
								</p>
								<button onClick={() => handleSave(item._id)}>Save</button>
							</div>
						) : (
							<>
								<p>🌡️ Temp: {item.weatherData.temp}</p>
								<p>🌤️ {item.weatherData.condition}</p>
								<p>💧 Humidity: {item.weatherData.humidity}</p>
							</>
						)}

						{item.forecast?.length > 0 && (
							<div style={{ marginTop: "1rem" }}>
								<strong>5-Day Forecast:</strong>
								<ul>
									{item.forecast.map((day, i) => (
										<li key={i}>
											{day.date} - {day.temperature}°C - {day.condition}
										</li>
									))}
								</ul>
							</div>
						)}

						<div style={{ marginTop: "1rem" }}>
							<button onClick={() => handleEdit(item)}>Edit</button>
							<button
								onClick={() => handleDelete(item._id)}
								style={{
									marginLeft: "0.5rem",
									background: "crimson",
									color: "white",
								}}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

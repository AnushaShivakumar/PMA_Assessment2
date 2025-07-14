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
	useEffect(() => {
		document.body.classList.add("history-background");

		return () => {
			document.body.classList.remove("history-background");
		};
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
		<div className="history-page px-4 py-8 mx-auto">
			<h1 className="forecast-header">🌤️ Weather Forecast App</h1>
			<div className="flex items-center justify-between mb-6">
				<button
					onClick={() => navigate("/")}
					className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
				>
					← Go Back
				</button>
				<br></br>
				<button
					onClick={() =>
						window.open(`${backendURL}/api/forecasts/export/pdf`, "_blank")
					}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
				>
					⬇️ Export PDF
				</button>

				<h2 className="text-2xl font-semibold text-center flex-grow">
					📜 Saved Forecasts
				</h2>
				<div style={{ width: "120px" }} />
			</div>

			<div className="history-grid">
				{forecasts.map((item) => (
					<div key={item._id} className="history-card">
						<h3 className="location">{item.location}</h3>
						<p>
							🗓️ {item.dateRange.start.split("T")[0]} →{" "}
							{item.dateRange.end.split("T")[0]}
						</p>

						{editingId === item._id ? (
							<>
								<input
									className="edit-input"
									value={editedData.temp}
									onChange={(e) =>
										setEditedData({ ...editedData, temp: e.target.value })
									}
								/>
								<input
									className="edit-input"
									value={editedData.humidity}
									onChange={(e) =>
										setEditedData({ ...editedData, humidity: e.target.value })
									}
								/>
								<input
									className="edit-input"
									value={editedData.condition}
									onChange={(e) =>
										setEditedData({ ...editedData, condition: e.target.value })
									}
								/>
								<button
									onClick={() => handleSave(item._id)}
									className="btn-save"
								>
									💾 Save
								</button>
							</>
						) : (
							<>
								<p>🌡️ Temp: {item.weatherData.temp}</p>
								<p>🌤️ {item.weatherData.condition}</p>
								<p>💧 Humidity: {item.weatherData.humidity}</p>
							</>
						)}

						{item.forecast?.length > 0 && (
							<div className="forecast-list">
								<strong>5-Day Forecast:</strong>
								<ul>
									{item.forecast.map((day) => (
										<li key={`${item._id}-${day.date}`}>
											{day.date} – {day.temperature}°C – {day.condition}
										</li>
									))}
								</ul>
							</div>
						)}

						<div className="btn-row">
							<button onClick={() => handleEdit(item)} className="btn-edit">
								Edit
							</button>
							<button
								onClick={() => handleDelete(item._id)}
								className="btn-delete"
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

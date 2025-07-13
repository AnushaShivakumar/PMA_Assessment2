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
		<div className="history-page px-4 py-8 max-w-5xl mx-auto">
			<div className="flex items-center justify-between mb-6">
				<button
					onClick={() => navigate("/")}
					className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
				>
					← Go Back
				</button>
				<h2 className="text-2xl font-semibold text-center flex-grow">
					📜 Saved Forecasts
				</h2>
				<div style={{ width: "120px" }} /> {/* For symmetry */}
			</div>
			<h2>📜 Saved Forecasts</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
				{forecasts.map((item) => (
					<div
						key={item._id}
						className="bg-slate-800 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
					>
						<h3>{item.location}</h3>
						<p>
							🗓️ {item.dateRange.start.split("T")[0]} →{" "}
							{item.dateRange.end.split("T")[0]}
						</p>

						{editingId === item._id ? (
							<div>
								<button
									onClick={() => handleSave(item._id)}
									className="mb-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
								>
									💾 Save
								</button>
								<p>
									<input
										className="w-full px-3 py-2 mt-2 mb-3 rounded border border-gray-300 text-black"
										value={editedData.temp}
										onChange={(e) =>
											setEditedData({ ...editedData, temp: e.target.value })
										}
									/>
								</p>
								<p>
									<input
										className="w-full px-3 py-2 mt-2 mb-3 rounded border border-gray-300 text-black"
										value={editedData.humidity}
										onChange={(e) =>
											setEditedData({ ...editedData, humidity: e.target.value })
										}
									/>
								</p>
								<p>
									<input
										className="w-full px-3 py-2 mt-2 mb-3 rounded border border-gray-300 text-black"
										value={editedData.condition}
										onChange={(e) =>
											setEditedData({
												...editedData,
												condition: e.target.value,
											})
										}
									/>
								</p>
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
							<button
								onClick={() => handleEdit(item)}
								className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
							>
								Edit
							</button>

							<button
								onClick={() => handleDelete(item._id)}
								className="px-3 py-1 rounded bg-red-600 text-white ml-3 hover:bg-red-700 transition"
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

/** @format */

export default function ForecastList({ forecast }) {
	return (
		<div style={{ marginTop: "2rem" }}>
			<h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
				📆 5-Day Forecast
			</h2>

			<div className="forecast-scroll">
				{forecast.forecastday.map((day) => {
					const date = new Date(day.date);
					const options = { weekday: "short", month: "short", day: "numeric" };
					const formattedDate = date.toLocaleDateString(undefined, options);

					return (
						<div className="forecast-card" key={day.date}>
							<h4>{formattedDate}</h4>
							<img
								src={day.day.condition.icon}
								alt={day.day.condition.text}
								style={{ width: "48px", height: "48px" }}
							/>
							<p style={{ fontWeight: "bold", margin: "0.25rem 0" }}>
								{day.day.condition.text}
							</p>
							<p>🌡️ Max: {day.day.maxtemp_c}°C</p>
							<p>🌡️ Min: {day.day.mintemp_c}°C</p>
							<p>💧 Humidity: {day.day.avghumidity}%</p>
							<p>🌦️ Rain Chance: {day.day.daily_chance_of_rain}%</p>
							<p>💨 Wind: {day.day.maxwind_kph} kph</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

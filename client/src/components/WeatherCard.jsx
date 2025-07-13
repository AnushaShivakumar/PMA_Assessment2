/** @format */

export default function WeatherCard({ data }) {
	if (!data || !data.location || !data.condition) {
		return <p style={{ color: "red" }}>⚠️ Weather data not available.</p>;
	}

	const {
		location: { name, country },
		condition: { text, icon },
		temp_c,
		feelslike_c,
		humidity,
		cloud,
		wind_kph,
		wind_dir,
		uv,
	} = data;

	return (
		<div className="weather-card">
			<h2>
				{name}, {country}
			</h2>
			<div className="weather-condition-row">
				<p className="weather-condition">{text}</p>
				<img className="weather-condition-icon" src={icon} alt={text} />
			</div>

			<div className="weather-stats">
				<p>🌡️ Temperature: {temp_c} °C</p>
				<p>🥵 Feels Like: {feelslike_c} °C</p>
				<p>💧 Humidity: {humidity}%</p>
				<p>☁️ Cloud Cover: {cloud}%</p>
				<p>🏴‍☠️ Wind Speed: {wind_kph} kph</p>
				<p>🧭 Wind Direction: {wind_dir}</p>
				<p>🔍 UV Index: {uv}</p>
			</div>
		</div>
	);
}

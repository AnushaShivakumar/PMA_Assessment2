/** @format */

export default function HourlyForecast({ hourly }) {
	return (
		<div className="hourly-forecast">
			<h3>🌤️ Hourly Forecast</h3>
			<div className="hourly-scroll">
				{hourly.slice(0, 12).map((hour, index) => (
					<div className="hour-card" key={index}>
						<p>{hour.time}</p>
						<img
							src={`https:${hour.condition.icon}`}
							alt={hour.condition.text}
						/>
						<p>{`${hour.temp_c}°C`}</p>
					</div>
				))}
			</div>
		</div>
	);
}

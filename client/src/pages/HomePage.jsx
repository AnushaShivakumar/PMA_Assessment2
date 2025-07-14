/** @format */

import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import InfoButton from "../components/InfoButton";
import { getWeather } from "../services/weatherService";
import HourlyForecast from "../components/HourlyForecast";
import SaveForecastButton from "../components/SaveForecastButton";
import Footer from "../components/Footer";
import SavedForecasts from "../components/SavedForecasts";
import { useNavigate } from "react-router-dom";
import MapView from "../components/MapView";
import "../App.css";

export default function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState(null);
	const [input, setInput] = useState("");
	const [error, setError] = useState("");
	const [showHourly, setShowHourly] = useState(false);
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [showAboutPM, setShowAboutPM] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const navigate = useNavigate();
	const isExpanded = Boolean(weatherData && forecastData);

	// ✅ useEffect to change body background when expanded
	useEffect(() => {
		const body = document.body;
		if (weatherData && forecastData) {
			body.classList.add("expanded-body");
		} else {
			body.classList.remove("expanded-body");
		}
	}, [weatherData, forecastData]);
	useEffect(() => {
		console.log("Forecast data received:", forecastData);
	}, [forecastData]);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!input.trim()) return;

		try {
			const data = await getWeather(input.trim());
			setWeatherData({ ...data.current, location: data.location });
			setForecastData(data.forecast);
			setError("");
		} catch (err) {
			console.error("Fetch error:", err);
			setError("❌ Could not fetch weather.");
		}
		setInput("");
	};

	const handleUseMyLocation = () => {
		if (!navigator.geolocation) {
			setError("❌ Geolocation not supported");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			async (pos) => {
				const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
				try {
					const data = await getWeather(coords);
					setWeatherData({ ...data.current, location: data.location });
					setForecastData(data.forecast);
					setError("");
				} catch (err) {
					console.error("Geo fetch error:", err);
					setError("❌ Could not fetch weather.");
				}
			},
			() => setError("❌ Location access denied")
		);
	};
	const aboutPMContent = {
		title: "🏢 About PM Accelerator",
		body: (
			<>
				<p>
					<strong>PM Accelerator</strong> is a{" "}
					<strong>US-based AI innovation hub</strong> with global reach,
					offering <strong>award-winning mentorship</strong> from experts at{" "}
					<strong>Google, Meta, and Apple</strong>.
				</p>
				<p>
					Their <strong>AI PM Bootcamp</strong> equips aspiring professionals
					with <strong>real-world, project-based experience</strong> in{" "}
					<strong>GenAI, LLMs, and AI engineering</strong>.
				</p>
			</>
		),
		links: [
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/school/pmaccelerator/",
			},
			{
				label: "Internship Page",
				url: "https://www.pmaccelerator.io/AI-ML-Software-Engineer-Intern",
			},
			{
				label: "Official Website",
				url: "https://www.pmaccelerator.io/",
			},
		],
	};

	const aboutMeContent = {
		title: "👩‍💻 About Me",
		body: (
			<>
				<p>
					Hi! I'm <strong>Anusha Shiva Kumar</strong>, a passionate developer
					with a strong interest in <strong>Data Science</strong> and{" "}
					<strong>Full Stack Development</strong>.
				</p>
				<p>
					This Weather Forecast App is part of my{" "}
					<strong>Assessment 1 and 2</strong> for the{" "}
					<strong>PM Accelerator Bootcamp</strong>, where I'm actively expanding
					my skills through real-world, project-based learning.
				</p>
			</>
		),
		links: [
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/anusha-shivakumar/",
			},
			{
				label: "Portfolio",
				url: "https://anushashivakumar.github.io/Portfolio/",
			},
			{ label: "GitHub", url: "https://github.com/AnushaShivakumar" },
			{
				label: "Resume",
				url: "https://drive.google.com/file/d/1SEqrswMGGW8lG87G35D6IVYZlfE-ZS7y/view",
			},
		],
	};

	return (
		<div className="page-wrapper">
			<div className={`app-container ${weatherData ? "expanded" : ""}`}>
				<h1 className="app-title">🌤️ Weather Forecast App</h1>
				<div className="button-row" style={{ marginTop: "1rem" }}>
					<button onClick={() => navigate("/history")}>View History</button>
				</div>
				{!isExpanded ? (
					<div className="text-gray-800">
						<ul className="bullet-list left-aligned-list">
							<li>Enter a location to see the current weather.</li>
							<li>View the 5-day weather forecast.</li>
							<li>Access saved history for past forecasts.</li>
							<li>Check hourly updates for precision planning.</li>
						</ul>

						<form
							onSubmit={handleSearch}
							className="search-row"
							style={{ marginTop: "1rem" }}
						>
							<SearchBar input={input} setInput={setInput} />
							<button type="submit">Search</button>
							<button type="button" onClick={handleUseMyLocation}>
								Use My Location
							</button>
						</form>
					</div>
				) : (
					<>
						<h2 className="section-title">🌤️ Current Weather</h2>
						<form onSubmit={handleSearch} className="search-row">
							<SearchBar input={input} setInput={setInput} />
							<button type="submit">Search</button>
							<button type="button" onClick={handleUseMyLocation}>
								Use My Location
							</button>
						</form>
					</>
				)}

				{weatherData && forecastData && (
					<>
						<div className="weather-map-container">
							<WeatherCard data={weatherData} />
							<MapView location={weatherData.location} />
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "1rem",
								margin: "1.5rem 0",
							}}
						>
							<button
								className="toggle-hourly-btn"
								onClick={() => setShowHourly((prev) => !prev)}
							>
								{showHourly ? "Hide Hourly Forecast" : "Show Hourly Forecast"}
							</button>

							<SaveForecastButton
								location={weatherData.location}
								current={weatherData}
								forecastday={forecastData.forecastday}
							/>
						</div>

						{showHourly && forecastData?.forecastday?.[0]?.hour && (
							<HourlyForecast hourly={forecastData.forecastday[0].hour} />
						)}

						<ForecastList forecast={forecastData} />
					</>
				)}

				{error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

				<InfoButton />
			</div>
			{showAboutMe && (
				<div className="about-modal">
					<h2>{aboutMeContent.title}</h2>
					<div>{aboutMeContent.body}</div>
					<ul>
						{aboutMeContent.links.map((link) => (
							<li key={link.label}>
								<a href={link.url} target="_blank" rel="noopener noreferrer">
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<button onClick={() => setShowAboutMe(false)}>Close</button>
				</div>
			)}

			{showAboutPM && (
				<div className="about-modal">
					<h2>{aboutPMContent.title}</h2>
					<div>{aboutPMContent.body}</div>
					<ul>
						{aboutPMContent.links.map((link) => (
							<li key={link.label}>
								<a href={link.url} target="_blank" rel="noopener noreferrer">
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<button onClick={() => setShowAboutPM(false)}>Close</button>
				</div>
			)}

			<Footer
				onAboutMe={() => {
					setShowAboutMe(true);
					setShowAboutPM(false);
				}}
				onAboutPM={() => {
					setShowAboutPM(true);
					setShowAboutMe(false);
				}}
				className={`footer ${weatherData && forecastData ? "expanded" : ""}`}
			/>
		</div>
	);
}

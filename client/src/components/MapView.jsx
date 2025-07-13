/** @format */

// MapView.jsx
export default function MapView({ location }) {
	if (!location) return null;

	const mapUrl = `https://www.google.com/maps?q=${location.name},${location.country}&z=13&output=embed`;

	return (
		<div className="map-view map-car">
			<iframe
				title="Google Map"
				width="100%"
				height="100%"
				style={{
					border: 0,
					borderRadius: "12px",
					height: "400px", // ⬅️ reduce this from 360px or 400px
					boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
				}}
				src={`https://www.google.com/maps?q=${location.name},${location.country}&z=13&output=embed`}
				allowFullScreen
				loading="lazy"
			/>
		</div>
	);
}

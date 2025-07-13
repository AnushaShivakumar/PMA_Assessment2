/** @format */

export default function Footer({ onAboutMe, onAboutPM, className }) {
	return (
		<footer className={`footer-buttons ${className || ""}`}>
			<button className="btn" onClick={onAboutMe}>
				About Me
			</button>
			<button className="btn" onClick={onAboutPM}>
				About PM Accelerator
			</button>
		</footer>
	);
}

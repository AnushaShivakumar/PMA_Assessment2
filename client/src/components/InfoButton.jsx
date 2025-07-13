/** @format */

import { useState } from "react";

export default function InfoButton() {
	const [show, setShow] = useState(false);

	return (
		<div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
			<button
				style={{
					backgroundColor: "#213547",
					color: "#fff",
					border: "none",
					padding: "0.6rem 1.1rem",
					borderRadius: "8px",
					cursor: "pointer",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
				}}
				onClick={() => setShow((prev) => !prev)}
			>
				Info
			</button>

			{show && (
				<div
					style={{
						background: "#fff",
						padding: "1rem",
						border: "2px solid #213547",
						borderRadius: "12px",
						marginTop: "0.5rem",
						maxWidth: "320px",
						boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
						color: "#213547",
					}}
				>
					<p style={{ marginBottom: "0.5rem" }}>
						<strong>👩‍💻 Author:</strong> Anusha Shivakumar
					</p>
					<p style={{ marginBottom: "0.5rem" }}>
						<strong>📱 About:</strong> Built as part of PM Accelerator’s GenAI
						Bootcamp using WeatherAPI.
					</p>
					<a
						href="https://www.linkedin.com/school/pmaccelerator/"
						target="_blank"
						rel="noreferrer"
						style={{
							color: "#213547",
							textDecoration: "underline",
							fontWeight: "bold",
						}}
					>
						PM Accelerator LinkedIn
					</a>

					{/* ✅ Close Button */}
					<div style={{ textAlign: "right", marginTop: "1rem" }}>
						<button
							style={{
								backgroundColor: "#213547",
								color: "#fff",
								border: "none",
								padding: "0.4rem 0.8rem",
								borderRadius: "6px",
								cursor: "pointer",
								fontSize: "0.9rem",
							}}
							onClick={() => setShow(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

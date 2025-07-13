/** @format */

export default function SearchBar({ input, setInput }) {
	return (
		<div className="search-bar-form">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Please enter the location"
			/>
		</div>
	);
}

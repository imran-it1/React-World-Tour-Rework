import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import MarkedCountry from "./components/MarkedCountry/MarkedCountry";
import Swal from "sweetalert2";

function App() {
	const [countries, setCountries] = useState([]);
	const [markedCountry, setMarkedCountry] = useState([]);
	const [flags, setFlags] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	const handleMarkedCountry = (name, flag) => {
		const isSimillarName = markedCountry.find(
			(markCountry) => markCountry === name.common,
		);

		if (isSimillarName) {
			return Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Already in the list",
				footer: '<a href="">Why do I have this issue?</a>',
			});
		}

		setMarkedCountry([...markedCountry, name.common]);
		setFlags([...flags, flag]);
	};

	return (
		<di>
			<Header />
			<MarkedCountry markedCountry={markedCountry} flags={flags} />
			<Countries
				countries={countries}
				handleMarkedCountry={handleMarkedCountry}
			/>
		</di>
	);
}

export default App;

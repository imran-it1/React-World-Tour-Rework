import React, { useState } from "react";

const Country = ({ country, handleMarkedCountry }) => {
	// console.log(country);
	const { name, flags, area, population } = country;
	const [visited, setVisited] = useState(false);
	const handleVisited = () => {
		setVisited(!visited);
	};

	return (
		<div
			className={`${
				visited ? "bg-gray-800 text-white rounded-lg border-2" : ""
			} border-2 border-green-500 p-5 rounded-md transition-all duration-300 ease-in`}
		>
			<h1 className="text-2xl font-bold mb-2">{name.common}</h1>
			<img className=" w-full h-[200px]" src={flags.svg} alt="" />
			<p className="text-xl font-semi-bold">Area: {area}</p>
			<p className="text-xl font-semi-bold">Population: {population}</p>

			{/* Btn */}
			<div className="flex flex-col gap-2">
				<button
					onClick={handleVisited}
					className="btn btn-md btn-success mt-5"
				>
					Visited
				</button>

				<button
					onClick={() => handleMarkedCountry(name, flags)}
					className="btn btn-md btn-success mt-5"
				>
					Mark As Visited
				</button>
			</div>
		</div>
	);
};

export default Country;

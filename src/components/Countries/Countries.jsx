import React from "react";
import Country from "../Country/Country";

const Countries = ({ countries, handleMarkedCountry }) => {
	return (
		<div>
			<div className="border text-center my-2 py-4">
				<h1 className="text-2xl font-bold">
					Country: {countries.length}
				</h1>
			</div>
			<div className="grid grid-cols-4 gap-4 container mx-auto">
				{countries.map((country) => (
					<Country
						country={country}
						handleMarkedCountry={handleMarkedCountry}
					/>
				))}
			</div>
		</div>
	);
};

export default Countries;

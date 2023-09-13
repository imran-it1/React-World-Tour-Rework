import React from "react";

const MarkedCountry = ({ markedCountry, flags }) => {
	console.log(flags);
	return (
		<div className="border text-center my-2 py-4">
			<h1 className="text-2xl font-bold">
				Marked Country: {markedCountry.length}
				<div>
					<ol className="flex items-center gap-2">
						{markedCountry.map((country) => (
							<li className=" list-inside list-decimal">
								{country}
							</li>
						))}
					</ol>
				</div>
				<div className="flex items-center gap-2 mt-5">
					{flags.map((flag) => (
						<img className=" w-20" src={flag.svg}></img>
					))}
				</div>
			</h1>
		</div>
	);
};

export default MarkedCountry;

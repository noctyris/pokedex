"use client";

import { nanoid } from "nanoid";
import Papa from "papaparse";
import { useEffect, useState } from "react"

export default function Home() {
	const [data, setData] = useState([]);
	
	useEffect(() => {
		// Charger et parser le fichier CSV
		fetch("/data.csv")
			.then((response) => response.text())
			.then((csv) => {
				const parsed = Papa.parse(csv, {
					header: true, // Considère la première ligne comme en-tête
					skipEmptyLines: true, // Ignore les lignes vides
				});

				// Mapper chaque ligne en un objet avec la structure souhaitée
				const formattedData = parsed.data.map((row) => ({
					id: `pkmn-${nanoid()}`,
					name: row.name,
					num: row.num,
					types: [row.type1, row.type2],
					category: row.category,
					location: "/images/"+row.name.toLowerCase()+".png",
					weight: row.weight,
					size: row.size,
					gen: row.gen,
					images: row.images ? row.images.split(",") : [],
				}));

				setData(formattedData);
			})
		.catch((err) => console.error("Erreur lors du chargement du CSV :", err));
	}, []);
  
	const pkmnsList = data.map((pk) => (
		<div key={pk.id} className={`rounded-3xl aspect-square p-2 bg-gradient-to-br from-${pk.types[0].toLowerCase()} to-${(pk.types[1]!=="") ? pk.types[1].toLowerCase() : pk.types[0].toLowerCase()}`}>
			<div className="flex flex-col items-center justify-around text-black aspect-square bg-[#ffffff80] p-5 rounded-2xl">
				<img src={pk.location} alt={`Image of ${pk.name}`} className="max-w-[150px] aspect-square object-contain" />
				<p>{pk.name}</p>
				<p>{pk.num}</p>
			</div>
		</div>
	))

	return (
		<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] w-4/5">
			{pkmnsList}
		</div>
	);
}

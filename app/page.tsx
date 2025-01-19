"use client";

import { nanoid } from "nanoid";
import Papa from "papaparse";
import { useEffect, useState } from "react"

import Image from "next/image";

interface Row {
  name: string;
  num: string;
  type1: string;
  type2: string;
  category: string;
  weight: string;
  size: string;
  gen: string;
  images: string;
}
interface Pokemon {
	id: string;
	name: string;
	num: string;
	types: string[];
	category: string;
	location: string;
	weight: string;
	size: string;
	gen: string;
}

export default function Home() {
	const [data, setData] = useState<Pokemon[]>([]);
	
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
				const formattedData = (parsed.data as Row[]).map((row) => ({
					id: `${nanoid()}`,
					name: row.name,
					num: row.num,
					types: [row.type1, row.type2],
					category: row.category,
					location: `/images/${row.name.toLowerCase()}.png`,
					weight: row.weight,
					size: row.size,
					gen: row.gen,
				}));

				setData(formattedData);
			})
		.catch((err) => console.error("Erreur lors du chargement du CSV :", err));
	}, []);
  
	const pkmnsList = data.map((pk) => (
		<div key={pk.id} className={`rounded-3xl aspect-square p-2 bg-gradient-to-br from-${pk.types[0].toLowerCase()} to-${(pk.types[1]!=="") ? pk.types[1].toLowerCase() : pk.types[0].toLowerCase()}`}>
			<div className="flex flex-col items-center justify-around text-black aspect-square bg-[#ffffff80] p-5 rounded-2xl hover:shadow-2xl transition-all duration-400">
				<Image src={pk.location} width={150} height={150} alt={`Image of ${pk.name}`} className="aspect-square object-contain" />
				<p className="pb-1">{pk.name}</p>
				<p className="text-xs">N°{pk.num}</p>
			</div>
		</div>
	))

	return (
		<div>
			<h1 className="text-4xl text-center my-6">Pokedex</h1>
			<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] justify-center">
				{pkmnsList}
			</div>
		</div>
	);
}

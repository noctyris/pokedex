"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface Row {
	name:		string;
	num:		string;
	type1:		string;
	type2:		string;
	category:	string;
	weight:		string;
	size:		string;
	gen:		string;
}

export default function Home() {
	const [data, setData] = useState<Row[]>([]);
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
	    fetch('/data.csv')
	      .then(response => response.text())
	      .then(text => {
	        const parsed = Papa.parse(text, {
	        	header: true,
	        	skipEmptyLines: true,
	        });

	        setData((parsed.data as Row[]).map((row) => ({
       			id:			encodeURIComponent(row.name),
       			name:		row.name,
       			num:		row.num,
       			types:		[row.type1, row.type2],
       			category:	row.category,
       			location:	`/images/${row.name.toLowerCase()}.png`,
       			weight:		row.weight,
       			size:		row.size,
       			gen:		row.gen,
	        })))
	        setLoading(false);
	      })
	      .catch(error => console.error('Error fetching CSV:', error));
	  }, []);

	if (isLoading) {
		return (
			<div>
				<p>Chargement en cours...</p>
			</div>
		)
	}

	const pkmnsList = data.map((pk) => {
		if (pk.name!=="") {
			return (
				<Link key={pk.id} href={``}>
					<div className={`rounded-3xl aspect-square p-2 bg-gradient-to-br from-${pk.types[0].toLowerCase()} to-${(pk.types[1]!=="") ? pk.types[1].toLowerCase() : pk.types[0].toLowerCase()}`}>
						<div className="flex flex-col items-center justify-around text-black aspect-square bg-[#ffffff80] p-5 rounded-2xl hover:shadow-2xl transition-all duration-400">
							<Image src={pk.location} width={150} height={150} alt={`Image of ${pk.name}`} className="aspect-square object-contain" />
							<p className="pb-1">{pk.name}</p>
							<p className="text-xs">N°{pk.num}</p>
						</div>
					</div>
				</Link>
			)
		}
	});

	return (
		<div>
			<h1 className="text-4xl text-center my-6">Pokedex</h1>
			<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] justify-center">
				{pkmnsList}
			</div>
		</div>
	);
}

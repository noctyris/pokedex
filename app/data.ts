"use client";

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
	CHE:		string;
	COE:		string;
	faiblesse:	string;
	résistance:	string;
}

interface Pokemon {
	id:			string;
	name:		string;
	num:		string;
	types:		string[];
	category:	string;
	location:	string;
	weight:		string;
	size:		string;
	gen:		string;
	che:		string;
	coe:		string;
	weak:		string;
	resist:		string;
}

export default function useFetchData() {
	const [data, setData] = useState<Pokemon[]>([]);
	
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
					che:		row.CHE,
					coe:		row.COE,
					weak:		row.faiblesse,
					resist:		row.résistance,
				})))
			})
			.catch(error => console.error('Error fetching CSV:', error));
	}, []);

	return data;
}

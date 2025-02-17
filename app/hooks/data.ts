"use client";

import { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface PkRow {
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
}

export interface Pokemon {
	id:			string;
	name:		string;
	num:		string;
	types:		string[];
	category:	string;
	image:		string;
	weight:		string;
	size:		string;
	gen:		string;
	che:		string;
	coe:		string;
}

export interface WSRow {
	type:		string;
	faiblesses:	string;
	resistance:	string;
}

export interface WSData {
	type:	string;
	weak:	string;
	strong:	string;
}

export function useFetchPokemonData() {
	const [data, setData] = useState<Pokemon[]>([]);
	
	useEffect(() => {
	    fetch('/data.csv')
			.then(response => response.text())
			.then(text => {
				const parsed = Papa.parse(text, {
					header: true,
					skipEmptyLines: true,
				});
				
				setData((parsed.data as PkRow[]).map((row) => ({
					id:			encodeURIComponent(row.name),
					name:		row.name,
					num:		row.num,
					types:		[row.type1, row.type2||row.type1],
					category:	row.category,
					image:		`/images/${row.name.toLowerCase()}.png`,
					weight:		row.weight,
					size:		row.size,
					gen:		row.gen,
					che:		row.CHE,
					coe:		row.COE,
				})))
			})
			.catch(error => console.error('Error fetching CSV:', error));
	}, []);

	return data;
}

export function useFetchWSData() {
	const [data, setData] = useState<WSData[]>([]);
	
	useEffect(() => {
	    fetch('/weak-strong.csv')
			.then(response => response.text())
			.then(text => {
				const parsed = Papa.parse(text, {
					header: true,
					skipEmptyLines: true,
				});
				
				setData((parsed.data as WSRow[]).map((row) => ({
					type:	row.type,
					weak:	row.faiblesses,
					strong:	row.resistance,
				})))
			})
			.catch(error => console.error('Error fetching CSV:', error));
	}, []);

	return data;
}

export function getTypesList() {
	return ["acier", "combat", "dragon", "eau", "électrik", "fée", "feu", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "ténèbres", "vol"]
}

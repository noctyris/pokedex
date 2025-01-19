import { createHash } from "crypto";
import Papa from "papaparse";

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
}

export async function fetchData(): Promise<Pokemon[]> {
	const response = await fetch(`${process.env.baseUrl}/data.csv`);
	const csv = await response.text();
	const parsed = Papa.parse(csv, {
		header:			true,
		skipEmptyLines:	true,
	});

	const formattedData = (parsed.data as Row[]).map((row) => {
		if (row.name !== "") {
			return {
				id: createHash("md5").update(JSON.stringify(row)).digest("hex").slice(0, 6),
				name: row.name,
				num: row.num,
				types: [row.type1, row.type2],
				category: row.category,
				location: `/images/${row.name.toLowerCase()}.png`,
				weight: row.weight,
				size: row.size,
				gen: row.gen,
			};
		}
		return null;
	}).filter((item) => item!==null);

	return formattedData as Pokemon[];
}

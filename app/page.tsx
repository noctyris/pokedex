"use client";

import Image from "next/image";
import Link from "next/link";
import useFetchData from "@/app/data";
import { useSearchParams } from "next/navigation";

import FilterButton from "@/app/ui/FilterButton"

export default function Home() {
	const data = useFetchData();
	const searchParams = useSearchParams();

	const filteredType = searchParams.get("type") ? searchParams.get("type") : "Tous"
	const filteredGen = searchParams.get("gen") ? searchParams.get("gen") : "Tous"

	const TYPES_MAP = {
		Tous: () => true,
		...Object.fromEntries(["acier", "combat", "dragon", "eau", "électrik", "fée", "feu", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "ténèbres", "vol"]
			.map((type) => [
				type, (pk) => pk.types.some((t) => t.toLowerCase() === type),
			])
		),
	};
	const TYPES_NAMES = Object.keys(TYPES_MAP).map((name) => name.charAt(0).toUpperCase() + name.slice(1));

	const GEN_MAP = {
		Tous: () => true,
		1: (pk) => pk.gen === "1",
		2: (pk) => pk.gen === "2",
		3: (pk) => pk.gen === "3",
		4: (pk) => pk.gen === "4",
		5: (pk) => pk.gen === "5",
		6: (pk) => pk.gen === "6",
		7: (pk) => pk.gen === "7",
		8: (pk) => pk.gen === "8",
		9: (pk) => pk.gen === "9",
		Méga: (pk) => pk.gen.toLowerCase() === "méga",
		Gigamax: (pk) => pk.gen.toLowerCase() === "gigamax",
	};
	const GEN_NAMES = Object.keys(GEN_MAP);
	
	const pkmnsList = data
		.filter(TYPES_MAP[filteredType])
		.filter(GEN_MAP[filteredGen])
		.map((pk) => {
			if (pk.name!=="") {
				return (
					<Link key={pk.id} href={`/pokemon/${pk.id}`}>
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
			<header className="flex flex-col items-center">
				<h1 className="text-3xl my-6 flex flex-row justify-center items-center">P<Image width={30} height={30} alt="o" className="h-8" src="/favicon.svg" />kedex</h1>
				<div className="flex flex-row justify-around w-full mb-6">
					<FilterButton
						options={TYPES_NAMES}
						name="Type"
						query="type"
					/>
					<FilterButton
						options={GEN_NAMES}
						name="Génération"
						value={filteredGen}
						query="gen"
					/>
				</div>
			</header>
			<main className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] justify-center">
				{pkmnsList}
			</main>
		</div>
	);
}

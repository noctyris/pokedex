"use client";

import Image from "next/image";
import Link from "next/link";
import { useFetchData, getTypesList } from "@/app/data";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import FilterButton from "@/app/ui/FilterButton"
import FilterButtonFallback from "@/app/ui/FilterButtonFallback"
import UILoadingScreen from "@/app/ui/LoadingScreen"

interface Pk {
	gen: string,
	types: string[],
}

function HomeView() {
	const data = useFetchData();
	const searchParams = useSearchParams();
	
	if (!data.length) return <UILoadingScreen />
	
	const filteredType = searchParams.get("type") ? searchParams.get("type") : "Tous"
	const filteredGen = searchParams.get("gen") ? searchParams.get("gen") : "Tous"

	const TYPES_MAP = {
		Tous: () => true,
		...Object.fromEntries(getTypesList()//["acier", "combat", "dragon", "eau", "électrik", "fée", "feu", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "ténèbres", "vol"]
			.map((type) => [
				type, (pk: Pk) => pk.types.some((t) => t.toLowerCase() === type),
			])
		),
	};
	const TYPES_NAMES = Object.keys(TYPES_MAP).map((name) => name.charAt(0).toUpperCase() + name.slice(1));

	const GEN_MAP = {
		Tous: () => true,
		1:		(pk: Pk) => pk.gen === "1",
		2:		(pk: Pk) => pk.gen === "2",
		3:		(pk: Pk) => pk.gen === "3",
		4:		(pk: Pk) => pk.gen === "4",
		5:		(pk: Pk) => pk.gen === "5",
		6:		(pk: Pk) => pk.gen === "6",
		7:		(pk: Pk) => pk.gen === "7",
		8:		(pk: Pk) => pk.gen === "8",
		9:		(pk: Pk) => pk.gen === "9",
		Méga:	(pk: Pk) => pk.gen.toLowerCase() === "méga",
		Gigamax:(pk: Pk) => pk.gen.toLowerCase() === "gigamax",
	};
	const GEN_NAMES = Object.keys(GEN_MAP);

	type TypeKeys = keyof typeof TYPES_MAP;
	type GenKeys = keyof typeof GEN_MAP;
	
	const pkmnsList = data
		.filter(TYPES_MAP[filteredType as TypeKeys])
		.filter(GEN_MAP[filteredGen as GenKeys])
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
					<Suspense fallback={<FilterButtonFallback />}>
						<FilterButton
							options={TYPES_NAMES}
							name="Type"
							query="type"
						/>
					</Suspense>
					<Suspense fallback={<FilterButtonFallback />}>
						<FilterButton
							options={GEN_NAMES}
							name="Génération"
							query="gen"
						/>
					</Suspense>
				</div>
			</header>
			<main className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] justify-center">
				{pkmnsList}
			</main>
		</div>
	);
}

export default function Home() {
	return (
		<Suspense>
			<HomeView />
		</Suspense>
	)
}

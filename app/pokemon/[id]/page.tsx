"use client";

import { useFetchPokemonData, useFetchWSData } from "@/app/hooks/data";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Cross from "@/app/ui/Cross"
import UILoadingScreen from "@/app/ui/LoadingScreen"
import DataCard from "@/app/ui/pkpage/DataCard"
import EvoChain from "@/app/ui/pkpage/EvoChain"
import ShowWS from "@/app/ui/pkpage/ShowWS"

export default function PokemonPage() {
	const targetId = usePathname().split('/')[2]
	const rawPokemon = useFetchPokemonData();
	const rawWS = useFetchWSData();


	if (rawPokemon.length === 0) {
		return <UILoadingScreen />;
	}

	const pkmn = rawPokemon.filter((pk) => pk.id === targetId)[0];
		
	return (
		<>
			<header className="mt-4 flex flex-row justify-around items-center">
				<p className="text-3xl">{pkmn.name}</p>
				<Link href="/">
					<Cross />
				</Link>
			</header>
			<main className="flex flex-col space-y-5 my-5">
				<section className={`flex flex-row justify-around bg-gradient-to-r from-${pkmn.types[0].toLowerCase()} via-background to-${pkmn.types[1].toLowerCase()} py-5`}>
					<div className={`bg-${pkmn.types[0].toLowerCase()} aspect-square h-fit my-auto p-4 rounded-full md:scale-100 scale-75`}>
						<Image src={`/types/${pkmn.types[0].toLowerCase()}.svg`} height={70} width={70} alt={`Logo du type ${pkmn.types[0]}`} />
					</div>
					<Image src={pkmn.image} width={250} height={250} priority alt={`Image de ${pkmn.name}`} />
					<div className={`bg-${pkmn.types[1].toLowerCase()} aspect-square h-fit my-auto p-4 rounded-full md:scale-100 scale-75`}>
						<Image src={`/types/${pkmn.types[1].toLowerCase()}.svg`} height={70} width={70} alt={`Logo du type ${pkmn.types[1]}`} />
					</div>
				</section>
				<section className="px-3 grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(50px,150px))] justify-center">
					<DataCard title="Numéro" value={pkmn.num} />
					<DataCard title="Catégorie" value={pkmn.category} />
					<DataCard title="Génération" value={pkmn.gen.match(/^\d+$/)===null ? pkmn.gen : pkmn.gen + "ᵉ"} />
					<DataCard title="Poids" value={pkmn.weight ? pkmn.weight + " kg" : "Inconnu"} />
					<DataCard title="Taille" value={pkmn.size ? pkmn.size + " m" : "Inconnu" } />
				</section>
				{pkmn.che && EvoChain(pkmn, rawPokemon)}
				{ShowWS(pkmn, rawWS)}
			</main>
		</>
	)
}

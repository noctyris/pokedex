"use client";

import fetchData from "@/app/fetchData";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Cross from "@/app/ui/Cross"
import UILoadingScreen from "@/app/ui/LoadingScreen"

function DataCard(props) {
	return (
		<div className="bg-cardbg flex flex-col items-center p-2 rounded-2xl border-foreground border-2">
			<p className="">{props.title}</p>
			{props.value}
		</div>
	)
}

function LinkedCard(props) {
	return (
		<Link href={`/pokemon/${props.id}`} className="flex flex-col items-center bg-cardbg p-2 py-5 aspect-square object-contain border-foreground border-2 rounded-2xl">
			<Image src={props.location} width={100} height={100} alt={`Image de props.name`} />
			<p className="text-xs">{props.name}</p>
		</Link>
	)
}

export default function PokemonPage() {
	const targetId = usePathname().split('/')[2]
	const rawData = fetchData();
	const pkmn = rawData.filter((pk) => pk.id === targetId)[0];
	const linkedPkmns = rawData.filter((pk) => pk.num === pkmn.num && pk.name !== pkmn.name);

	const linkedPkmnsList = linkedPkmns.map((pk) => (
		<LinkedCard key={pk.id} location={pk.location} id={pk.id} name={pk.name}  />
	))

	try {
		return (
			<>
				<header className="mt-4 flex flex-row justify-around items-center">
					<p className="text-3xl">{pkmn.name}</p>
					<Link href="/">
						<Cross color="#ffffff" size={40}/>
					</Link>
				</header>
				<section className={`flex flex-row justify-around my-5 bg-gradient-to-r from-${pkmn.types[0].toLowerCase()} via-background to-${pkmn.types[1]!=="" ? pkmn.types[1].toLowerCase() : pkmn.types[0].toLowerCase()} py-5`}>
					<Image className={`bg-${pkmn.types[0].toLowerCase()} aspect-square h-fit my-auto p-4 rounded-full`} src={`/types/${pkmn.types[0].toLowerCase()}.svg`} height={100} width={100} alt={`Image du type ${pkmn.types[0]}`} />
					<Image src={pkmn.location} width={250} height={250} priority alt={`Image fr ${pkmn.name}`} />
					<Image className={`bg-${pkmn.types[1]!=="" ? pkmn.types[1].toLowerCase() : pkmn.types[0].toLowerCase()} aspect-square h-fit my-auto p-4 rounded-full`} src={`/types/${pkmn.types[1]!=="" ? pkmn.types[1].toLowerCase() : pkmn.types[0].toLowerCase()}.svg`} height={100} width={100} alt={`Image du type ${pkmn.types[1] !== "" ? pkmn.types[1] : pkmn.types[0]}`} />
				</section>
				<section className="px-3 grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(50px,150px))] justify-center">
					<DataCard title="Numéro" value={pkmn.num} />
					<DataCard title="Catégorie" value={pkmn.category} />
					<DataCard title="Génération" value={pkmn.gen.match(/^\d+$/)===null ? (<p>{pkmn.gen}</p>) : (<p>{pkmn.gen}<sup>e</sup></p>)} />
					<DataCard title="Poids" value={pkmn.weight ? pkmn.weight + " kg" : "?"} />
					<DataCard title="Taille" value={pkmn.size ? pkmn.size + " m" : "?" } />
				</section>
				{ linkedPkmns.length ? 
				<section className="py-6">
					<p className="text-center pb-3">En lien</p>
					<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(50px,150px))] justify-center">{linkedPkmnsList}</div>
				</section>
				: "" }
			</>
		)
	} catch (e) {
		return <UILoadingScreen />;
	}
}

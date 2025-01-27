"use client";

import useFetchData from "@/app/data";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Cross from "@/app/ui/Cross"
import UILoadingScreen from "@/app/ui/LoadingScreen"

interface DataCardProps {
	title:	string,
	value:	string,
}

interface EvoCardProps {
	id:			string,
	name:		string,
	location:	string,
	coe:		string,
}

function DataCard(props: DataCardProps) {
	return (
		<div className="bg-cardbg flex flex-col items-center p-2 rounded-2xl border-foreground border-2">
			<p className="">{props.title}</p>
			<p>{props.value}</p>
		</div>
	)
}

function EvoCard(props: EvoCardProps) {
	return (
		<Link href={`/pokemon/${props.id}`} className="flex flex-col items-center bg-cardbg px-2 py-5 border-foreground border-2 rounded-2xl">
			<p className="text-xs">{props.coe ? `${props.coe}` : "Base"}</p>
			<Image className="aspect-square object-contain" src={props.location} width={100} height={100} alt={`Image de ${props.name}`} />
			<p className="text-sm">{props.name}</p>
		</Link>
	)
}

export default function PokemonPage() {
	const targetId = usePathname().split('/')[2]
	const rawData = useFetchData();
	const pkmn = rawData.filter((pk) => pk.id === targetId)[0]);
	const evoPkmns = rawData.filter((pk) => pk.che!=="" && pk.che.split('_').slice(0,2).toString() === pkmn.che.split('_').slice(0,2).toString());

	const sortedEvo = evoPkmns.sort((x, y) => x.che.split('_').length - y.che.split('_').length)
	console.log(rawData)

	const evoPkmnsList = evoPkmns.map((pk) => (
		<EvoCard key={pk.id} location={pk.location} id={pk.id} name={pk.name} coe={pk.coe} />
	))

	try {
		return (
			<>
				<header className="mt-4 flex flex-row justify-around items-center">
					<p className="text-3xl">{pkmn.name}</p>
					<Link href="/">
						<Cross />
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
					<DataCard title="Génération" value={pkmn.gen.match(/^\d+$/)===null ? pkmn.gen : pkmn.gen + "ᵉ"} />
					<DataCard title="Poids" value={pkmn.weight ? pkmn.weight + " kg" : "?"} />
					<DataCard title="Taille" value={pkmn.size ? pkmn.size + " m" : "?" } />
					{pkmn.coe ? <DataCard title="Condition d'évolution" value={pkmn.coe} /> : ""}
			 </section>
				{pkmn.che ?
				<section className="py-6">
					<p className="text-center pb-3">{"Chaîne d'évolution"}</p>
					<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(75px,200px))] justify-center">{evoPkmnsList}</div>
				</section>
				: ""}
			</>
		)
	} catch {
		return <UILoadingScreen />;
	}
}

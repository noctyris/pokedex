"use client";

import { useFetchData, getTypesList } from "@/app/data";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { nanoid } from "nanoid"

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
			<p>{props.title}</p>
			<p className="text-sm">{props.value}</p>
		</div>
	)
}

function EvoCard(props: EvoCardProps) {
	return (
		<Link href={`/pokemon/${props.id}`} className="flex flex-col items-center bg-cardbg px-2 py-5 border-foreground border-2 rounded-2xl">
			<p className="text-xs">{props.coe ? props.coe : "Base"}</p>
			<Image className="aspect-square object-contain" src={props.location} width={100} height={100} alt={`Image de ${props.name}`} />
			<p className="text-sm">{props.name}</p>
		</Link>
	)
}

function ShowStats(tList: string) {
	function StatsCard(props: {type: string, value: string}) {
		return (
			<div className="flex">
				<Image src={`/types/${props.type.toLowerCase()}-color.svg`} width={20} height={20} alt={`Type ${props.type.toLowerCase()}`} />
				<p className="pl-10 py-1">{`${(parseFloat(props.value.slice(1))-1)*100>0 ? "+" : ""}${(parseFloat(props.value.slice(1))-1)*100}% dégats`}</p>
			</div>
		)
	}

	return getTypesList().map((type) => {
		if (!tList.toLowerCase().includes(type)) {
			return 
		}
		const tmp = tList.slice(tList.toLowerCase().indexOf(type)).toLowerCase().split(' ').slice(0,2)
		return <StatsCard key={nanoid()} type={tmp[0]} value={tmp[1]} />
	})
	
}

export default function PokemonPage() {
	const targetId = usePathname().split('/')[2]
	const rawData = useFetchData();

	if (rawData.length === 0) {
		return <UILoadingScreen />;
	}

	const pkmn = rawData.filter((pk) => pk.id === targetId)[0];
	
	const evoPkmns = rawData.filter((pk) => 
		pk.che !== "" && 
		pk.che.split('_')[0] === pkmn.che.split('_')[0]
	);

	const evoPkmnsList = evoPkmns.map((pk) => (
		<EvoCard key={pk.id} location={pk.location} id={pk.id} name={pk.name} coe={pk.coe} />
	))
		
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
		 </section>
		 <section className="py-6 px-5">
		 	<p className="text-center text-lg pb-2">Statistiques</p>
		 	<div className="flex flex-col items-center bg-cardbg border-2 w-2/3 pt-2 p-5 mx-auto rounded-3xl">
		 		<p className="pb-3">Défense</p>
			 	<div className="flex justify-between w-full">
 			 		<div className="flex flex-col items-center">
 			 			<p>Résistance</p>
 	 				 	{ShowStats(pkmn.resist)}
 			 		</div>
 			 		<div className="flex flex-col items-center">
 			 			<p>Faiblesse</p>
 					 	{ShowStats(pkmn.weak)}
 			 		</div>
 			 	</div>
		 	</div>
		 </section>
			{pkmn.che &&
			<section>
				<p className="text-center text-lg pb-3">{"Chaîne d'évolution"}</p>
				<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(75px,200px))] justify-center">{evoPkmnsList}</div>
			</section>}
		</>
	)
}

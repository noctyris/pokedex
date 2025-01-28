"use client";

import { useFetchData, getTypesList, Pokemon } from "@/app/data";
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


function ShowStats(tList: string) {
	function StatsCard(props: {type: string, value: string}) {
		return (
			<div className="flex">
				<Image src={`/types/${props.type.toLowerCase()}-color.svg`} width={25} height={25} alt={`Type ${props.type.toLowerCase()}`} />
				<p className="pl-10 py-1">{`${(parseFloat(props.value.slice(1))-1)*100>0 ? "+" : ""}${(parseFloat(props.value.slice(1))-1)*100}% dégats subis`}</p>
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

function groupPokemons(pkmns: Pokemon[]) {
	const result: (Pokemon[] | [])[] = []
	pkmns.forEach((pk) => {
		const key = parseInt(pk.che.split('_')[1].split('-')[0])-1
		if (result[key] === undefined) {
			result.splice(key, 0, [])
		}
		(result[key] as Pokemon[]).push(pk);
		(result[key] as Pokemon[]).sort((a, b) => a.che.localeCompare(b.che))
	});
	return result
}

function EvoCard(props: EvoCardProps) {
	return (
		<Link href={`/pokemon/${props.id}`} className="text-center bg-cardbg border-foreground border-2 rounded-2xl p-4 aspect-square">
			<p className="text-xs">{props.coe ? props.coe : "Base"}</p>
			<Image className="mx-auto aspect-square object-contain" src={props.location} width={100} height={100} alt={`Image de ${props.name}`} />
			<p className="text-sm">{props.name}</p>
		</Link>
	)
}

export default function PokemonPage() {
	const targetId = usePathname().split('/')[2]
	const rawData = useFetchData();

	if (rawData.length === 0) {
		return <UILoadingScreen />;
	}

	const pkmn = rawData.filter((pk) => pk.id === targetId)[0];
	
	const evoPkmns = groupPokemons(rawData.filter((pk) => 
		pk.che !== "" && 
		pk.che.split('_')[0] === pkmn.che.split('_')[0]
	));

	const evoPkmnsList = evoPkmns.map((pkList) => (
		<div key={nanoid()} className="flex flex-col items-center space-y-4">
			{pkList.map((pk) => (
				<EvoCard key={pk.id} location={pk.location} id={pk.id} name={pk.name} coe={pk.coe} />
			))}
		</div>
	))
		
	return (
		<>
			<header className="mt-4 flex flex-row justify-around items-center">
				<p className="text-3xl">{pkmn.name}</p>
				<Link href="/">
					<Cross />
				</Link>
			</header>
			<main className="flex flex-col space-y-5 my-5">
				<section className={`flex flex-row justify-around bg-gradient-to-r from-${pkmn.types[0].toLowerCase()} via-background to-${pkmn.types[1]!=="" ? pkmn.types[1].toLowerCase() : pkmn.types[0].toLowerCase()} py-5`}>
					<div className={`bg-${pkmn.types[0].toLowerCase()} aspect-square h-fit my-auto p-4 rounded-full md:scale-100 scale-75`}>
						<Image src={`/types/${pkmn.types[0].toLowerCase()}.svg`} height={70} width={70} alt={`Image du type ${pkmn.types[0]}`} />
					</div>
					<Image src={pkmn.location} width={250} height={250} priority alt={`Image fr ${pkmn.name}`} />
					<div className={`bg-${pkmn.types[1]!=="" ? pkmn.types[1].toLowerCase() : pkmn.types[0].toLowerCase()} aspect-square h-fit my-auto p-4 rounded-full md:scale-100 scale-75`}>
						<Image src={`/types/${pkmn.types[1]!=="" ? pkmn.types[1].toLowerCase() : pkmn.types[0].toLowerCase()}.svg`} height={70} width={70} alt={`Image du type ${pkmn.types[1] !== "" ? pkmn.types[1] : pkmn.types[0]}`} />
					</div>
				</section>
				<section className="px-3 grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(50px,150px))] justify-center">
					<DataCard title="Numéro" value={pkmn.num} />
					<DataCard title="Catégorie" value={pkmn.category} />
					<DataCard title="Génération" value={pkmn.gen.match(/^\d+$/)===null ? pkmn.gen : pkmn.gen + "ᵉ"} />
					<DataCard title="Poids" value={pkmn.weight ? pkmn.weight + " kg" : "?"} />
					<DataCard title="Taille" value={pkmn.size ? pkmn.size + " m" : "?" } />
				</section>
				{pkmn.che &&
				<section>
					<p className="text-center text-lg pb-3">{"Chaîne d'évolution"}</p>
					<div className="flex md:flex-row flex-col justify-evenly items-center">
						{evoPkmnsList}
					</div>
				</section>}
				<section>
					<div className="flex flex-col items-center bg-cardbg border-2 border-foreground w-2/3 p-5 mx-auto rounded-3xl">
						<div className="flex justify-around w-full md:flex-row flex-col">
							<div className="flex flex-col items-center space-y-1">
								<p>Résistance</p>
								{ShowStats(pkmn.resist)}
							</div>
							<hr className="md:invisible visible m-8" />
							<div className="flex flex-col items-center space-y-1">
								<p>Faiblesse</p>
								{ShowStats(pkmn.weak)}
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

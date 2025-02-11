import { nanoid } from "nanoid";

import { Pokemon } from "@/app/hooks/data";

import Link from "next/link";
import Image from "next/image";

interface EvoCardProps {
	id:			string,
	name:		string,
	image:		string,
	coe:		string,
}

function groupPokemons(pkmns: Pokemon[]) {
	const result: (Pokemon[] | [])[] = []
	pkmns.forEach((pk) => {
		const key = parseInt(pk.che.split('_')[1].split('-')[0])-1
		if (result[key] === undefined) {
			result[key]=[]
		}
		(result[key] as Pokemon[]).push(pk);
		(result[key] as Pokemon[]).sort((a, b) => a.che.localeCompare(b.che))
	});
	return result
}

function EvoCard(props: EvoCardProps) {
	return (
		<Link href={`/pokemon/${props.id}`} className="text-center bg-cardbg border-foreground border-2 rounded-2xl p-4 aspect-square md:my-1 my-5">
			<p className="text-xs">{props.coe ? props.coe : "Base"}</p>
			<Image className="mx-auto aspect-square object-contain" src={props.image} width={100} height={100} alt={`Image de ${props.name}`} />
			<p className="text-sm">{props.name}</p>
		</Link>
	)
}

export default function EvoChain(pkmn: Pokemon, rawPokemon: Pokemon[]) {
    const evoPkmns = groupPokemons(rawPokemon.filter((pk) =>
		pk.che !== "" &&
		pk.che.split('_')[0] === pkmn.che.split('_')[0]
	));

	const evoPkmnsList = evoPkmns.map((pkList) => (
		<div key={nanoid()} className="flex md:flex-col items-center md:space-y-4 space-y-0">
			{pkList.map((pk) => (
				<EvoCard key={pk.id} image={pk.image} id={pk.id} name={pk.name} coe={pk.coe} />
			))}
		</div>
	))

    return (
		<section>
			<p className="text-center text-lg pb-3">{"Chaîne d'évolution"}</p>
			<div className="flex md:flex-row flex-col justify-evenly items-center">
				{evoPkmnsList}
			</div>
		</section>
	)
}

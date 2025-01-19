import Image from "next/image";
import Link from "next/link";
import { fetchData } from "./fetchData.ts"

export default async function Home() {
	const DATA = await fetchData();

	const pkmnsList = DATA.map((pk) => {
		if (pk.name!=="") {
			return (
				<Link key={pk.id} href={``}>
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
			<h1 className="text-4xl text-center my-6">Pokedex</h1>
			<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] justify-center">
				{pkmnsList}
			</div>
		</div>
	);
}

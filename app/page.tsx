"use client";

import Image from "next/image";
import Link from "next/link";
import useFetchData from "@/app/data";

import UILoadingScreen from "@/app/ui/LoadingScreen"

export default function Home() {
	const data = useFetchData();

	const pkmnsList = data.map((pk) => {
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

	try {
		return (
			<div>
				<h1 className="text-3xl my-6 flex flex-row justify-center items-center">P<Image width={30} height={30} alt="o" className="h-8" src="/favicon.svg" />kedex</h1>
				<div className="grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(150px,250px))] justify-center">
					{pkmnsList}
				</div>
			</div>
		);
	} catch {
		return <UILoadingScreen />
	}
}

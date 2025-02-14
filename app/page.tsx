"use client";

import Image from "next/image";
import Link from "next/link";
import { useFetchPokemonData, getTypesList } from "@/app/hooks/data";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

import { FilterButton, FilterButtonFallback } from "@/app/ui/FilterButton"
import UILoadingScreen from "@/app/ui/LoadingScreen"
import { Search, SearchFallback } from "@/app/ui/Search"
import ScrollUp from "@/app/ui/ScrollUp"

interface Pk {
	gen:	string,
	types:	string[],
	name:	string,
}

interface HomeViewProps {
	isLoading:		boolean,
	setIsLoading:	(loading: boolean) => void;
	scrollY:		number;
}

function HomeView(props: HomeViewProps) {
	const data = useFetchPokemonData();
	const searchParams = useSearchParams();
	const request:string = searchParams.get('query') || '';

	const { isLoading, setIsLoading } = props;

	useEffect(() => {
		if (data.length > 0) {
			setIsLoading(false);
		}
	}, [data, setIsLoading])

	const handleLinkClick = () => {
		sessionStorage.setItem('scrollY', window.scrollY.toString());
	};

	
	const filteredType = searchParams.get("type") || "Tous";
	const filteredGen = (searchParams.get('gen') || 'Tous').replace(/^./, m => m.toUpperCase());
	

	const TYPES_MAP = {
		Tous: () => true,
		...Object.fromEntries(getTypesList()
			.map((type) => [
				type, (pk: Pk) => pk.types.some((t) => t.toLowerCase() === type),
			])
		),
	};
	
	const GEN_MAP = {
		Tous: () => true,
		1:		(pk: Pk) => pk.gen.includes("1"),
		2:		(pk: Pk) => pk.gen.includes("2"),
		3:		(pk: Pk) => pk.gen.includes("3"),
		4:		(pk: Pk) => pk.gen.includes("4"),
		5:		(pk: Pk) => pk.gen.includes("5"),
		6:		(pk: Pk) => pk.gen.includes("6"),
		7:		(pk: Pk) => pk.gen.includes("7"),
		8:		(pk: Pk) => pk.gen.includes("8"),
		9:		(pk: Pk) => pk.gen.includes("9"),
		Méga:	(pk: Pk) => pk.gen.toLowerCase().includes("méga"),
		Gigamax:(pk: Pk) => pk.gen.toLowerCase().includes("gigamax"),
	};
	
	const TYPES_NAMES = Object.keys(TYPES_MAP).map((name) => name.charAt(0).toUpperCase() + name.slice(1));
	const GEN_NAMES = Object.keys(GEN_MAP);

	type TypeKeys = keyof typeof TYPES_MAP;
	type GenKeys = keyof typeof GEN_MAP;
	
	const pkmnsList = data
		.filter(TYPES_MAP[filteredType as TypeKeys])
		.filter(GEN_MAP[filteredGen as GenKeys])
		.filter((pk: Pk) => pk.name.toLowerCase().includes(request.toLowerCase()))
		.map((pk) => {
			if (pk.name!=="") {
				return (
					<Link key={pk.id} href={`/pokemon/${pk.id}`} onClick={handleLinkClick}>
						<div className={`rounded-3xl aspect-square p-2 bg-gradient-to-br from-${pk.types[0].toLowerCase()} to-${pk.types[1].toLowerCase()}`}>
							<div className="flex flex-col items-center justify-around text-black aspect-square bg-[#ffffff80] p-5 rounded-2xl hover:shadow-2xl transition-all duration-400">
								<Image src={pk.image} width={150} height={150} alt={`Image of ${pk.name}`} className="aspect-square object-contain" />
								<p className="pb-1">{pk.name}</p>
								<p className="text-xs">N°{pk.num}</p>
							</div>
						</div>
					</Link>
				)
			}
	});
  
	return (isLoading ? <UILoadingScreen /> :
		<>
			<header className="flex flex-col items-center">
				<h1 className="text-3xl my-6 flex flex-row justify-center items-center">P<Image width={30} height={30} alt="o" className="h-8" src="/favicon.svg" />kedex</h1>
				<div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:w-full w-4/5 mb-6 space-x-0 md:space-x-10 md:px-10 space-y-2 md:space-y-0">
					<Suspense fallback={<FilterButtonFallback />}>
						<FilterButton
							options={TYPES_NAMES}
							name="Type"
							query="type"
						/>
					</Suspense>
					<Suspense fallback={<SearchFallback />}>
						<Search />
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
			{props.scrollY>0 && <ScrollUp />}
		</>
	);
}

const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [savedScrollY, setSavedScrollY] = useState<number | null>(null);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const scrollY = sessionStorage.getItem('scrollY');
			if (scrollY) {
				setSavedScrollY(parseInt(scrollY, 10));
				sessionStorage.removeItem('scrollY');
			}
		}
	}, []);

	useEffect(() => {
		if (savedScrollY !== null && !isLoading) {
			window.scrollTo(0, savedScrollY);
		}
	}, [isLoading, savedScrollY]);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	return (
		<Suspense>
			<HomeView scrollY={scrollY} isLoading={isLoading} setIsLoading={setIsLoading} />
		</Suspense>
	);
}

export default Home;

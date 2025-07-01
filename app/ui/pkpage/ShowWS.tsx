import { getTypesList, Pokemon, WSData } from "@/app/hooks/data";
import Image from "next/image";
import { nanoid } from "nanoid";

function WS(tList: string) {
	function WSLine(props: {type: string, value: string}) {
		return (
			<div className="flex">
				<Image src={`/types/${props.type.toLowerCase()}-color.svg`} width={25} height={25} alt={`Type ${props.type.toLowerCase()}`} />
				<p className="pl-10 py-1">{`${(parseFloat(props.value.slice(1))-1)*100>0 ? "+" : ""}${(parseFloat(props.value.slice(1))-1)*100}% dégats subis`}</p>
			</div>
		)
	}

    const ws = getTypesList().map((type) => tList.toLowerCase().includes(type) && tList.slice(tList.toLowerCase().indexOf(type)).toLowerCase().split(' ').slice(0,2)).filter(item => item)a.sort((a,b) => parseFloat(b[1]) - parseFloat(a[1])).reverse();
    console.log(tList);
    console.log(ws);

	return getTypesList().map((type) => {
		if (!tList.toLowerCase().includes(type)) {
			return
		}
		const tmp = tList.slice(tList.toLowerCase().indexOf(type)).toLowerCase().split(' ').slice(0,2)
		return <WSLine key={nanoid()} type={tmp[0]} value={tmp[1]} />
	})

}

export default function ShowWS(pkmn: Pokemon, rawWS: WSData[]) {
    const idWS = (pkmn.types[0] === pkmn.types[1]) ? [pkmn.types[0].toLowerCase()] : [pkmn.types.join('/').toLowerCase(), pkmn.types.reverse().join('/').toLowerCase()]
	const filteredWS = rawWS.filter((ws: { type: string }) => idWS.includes(ws.type.toLowerCase()))[0];

    return filteredWS &&
        <section>
            <div className="flex flex-col items-center bg-cardbg border-2 border-foreground w-2/3 p-5 mx-auto rounded-3xl">
                <div className="flex justify-around w-full md:flex-row flex-col">
                    <div className="flex flex-col items-center space-y-1">
                        <p>Résistance</p>
                        {WS(filteredWS.strong)}
                    </div>
                    <hr className="md:invisible visible m-8" />
                    <div className="flex flex-col items-center space-y-1">
                        <p>Faiblesse</p>
                        {WS(filteredWS.weak)}
                    </div>
                </div>
            </div>
        </section>

}

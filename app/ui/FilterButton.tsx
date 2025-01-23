import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from 'react';

interface FilterButtonProps {
	options:	string[],
	name:		string,
	query:		string,
}

export default function FilterButton(props: FilterButtonProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	function handleChange (e) {
		router.push(pathname + '?' + createQueryString(props.query, (e.target.value.toLowerCase() !== "tous") ? e.target.value.toLowerCase() : ""));
	}

	return (
		<select onChange={handleChange} className="bg-transparent border-2 border-foreground p-4 rounded-full">
			<option disabled>{props.name.toUpperCase()}</option>
			{props.options.map((op) => (
				<option key={op}>{op}</option>
			))}
		</select>
	)
}

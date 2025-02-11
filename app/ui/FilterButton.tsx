import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from 'react';

interface FilterButtonProps {
	options:	string[],
	name:		string,
	query:		string,
}

export function FilterButtonFallback() {
	return ""
}


export function FilterButton(props: FilterButtonProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	)

	function handleChange (e: React.ChangeEvent<HTMLSelectElement>) {
		if (e.target.value.toLowerCase() !== "tous") {
			router.push(pathname + '?' + createQueryString(props.query, e.target.value.toLowerCase()));
		} else {
			router.push(pathname + '?' + createQueryString(props.query, ""))
		}
	}

	return (
		<select defaultValue={props.name} onChange={handleChange} className="bg-transparent border-2 border-foreground p-4 rounded-full">
			<option disabled>{props.name}</option>
			{props.options.map((op) => (
				<option key={op}>{op}</option>
			))}
		</select>
	)
}

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';


interface FilterButtonProps {
	options:	string[],
	name:		string,
	query:		string,
}

interface ARSecondFilterProps {
	setSecondTypeFilter: (value: boolean) => void;
}

export function FilterButtonFallback() {
	return ""
}

export function AddSecondFilter(props: ARSecondFilterProps) {
	return (
		<div onClick={() => props.setSecondTypeFilter(true)} className="w-10 border-2 border-foreground text-foreground rounded-2xl">
			<PlusIcon />
		</div>
	)
}

export function RemoveSecondFilter(props: ARSecondFilterProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	function handleRemove() {
		props.setSecondTypeFilter(false);
		const params = new URLSearchParams(searchParams);
		params.delete('type2');
		router.replace(`${pathname}?${params.toString()}`)
	}

	return (
		<div onClick={handleRemove} className="w-10 border-2 border-foreground text-foreground rounded-2xl">
			<TrashIcon />
		</div>
	)
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

		// Verify if val = none
		if (e.target.value === "Tous") {
			const params = new URLSearchParams(searchParams);
			params.delete(props.query);
			router.replace(`${pathname}?${params.toString()}`)
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

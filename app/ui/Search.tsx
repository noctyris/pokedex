"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export function SearchFallback() {
	return ''
}

export function Search({ placeholder }: {placeholder?: string}) {
	const searchParams= useSearchParams()
	const pathname = usePathname();
	const { replace } = useRouter()
;	
	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('req', term);
		} else {
			params.delete('req')
		}
		replace(`${pathname}?${params.toString()}`)
	}, 300)

	return (
		<div className="relative flex flex-1 flex-shrink-0 border-2 border-foreground rounded-full w-full max-w-1/2">
			<label htmlFor='search' className='sr-only'>
				Recherche
			</label>
			<input 
				className="bg-transparent py-4 px-10 w-full rounded-full"
				type="text"
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('req')?.toString()}
			/>
			<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</div>
	)
}

import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ScrollUp() {
    const handleScrollUp = () => {
        window.scrollTo({
            top:        0,
            left:       0,
            behavior:   'smooth',
        })
    }

    return (
        <div onClick={handleScrollUp} className="fixed bottom-0 right-0 m-4 w-[3.25rem] aspect-square object-contain bg-foreground rounded-full">
            <ChevronUpIcon className="text-background" />
        </div>
    )
}

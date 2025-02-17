interface DataCardProps {
	title:	string;
	value:	string | React.ReactNode;
}

export default function DataCard(props: DataCardProps) {
	return (
		<div className="bg-cardbg flex flex-col items-center p-2 rounded-2xl border-foreground border-2">
			<p>{props.title}</p>
			<p className="text-sm">{props.value}</p>
		</div>
	)
}

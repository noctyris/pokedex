import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pokedex",
	description: "Created by Noctyris",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="fr">
			<body
				className={`${montserrat.className} antialiased`}
			>
				{children}
				<noscript>
				Le JavaScript est désactivé, le monde des pokémons est inaccessible.
				</noscript>
			</body>
		</html>
	);
}

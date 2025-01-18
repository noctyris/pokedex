import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "acier": "rgb(86, 149, 163)",
        "combat": "rgb(211, 66, 95)",
        "dragon": "rgb(12, 105, 200)",
        "eau": "rgb(83, 157, 223)",
        "électrik": "rgb(242, 217, 78)",
        "fée": "rgb(238, 144, 230)",
        "feu": "rgb(251, 165, 76)",
        "glace": "rgb(117, 208, 193)",
        "insecte": "rgb(146, 188, 44)",
        "normal": "rgb(160, 162, 159)",
        "plante": "rgb(95, 189, 88)",
        "poison": "rgb(183, 99, 207)",
        "psy": "rgb(250, 133, 129)",
        "roche": "rgb(201, 187, 138)",
        "sol": "rgb(218, 124, 77)",
        "spectre": "rgb(95, 109, 188)",
        "ténèbres": "rgb(89, 87, 97)",
        "vol": "rgb(161, 187, 236)",
      },
    },
  },
  safelist: [
    {pattern: /from-(acier|combat|dragon|eau|électrik|fée|feu|glace|insecte|normal|plante|poison|psy|roche|sol|spectre|ténèbres|vol)/},
    {pattern: /to-(acier|combat|dragon|eau|électrik|fée|feu|glace|insecte|normal|plante|poison|psy|roche|sol|spectre|ténèbres|vol)/}
  ],
  plugins: [],
} satisfies Config;

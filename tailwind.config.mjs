/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        "supporting-gunmetal-100": "#515C6E",
        "supporting-gunmetal-200": "#444E5E",
        "supporting-gunmetal-300": "#394352",
        "supporting-gunmetal-400": "#303947",
        "supporting-gunmetal-500": "#28313E",
        "supporting-gunmetal-600": "#202833",
        "supporting-gunmetal-700": "#1A212B",
        "supporting-peach-500": "#FFEDB1",
        "neutral-200": "#E6E6E6",
        "primary-500": "#F89B13",
      },
      fontFamily: {
        "overpass-mono": ['"Overpass Mono"', "sans"],
        "overpass-regular": ['"Overpass Regular"', "sans"],
        "overpass-medium": ['"Overpass Medium"', "sans"],
      },
    },
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      "md": "600px"
    },
    extend: {
      colors: {
        "supporting-100": "#515C6E",
        "supporting-200": "#444E5E",
        "supporting-300": "#394352",
        "supporting-400": "#303947",
        "supporting-500": "#28313E",
        "supporting-600": "#202833",
        "supporting-700": "#1A212B",
        "neutral-100": "#FFFFFF",
        "neutral-200": "#E6E6E6",
        "neutral-300": "#D9D9D9",
        "neutral-400": "#CCCCCC",
        "neutral-500": "#BFBFBF",
        "neutral-600": "#ADADAD",
        "neutral-700": "#999999",
        "light-link": "#1F58B2",
        "light-link-visited": "#5C32C8",
        "light-link-hover-focus": "#3278E7",
        "light-link-active": "#0051D1",
        "dark-link": "#FFDBF1",
        "dark-link-visited": "#FF75A5",
        "dark-link-hover-focus": "#E5A9CE",
        "dark-link-active": "#FF75C9"
      },
      fontFamily: {
        "inter-light": ['"Inter Light"', "sans"],
        "inter-regular": ['"Inter Regular"', "sans"],
        "inter-medium": ['"Inter Medium"', "sans"],
        "inter-semibold": ['"Inter Semibold"', "sans"],
        "lora-bold": ['"Lora Bold"', "serif"]
      }
    },
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}

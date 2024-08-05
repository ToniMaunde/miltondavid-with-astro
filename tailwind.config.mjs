/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      "md": "600px"
    },
    extend: {
      colors: {
        "supporting": {
          "100": "#515C6E",
          "200": "#444E5E",
          "300": "#394352",
          "400": "#303947",
          "500": "#28313E",
          "600": "#202833",
          "700": "#1A212B"
        },
        "neutral": {
          "100": "#FFFFFF",
          "200": "#E6E6E6",
          "300": "#D9D9D9",
          "400": "#CCCCCC",
          "500": "#BFBFBF",
          "600": "#ADADAD",
          "700": "#999999",
        },
        "link": {
          "light": {
            "default": "#1F58B2",
            "visited": "#5C32C8",
            "hover-or-focus": "#3278E7",
            "active": "#0051D1",
          },
          "dark": {
            "default": "#FFDBF1",
            "visited": "#FF75A5",
            "hover-or-focus": "#E5A9CE",
            "active": "#FF75C9"
          }
        },
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

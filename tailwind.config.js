/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				"app-primary": "#280031",
				"app-secondary": "#6242fc",
				"app-tertiary": "#FF7F98",
				"app-quartiary": "#E8F953",
			},
			fontFamily: {
				"type-title": ["Silkscreen", "sans-serif"],
				"type-body": ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};

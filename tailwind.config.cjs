/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,css}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', 'sans-serif']
			}
		}
	},
	plugins: []
};

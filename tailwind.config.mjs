/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: "'Raleway Variable', system-ui, sans-serif",
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}

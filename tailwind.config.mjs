import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'

const withAlphaValue = (varName) => `hsl(var(--${varName}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,md,mdx,svelte,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: 'var(--font-sans)',
		},
		extend: {
			colors: {
				primary: colors.emerald,
				secondary: colors.purple,
				foreground: {
					brand: withAlphaValue('foreground-brand-color'),
					accent: withAlphaValue('foreground-accent-color'),
				},
				surface: {
					brand: {
						1: withAlphaValue('surface-brand-1-color'),
						2: withAlphaValue('surface-brand-2-color'),
					},
					accent: {
						1: withAlphaValue('surface-accent-1-color'),
					},
				},
				success: withAlphaValue('success-color'),
				error: withAlphaValue('error-color'),
			},
		},
	},
	plugins: [typography],
}

export default config

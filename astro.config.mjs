import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import solidJs from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	experimental: {
		i18n: {
			defaultLocale: 'en',
			locales: ['en', 'el'],
		},
	},
	markdown: {
		shikiConfig: {
			theme: 'dracula',
		},
	},
	prefetch: true,
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		partytown(),
		solidJs(),
		mdx(),
	],
	output: 'hybrid',
	adapter: vercel(),
})

import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_ROOT_URL
		? process.env.PUBLIC_ROOT_URL
		: process.env.VERCEL_URL
		  ? `https://${process.env.VERCEL_URL}`
		  : 'http://localhost:4321',
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
		solidJs(),
		mdx(),
	],
	output: 'hybrid',
	adapter: vercel(),
})

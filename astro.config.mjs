import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_ROOT_URL
		? process.env.PUBLIC_ROOT_URL
		: process.env.VERCEL_URL
		  ? `https://${process.env.VERCEL_URL}`
		  : 'http://localhost:4321',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'el'],
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
		svelte(),
		mdx(),
	],
	output: 'hybrid',
	adapter: vercel(),
})

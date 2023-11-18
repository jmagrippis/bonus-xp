import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	experimental: {
		i18n: {
			defaultLocale: 'en',
			locales: ['en', 'el'],
		},
	},
	prefetch: true,
	integrations: [tailwind(), partytown()],
})

import {z, defineCollection} from 'astro:content'

const svelteKitLearnChapters = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		chapterNumber: z.number(),
	}),
})

export const collections = {
	['sveltekit-learn']: svelteKitLearnChapters,
}

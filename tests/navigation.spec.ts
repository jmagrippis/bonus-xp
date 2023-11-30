import {test, expect} from '@playwright/test'

test('navigation smoke test', async ({page}) => {
	// start at the home page
	await page.goto('/')

	await expect(page).toHaveTitle(/Bonus XP/)

	// navigate to Courses
	await page
		.getByRole('link', {name: 'courses'})
		// Safari wants you to literally click the link,
		// so we cannot just click the header
		.filter({has: page.getByRole('heading', {name: 'courses', level: 2})})
		.click()
	// should get you straight to the only course, SvelteKit/Learn
	await expect(page).toHaveTitle(/SvelteKit\/Learn/)
	await expect(
		page.getByRole('heading', {
			name: 'Start building with SvelteKit',
			level: 1,
		}),
	).toBeVisible()

	// navigate back home
	await page.getByRole('link', {name: 'Bonus XP'}).click()
	await expect(page).toHaveTitle(/Bonus XP/)

	// navigate to Play
	await page
		.getByRole('link', {name: 'play'})
		.filter({has: page.getByRole('heading', {name: 'play', level: 2})})
		.click()
	await expect(page).toHaveTitle(/Play/)
	await expect(
		page.getByRole('heading', {
			name: 'Play',
			level: 1,
		}),
	).toBeVisible()
})

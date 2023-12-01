import {test, expect} from '@playwright/test'

test('can go through the whole quiz', async ({page}) => {
	await page.goto('/play/frontend-quiz')

	await expect(page).toHaveTitle(/Frontend Quiz/)
	await expect(
		page.getByRole('heading', {
			name: 'Welcome to the Frontend Quiz',
			level: 1,
		}),
	).toBeVisible()

	await page.getByRole('link', {name: 'Javascript'}).click()

	await expect(page).toHaveTitle(/Javascript \| Frontend Quiz/)
	await expect(
		page.getByRole('heading', {
			name: 'Javascript',
			level: 1,
		}),
	).toBeVisible()
})

test('can pick different subjects', async ({page}) => {
	// Can pick the HTML quiz
	await page.goto('/play/frontend-quiz')

	await page.getByRole('link', {name: 'HTML'}).click()

	await expect(page).toHaveTitle(/HTML \| Frontend Quiz/)
	await expect(
		page.getByRole('heading', {
			name: 'HTML',
			level: 1,
		}),
	).toBeVisible()

	// Can pick the CSS quiz
	await page.goto('/play/frontend-quiz')

	await page.getByRole('link', {name: 'CSS'}).click()

	await expect(page).toHaveTitle(/CSS \| Frontend Quiz/)
	await expect(
		page.getByRole('heading', {
			name: 'CSS',
			level: 1,
		}),
	).toBeVisible()

	// Can pick the Javascript quiz
	await page.goto('/play/frontend-quiz')

	await page.getByRole('link', {name: 'Javascript'}).click()

	await expect(page).toHaveTitle(/Javascript \| Frontend Quiz/)
	await expect(
		page.getByRole('heading', {
			name: 'Javascript',
			level: 1,
		}),
	).toBeVisible()

	// Can pick the Accessibility quiz
	await page.goto('/play/frontend-quiz')

	await page.getByRole('link', {name: 'Accessibility'}).click()

	await expect(page).toHaveTitle(/Accessibility \| Frontend Quiz/)
	await expect(
		page.getByRole('heading', {
			name: 'Accessibility',
			level: 1,
		}),
	).toBeVisible()
})

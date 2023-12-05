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

	await expect(page.getByText('Question 1 from 10')).toBeVisible()
	await expect(
		page.getByText(
			"Which syntax is correct to output 'Hello World' in an alert box?",
			{exact: true},
		),
	).toBeVisible()

	const answerAndGo = async (answer: string) => {
		await page.getByText(answer, {exact: true}).check()
		await page.getByRole('button', {name: 'Submit Answer'}).click()
		await page.getByRole('link', {name: 'Next Question'}).click()
	}

	await answerAndGo("alert('Hello World');")

	await expect(page.getByText('Question 2 from 10')).toBeVisible()
	await expect(
		page.getByText("How do you call a function named 'myFunction'?", {
			exact: true,
		}),
	).toBeVisible()

	// Make it all the way to the results page
	await answerAndGo('myFunction()')
	await answerAndGo('if i == 5')
	await answerAndGo('if (i != 5)')
	await answerAndGo('for (i = 0; i <= 5; i++)')
	await answerAndGo('//This is a single-line comment')
	await answerAndGo("var colors = ['red', 'green', 'blue']")
	await answerAndGo('Math.max(x, y)')
	await answerAndGo('=')

	// Answer final question
	await page
		.getByText("var person = {firstName: 'John', lastName: 'Doe'};")
		.check()
	await page.getByRole('button', {name: 'Submit Answer'}).click()
	await page.getByRole('link', {name: 'Show Results!'}).click()

	// Make it to the results page
	await expect(
		page.getByRole('heading', {
			name: 'Quiz completed',
			level: 1,
		}),
	).toBeVisible()

	await expect(page.getByText('10')).toBeVisible()
	await expect(page.getByText('out of 10')).toBeVisible()
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

import {defineConfig, devices} from '@playwright/test'

const projects = [
	{
		name: 'chromium',
		use: {...devices['Desktop Chrome']},
	},

	{
		name: 'firefox',
		use: {...devices['Desktop Firefox']},
	},
]

// Mobile Safari is flakey on CI for some reason
if (!process.env.CI) {
	projects.push({
		name: 'Mobile Safari',
		use: {...devices['iPhone 14 Pro Max']},
	})
}
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	// reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: process.env.PUBLIC_ROOT_URL || 'http://localhost:4321',

		// disable the Vercel deploy comments toolbar
		// https://vercel.com/docs/workflow-collaboration/comments/specialized-usage
		extraHTTPHeaders: {
			'x-vercel-skip-toolbar': '1',
		},

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
		video: 'on',
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: {...devices['Desktop Chrome']},
		},

		{
			name: 'firefox',
			use: {...devices['Desktop Firefox']},
		},

		// {
		//   name: 'webkit',
		//   use: { ...devices['Desktop Safari'] },
		// },

		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	],

	/* Run your local dev server before starting the tests */
	webServer: !process.env.CI
		? {
				command: 'pnpm run dev',
				port: 4321,
				reuseExistingServer: true,
			}
		: undefined,
})

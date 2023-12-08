<button
	class="relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent bg-surface-accent-1 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-foreground-accent focus:ring-offset-2"
	on:click={() => {
		window.toggleSubTheme && window.toggleSubTheme()
	}}
	style="view-transition-name: sub-theme-toggle;"
>
	<span class="sr-only">toggle subtheme</span>
	<div
		aria-hidden="true"
		class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 duration-200 ease-in-out"
	></div>
</button>

<style>
	[data-sub-theme='mentor'] {
		button div {
			@apply translate-x-5;
		}
	}
</style>

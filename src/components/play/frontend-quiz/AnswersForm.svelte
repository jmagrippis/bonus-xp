<script lang="ts">
	import CorrectIcon from './icons/CorrectIcon.svelte'
	import ErrorIcon from './icons/ErrorIcon.svelte'

	import type {Answer} from '@/pages/play/frontend-quiz/_types'

	export let question: string
	export let questionNumber: number

	export let options: string[]

	export let answer: Answer | null

	export let areThereMoreQuestions: boolean

	export let slug: string
</script>

<form method="POST" class="flex flex-col gap-4 md:gap-8">
	<fieldset
		class={`answer flex flex-col gap-4 md:gap-8 ${
			answer ? 'pointer-events-none' : ''
		}`}
	>
		<legend class="sr-only"
			>Please select one answer to the question: {question}</legend
		>
		{#each options as option, i}
			<div class="answer-toggle">
				<input
					id={`answer-${i}`}
					name="answer"
					type="radio"
					value={i}
					class="peer appearance-none focus:outline-none"
					checked={answer ? answer.selected === i : undefined}
					required
					data-is-correct={answer ? answer.actual === i : undefined}
				/>
				<label
					class="grid cursor-pointer items-center gap-4 rounded-xl border-2 border-surface-brand-2 bg-surface-brand-2 p-3 text-lg font-medium shadow transition-colors md:gap-8 md:text-2xl"
					for={`answer-${i}`}
				>
					<span
						class="answer-value transition-color grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-slate-500 duration-300"
					>
						{String.fromCharCode(64 + i + 1)}
					</span>
					<span>{option}</span>
					<div>
						{#if answer && answer.actual === i}
							<CorrectIcon class="w-8 text-success md:w-10" />
						{/if}
						{#if answer && answer.selected !== answer.actual && answer.selected === i}
							<ErrorIcon class="w-8 text-error md:w-10" />
						{/if}
					</div>
				</label>
			</div>
		{/each}
	</fieldset>
	{#if answer}
		{#if areThereMoreQuestions}
			<a
				href={`/play/frontend-quiz/${slug}/${questionNumber + 1}`}
				class="w-full rounded-xl bg-surface-accent-1 p-3 text-center text-lg font-medium text-white shadow transition-[filter] duration-300 hover:brightness-150 md:text-2xl"
			>
				Next Question
			</a>
		{:else}
			<a
				href={`/play/frontend-quiz/${slug}/results`}
				class="w-full rounded-xl bg-surface-accent-1 p-3 text-center text-lg font-medium shadow transition-[filter] duration-300 hover:brightness-150 md:text-2xl"
			>
				Show Results!
			</a>
		{/if}
	{:else}
		<button
			class="w-full rounded-xl bg-surface-accent-1 p-3 text-lg font-medium shadow transition-[filter] duration-300 hover:brightness-150 md:text-2xl"
		>
			Submit Answer
		</button>
	{/if}
</form>

<style lang="postcss">
	.answer {
		> .answer-toggle {
			@apply grid w-full;

			> * {
				grid-area: 1/1;
			}

			> input {
				&:checked[data-is-correct='true'] ~ label {
					@apply border-success;

					.answer-value {
						@apply bg-success text-white;
					}
				}

				&:checked[data-is-correct='false'] ~ label {
					@apply border-error;

					.answer-value {
						@apply bg-error text-white;
					}
				}

				&:not([data-is-correct]) {
					&:checked ~ label {
						@apply border-surface-accent-1;
						.answer-value {
							@apply bg-surface-accent-1 text-white;
						}
					}
				}

				&:not(:checked):is(:focus-within, :hover) ~ label {
					.answer-value {
						@apply bg-surface-accent-1/20 text-foreground-accent;
					}
				}
			}

			> label {
				display: grid;
				grid-template-columns: auto 1fr auto;
			}
		}
	}
</style>

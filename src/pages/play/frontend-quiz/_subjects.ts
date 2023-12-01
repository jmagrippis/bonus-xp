import AccessibilityIcon from '@/components/play/frontend-quiz/icons/Accessibility.astro'
import CSSIcon from '@/components/play/frontend-quiz/icons/CSS.astro'
import HTMLIcon from '@/components/play/frontend-quiz/icons/HTML.astro'
import JSIcon from '@/components/play/frontend-quiz/icons/JS.astro'

export const subjects = [
	{name: 'HTML', slug: 'html', icon: HTMLIcon, hsl: '22 100% 60%'},
	{name: 'CSS', slug: 'css', icon: CSSIcon, hsl: '151 68% 51%'},
	{name: 'Javascript', slug: 'javascript', icon: JSIcon, hsl: '223 100% 59%'},
	{
		name: 'Accessibility',
		slug: 'accessibility',
		icon: AccessibilityIcon,
		hsl: '277 91% 56%',
	},
]

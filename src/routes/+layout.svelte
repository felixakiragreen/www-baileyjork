<script lang="ts">
	import '@/style/global.css'

	import { css } from 'ui/css'

	import { page } from '$app/state'
	import { theme } from '@/store/theme'

	let { children } = $props()
</script>

<svelte:head>
	<title>Bailey Jörk</title>
</svelte:head>

<div class={$theme} data-theme={$theme}>
	<div
		class={css({
			bg: 'bg',
			minH: 'screen',
			color: 'text',
			display: 'grid',
			gridTemplateRows: 'auto 1fr auto',
			position: 'relative',
		})}
	>
		<main>
			{@render children()}
		</main>
	</div>
</div>

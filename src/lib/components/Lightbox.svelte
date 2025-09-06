<script lang="ts">
	import { css } from 'ui/css'
	import { createEventDispatcher } from 'svelte'

	export let open = false
	export let src = ''
	export let alt = ''

	const dispatch = createEventDispatcher<{ close: void }>()
		const close = () => dispatch('close')
</script>
{#if open}
	<div
		class={css({
			position: 'fixed',
			inset: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 'docked',
		})}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
		tabindex="0"
	>
		<button
			type="button"
			aria-label="Close"
			on:click={close}
			class={css({ position: 'fixed', inset: '0', bg: 'semi', border: 'none', p: '0', appearance: 'none' })}
		></button>

		<img
			src={src}
			alt={alt}
			class={css({ position: 'relative', maxW: '90vw', maxH: '90vh', w: 'auto', h: 'auto', objectFit: 'contain', cursor: 'zoom-out', boxShadow: 'realistic', borderRadius: 'md' })}
		/>
	</div>
{/if}

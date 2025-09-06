<script lang="ts">
	import { css } from 'ui/css'

	export type GalleryItem = {
		image: string
		title?: string
		year?: number | string
		dimensions?: string
		description?: string
	}

	export let items: GalleryItem[] = []

	let openIndex: number | null = null
	const close = () => (openIndex = null)
	const onKey = (e: KeyboardEvent) => {
		if (e.key === 'Escape') close()
	}
</script>

<div
	class={css({
		display: 'grid',
		gap: '6',
		px: '4',
		py: '6',
		gridTemplateColumns: '1fr',
		md: { gridTemplateColumns: 'repeat(2, 1fr)' },
	})}
>
	{#each items as item, i}
		<article class={css({ display: 'grid', gap: '3' })}>
			<button
				type="button"
				aria-label={`View image${item.title ? `: ${item.title}` : ''}`}
				on:click={() => (openIndex = i)}
				class={css({ appearance: 'none', border: 'none', p: '0', bg: 'clear', cursor: 'zoom-in', display: 'block', w: 'full' })}
			>
				<img src={item.image} alt={item.title ?? ''} class={css({ w: 'full', h: 'auto', display: 'block' })} />
			</button>
			<div class={css({ display: 'grid', gap: '1' })}>
				{#if item.title}
					<h3 class={css({ m: '0', fontWeight: '700' })}>{item.title}</h3>
				{/if}
				{#if item.year || item.dimensions}
					<p class={css({ m: '0', color: 'grey.600' })}>
						{#if item.year}{item.year}{/if}
						{#if item.year && item.dimensions} · {/if}
						{#if item.dimensions}{item.dimensions}{/if}
					</p>
				{/if}
				{#if item.description}
					<p class={css({ m: '0' })}>{item.description}</p>
				{/if}
			</div>
		</article>
	{/each}
</div>

<svelte:window on:keydown={onKey} />

{#if openIndex !== null}
	<div
		class={css({
			position: 'fixed',
			inset: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		})}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
		tabindex="0"
		on:keydown={(e) => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') close() }}
	>
		<button
			type="button"
			aria-label="Close"
			on:click={close}
			class={css({ position: 'fixed', inset: '0', bg: 'semi', border: 'none', p: '0', appearance: 'none' })}
		/>
		<img
			src={items[openIndex].image}
			alt={items[openIndex].title ?? ''}
			class={css({ position: 'relative', maxW: '90vw', maxH: '90vh', w: 'auto', h: 'auto', objectFit: 'contain', cursor: 'zoom-out', boxShadow: 'realistic', borderRadius: 'md' })}
		/>
	</div>
{/if}

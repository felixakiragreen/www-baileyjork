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
	{#each items as item}
		<article class={css({ display: 'grid', gap: '3' })}>
			<img src={item.image} alt={item.title ?? ''} class={css({ w: 'full', h: 'auto', display: 'block' })} />
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


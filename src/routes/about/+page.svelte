<script lang="ts">
	import { css } from 'ui/css'
	export let data: { about: { photo: string; blurb: string } }
	const { about } = data
</script>

<section
	class={css({
		display: 'flex',
		flexDir: 'column',
		alignItems: 'center',
		gap: '6',
		px: '4',
		py: '6',
	})}
>
	{#if about.photo}
		<img
			src={about.photo}
			alt="About photo"
			class={css({ display: 'block', w: 'full', maxW: '320px', h: 'auto' })}
		/>
	{/if}
	{#if about.blurb}
		<p class={css({ maxW: '65ch', mx: 'auto' })}>{about.blurb}</p>
	{/if}
</section>

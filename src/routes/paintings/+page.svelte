<script lang="ts">
	import Gallery from '@/lib/components/Gallery.svelte'
	export let data: { items: import('@/lib/components/Gallery.svelte').GalleryItem[] }
	const { items } = data
</script>

<Gallery {items} />


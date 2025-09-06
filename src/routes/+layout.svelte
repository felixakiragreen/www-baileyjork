<script lang="ts">
	import '@/style/global.css'

	import { css } from 'ui/css'

	import { page } from '$app/state'
	import { theme } from '@/store/theme'

	let { children } = $props()

	const baseLink = css({ textDecoration: 'none', fontWeight: '600', fontSize: 'lg', color: 'inherit', _hover: { color: 'red.400' }, px: '2', py: '1', borderRadius: 'sm' })
	const activeLink = css({ bg: 'red.400', color: 'white', _hover: { color: 'red.900' }})

	function getClass(href) {
		const isActive = page.url.pathname === href

		return isActive ? (baseLink + ' ' + activeLink) : baseLink
	}

</script>

<svelte:head>
	<title>Bailey Jörk Straub</title>
</svelte:head>

{#snippet NavLink(href, label)}
	<a href={href} class={getClass(href)}>{label}</a>
{/snippet}

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
		<header
			class={css({
				display: 'flex',
				flexDir: 'column',
				alignItems: 'center',
				gap: '2',
				py: '4',
				textAlign: 'center',
			})}
		>
			<h1
				class={css({
					fontWeight: '700',
					// fontSize: 'clamp(2rem, 8vw, 4rem)',
					fontSize: '4xl',
					// lineHeight: '1.1',
					// letterSpacing: '-0.02em',
					m: '0',
				})}
			>
				Bailey Jörk Straub
			</h1>
			<nav
				class={css({
					display: 'grid',
					gridAutoFlow: 'column',
					gap: '4',
					justifyContent: 'center',
				})}
			>
				{@render NavLink('/about/', 'about')}
				{@render NavLink('/contact/', 'contact')}
				{@render NavLink('/paintings/', 'paintings')}
				{@render NavLink('/tattoos/', 'tattoos')}
			</nav>
		</header>
		<main>
			{@render children()}
		</main>
	</div>
</div>

<script lang="ts">
	import { css } from 'ui/css'

	let name = ''
	let email = ''
	let body = ''
	let submitted = false

	const onSubmit = () => {
		submitted = true
	}
</script>

<section
	class={css({
		px: '4',
		py: '6',
		display: 'flex',
		justifyContent: 'center',
	})}
>
	<form
		on:submit|preventDefault={onSubmit}
		class={css({
			display: 'grid',
			gap: '4',
			w: 'full',
			maxW: '600px',
		})}
	>
		<label class={css({ display: 'grid', gap: '2' })}>
			<span class={css({ fontWeight: '600' })}>Name</span>
			<input
				type="text"
				bind:value={name}
				required
				class={css({
					px: '3',
					py: '2',
					bg: 'white',
					color: 'text',
					borderWidth: '1px',
					borderColor: 'grey.300',
					borderRadius: 'md',
					_outline: { outline: 'none' },
					_focusVisible: { borderColor: 'grey.600' },
				})}
			/>
		</label>

		<label class={css({ display: 'grid', gap: '2' })}>
			<span class={css({ fontWeight: '600' })}>Email</span>
			<input
				type="email"
				bind:value={email}
				required
				class={css({
					px: '3',
					py: '2',
					bg: 'white',
					color: 'text',
					borderWidth: '1px',
					borderColor: 'grey.300',
					borderRadius: 'md',
					_outline: { outline: 'none' },
					_focusVisible: { borderColor: 'grey.600' },
				})}
			/>
		</label>

		<label class={css({ display: 'grid', gap: '2' })}>
			<span class={css({ fontWeight: '600' })}>Message</span>
			<textarea
				rows={6}
				bind:value={body}
				required
				class={css({
					px: '3',
					py: '2',
					bg: 'white',
					color: 'text',
					borderWidth: '1px',
					borderColor: 'grey.300',
					borderRadius: 'md',
					_outline: { outline: 'none' },
					_focusVisible: { borderColor: 'grey.600' },
				})}
			/>
		</label>

		<div class={css({ display: 'flex', justifyContent: 'flex-end' })}>
			<button
				type="submit"
				class={css({
					bg: 'red.400',
					color: 'white',
					fontWeight: '700',
					px: '4',
					py: '2',
					borderRadius: 'md',
					_hover: { bg: 'red.500' },
				})}
			>
				Submit
			</button>
		</div>

		{#if submitted}
			<p class={css({ color: 'grey.600' })}>
				Thanks! Form not wired to a backend yet.
			</p>
		{/if}
	</form>
</section>


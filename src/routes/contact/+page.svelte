<script lang="ts">
	import { css } from 'ui/css'
	import { enhance } from '$app/forms'
	export let form: { ok?: boolean; error?: string; values?: Record<string, string> } | undefined

	let name = form?.values?.name ?? ''
	let email = form?.values?.email ?? ''
	let body = form?.values?.body ?? ''
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
		method="POST"
		use:enhance
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
				name="name"
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
				name="email"
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
				name="body"
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
			></textarea>
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

		{#if form?.ok}
			<p class={css({ color: 'green.600', fontWeight: '600' })}>Thanks! Your message was sent.</p>
		{:else if form?.error}
			<p class={css({ color: 'red.600', fontWeight: '600' })}>{form.error}</p>
		{/if}
	</form>
</section>

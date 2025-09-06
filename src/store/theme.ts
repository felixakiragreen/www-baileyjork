import { atom } from 'nanostores'
import { derived } from 'svelte/store'

export const themeIsDark = atom(true)
export const theme = derived(themeIsDark, (isDark) => {
	return isDark ? 'dark' : 'light'
})

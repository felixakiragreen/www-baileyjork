import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['styled-system'],
		},
		watch: {
			usePolling: true,
		},
	},
	define: {
		__VERSION__: JSON.stringify(pkg.version),
	},
})

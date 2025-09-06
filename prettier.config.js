/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
	semi: false,
	singleQuote: true,
	tabWidth: 3,
	trailingComma: 'all',
	useTabs: true,
}

export default config

import { defineConfig } from '@pandacss/dev'
import theme from './src/style/theme.ts'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	conditions: {
		extend: {
			dark: '.dark &, [data-theme="dark"] &',
			light: '.light &',
			supportsBackdrop:
				'@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))',
		},
	},

	// Useful for theme customization
	theme: {
		extend: {
			...theme,
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	staticCss: {
		css: [
			{
				properties: {
					colorPalette: [
						'red',
						'orange',
						'yellow',
						'green',
						'blue',
						'purple',
						'grey',
					],
					fontSize: [
						'9xl',
						'8xl',
						'7xl',
						'6xl',
						'5xl',
						'4xl',
						'3xl',
						'2xl',
						'xl',
						'lg',
						'md',
						'sm',
						'xs'
					],
					color: ['*'],
					bg: ['*'],
					backgroundColor: ['*'],
					borderColor: ['*'],
				},
			},
		],
	},
})

import type { Theme } from '@pandacss/types'

export const colorPalettes = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'grey',
] as const
export type ColorPalette = (typeof colorPalettes)[number]

const theme: Theme = {
	tokens: {
		colors: {
			felix: { value: 'oklch(91.3% 0.2335 130.017)' },
			black: { value: 'oklch(0% 0 0)' },
			white: { value: 'oklch(100% 0 0)' },
			clear: { value: 'oklch(0% 0 0 / 0%)' },
			semi: { value: 'oklch(0% 0 0 / 50%)' },
			grey: {
				950: { value: '#040404' },
				900: { value: '#0a0a09' },
				850: { value: '#0e0e0c' },
				800: { value: '#141411' },
				750: { value: '#1d1e1a' },
				700: { value: '#2a2b26' },
				650: { value: '#3e3f38' },
				600: { value: '#54554d' },
				550: { value: '#696961' },
				500: { value: '#7f8076' },
				450: { value: '#96978d' },
				400: { value: '#aaaba0' },
				350: { value: '#bfc0b5' },
				300: { value: '#d4d4c9' },
				250: { value: '#e0e0d6' },
				200: { value: '#ebebe2' },
				150: { value: '#f0f0e9' },
				100: { value: '#f5f5ef' },
				50: { value: '#fbfbf7' }
			},
			red: {
				900: { value: '#290607' },
				800: { value: '#470a0d' },
				700: { value: '#710e15' },
				600: { value: '#a11420' },
				500: { value: '#cb1d37' },
				400: { value: '#ed3467' },
				300: { value: '#fc64a1' },
				200: { value: '#ffa3d6' },
				100: { value: '#ffecfa' }
			},
			orange: {
				900: { value: '#2f150d' },
				800: { value: '#50240f' },
				700: { value: '#75330f' },
				600: { value: '#9e490c' },
				500: { value: '#cb6709' },
				400: { value: '#f1901d' },
				300: { value: '#fcb760' },
				200: { value: '#fed7a8' },
				100: { value: '#fff6e9' }
			},
			yellow: {
				900: { value: '#371f05' },
				800: { value: '#5f3906' },
				700: { value: '#8f5c07' },
				600: { value: '#c6930b' },
				500: { value: '#f8cb1b' },
				400: { value: '#f7dd4b' },
				300: { value: '#f5ea7e' },
				200: { value: '#f3f1b0' },
				100: { value: '#f2f2de' }
			},
			green: {
				900: { value: '#052907' },
				800: { value: '#0c4a07' },
				700: { value: '#1e6e08' },
				600: { value: '#3f9608' },
				500: { value: '#6fbf10' },
				400: { value: '#a5e22c' },
				300: { value: '#cfed6d' },
				200: { value: '#e4efab' },
				100: { value: '#e8ead8' }
			},
			blue: {
				900: { value: '#001336' },
				800: { value: '#002662' },
				700: { value: '#013f8c' },
				600: { value: '#0362b2' },
				500: { value: '#0f8fd0' },
				400: { value: '#38bce6' },
				300: { value: '#70dbef' },
				200: { value: '#a9eaf4' },
				100: { value: '#e5f6f8' }
			},
			purple: {
				900: { value: '#120639' },
				800: { value: '#271163' },
				700: { value: '#442294' },
				600: { value: '#643bc0' },
				500: { value: '#8659e1' },
				400: { value: '#9f7af2' },
				300: { value: '#b29af8' },
				200: { value: '#ccbdf9' },
				100: { value: '#f0e6f9' }
			}
		},
		fonts: {
			main: {
				value: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji"',
			},
			mono: {
				value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
			},
		},
		shadows: {
			realistic: {
				value: [
					'0 1px 2px 0 rgba(0, 0, 0, 0.05)',
					'0 1px 4px 0 rgba(0, 0, 0, 0.1)',
				],
			},
		},
	},
	semanticTokens: {
		colors: {
			agrey: {
				95: {
					value: {
						base: '{colors.grey.950}',
						_dark: '{colors.grey.50}',
					},
				},
				90: {
					value: {
						base: '{colors.grey.900}',
						_dark: '{colors.grey.100}',
					},
				},
				85: {
					value: {
						base: '{colors.grey.850}',
						_dark: '{colors.grey.150}',
					},
				},
				80: {
					value: {
						base: '{colors.grey.800}',
						_dark: '{colors.grey.200}',
					},
				},
				75: {
					value: {
						base: '{colors.grey.750}',
						_dark: '{colors.grey.250}',
					},
				},
				70: {
					value: {
						base: '{colors.grey.700}',
						_dark: '{colors.grey.300}',
					},
				},
				65: {
					value: {
						base: '{colors.grey.650}',
						_dark: '{colors.grey.350}',
					},
				},
				60: {
					value: {
						base: '{colors.grey.600}',
						_dark: '{colors.grey.400}',
					},
				},
				55: {
					value: {
						base: '{colors.grey.550}',
						_dark: '{colors.grey.450}',
					},
				},
				50: {
					value: {
						base: '{colors.grey.500}',
						_dark: '{colors.grey.500}',
					},
				},
				45: {
					value: {
						base: '{colors.grey.450}',
						_dark: '{colors.grey.550}',
					},
				},
				40: {
					value: {
						base: '{colors.grey.400}',
						_dark: '{colors.grey.600}',
					},
				},
				35: {
					value: {
						base: '{colors.grey.350}',
						_dark: '{colors.grey.650}',
					},
				},
				30: {
					value: {
						base: '{colors.grey.300}',
						_dark: '{colors.grey.700}',
					},
				},
				25: {
					value: {
						base: '{colors.grey.250}',
						_dark: '{colors.grey.750}',
					},
				},
				20: {
					value: {
						base: '{colors.grey.200}',
						_dark: '{colors.grey.800}',
					},
				},
				15: {
					value: {
						base: '{colors.grey.150}',
						_dark: '{colors.grey.850}',
					},
				},
				10: {
					value: {
						base: '{colors.grey.100}',
						_dark: '{colors.grey.900}',
					},
				},
				5: {
					value: {
						base: '{colors.grey.50}',
						_dark: '{colors.grey.950}',
					},
				},
			},
			text: {
				DEFAULT: {
					value: {
						base: '{colors.grey.900}',
						_dark: '{colors.grey.100}',
					},
				},
			},
			bg: {
				DEFAULT: {
					value: {
						base: '{colors.grey.100}',
						_dark: '{colors.grey.900}',
					},
				},
			},
		},
	},
}

export default theme

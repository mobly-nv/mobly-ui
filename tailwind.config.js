module.exports = {
	prefix: 'u-',
	theme: {
		screens: {
			xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1240px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			black: '#000',
			white: '#FFF',

			brand: {
				eu: '#4E6FB0',
			},

			gray: {
				'100': '#F4F6F7',
				'200': '#E8E8E8',
				'300': '#D4D4D4',
				'400': '#A6A6A6',
				'500': '#515151',
				'600': '#414141',
			},
			blue: {
				'100': '#00BAD1',
				'120': 'rgba(0, 172, 194, 0.2)',
				'180': 'rgba(0, 172, 194, 0.8)',
				'200': '#00ACC2',
				'300': '#018FAC',
				'400': '#084C6E',
			},

			yellow: {
				'100': '#F5C438',
				'200': '#F4B912',
			},
			green: '#53B448',
			red: '#F26F70',
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.gray.200', 'currentColor'),
		}),
		boxShadow: theme => ({
			sm: `0 2px 8px 0 rgba(65, 65, 65, 0.12)`,
			default: `0 2px 16px 0 rgba(65, 65, 65, 0.12)`,
			none: 'none',
		  }),
		fontFamily: ['futura-pt', 'Helvetica', 'Arial', 'sans-serif'],
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '2.5rem',
			'5xl': '3rem',
			'6xl': '3.5rem',
		},
		lineHeight: {
			none: '1',
			heading: '1.1',
			text: '1.3',
		},
		maxWidth: (theme, { breakpoints }) => ({
			none: 'none',
			'widget': '28rem',
			'container': '80rem',
			full: '100%',
			screen: '100vw',
			...breakpoints(theme('screens')),
		}),
		textColor: theme => ({
			...theme('colors'),
			default: theme('colors.gray.600'),
		}),
		zIndex: {
			auto: 'auto',
			'0': '0',
			'1': '1',
			'2': '2',
			'3': '3',
			'4': '4',
			'5': '5',
		},
	},
	variants: {},
	corePlugins: {
		container: false,
	},
	plugins: [],
};

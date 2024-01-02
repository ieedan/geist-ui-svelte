/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			serif: ['JetBrains Mono', 'Monospace'],
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				gray: {
					100: '#f2f2f2',
					200: '#d9d9d9',
					300: '#bfbfbf',
					400: '#a6a6a6',
					500: '#8c8c8c',
					600: '#737373',
					700: '#595959',
					800: '#404040',
					900: '#262626',
					925: '#1d1d1d',
					950: '#141414',
					999: '#0d0d0d'
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};

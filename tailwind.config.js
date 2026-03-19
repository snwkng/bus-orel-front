/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{vue,js,ts,jsx,tsx}", // Охватывает все подпапки в src
		"./app.vue"
	],
	theme: {
		extend: {
			gridTemplateAreas: {
				'gallery-desktop': '"a a b c" "a a d e"',
			},
			height: {
				header: '50px',
				'main-screen': '500px'
			},
			backgroundImage: {
				sprinter: "url('/images/mercedessprinter.webp')"
			},
			rotate: {
				270: '270deg'
			},
			boxShadow: {
				form: '0 2px 6px 0 rgba(0, 0, 0, .15);'
			},
			animation: {
				glow: 'glow 1s infinite' // Links 'glow' animation to 'glow' keyframes
			},
			keyframes: {
				glow: {
					'0%, 100%': { boxShadow: '0 0 10px #FF5722' },
					'50%': { boxShadow: '0 0 20px #FF5722' }
				}
			},
			colors: {
				'primary': {
					50: '#FFAB91',
					100: '#FF9A7A',
					200: '#FF8964',
					300: '#FF794E',
					400: '#FF6838',
					500: '#FF5722', // Основной оранжевый
					600: '#E64E1F',
					700: '#CC461B',
					800: '#B33D18',
					900: '#993414',
				},

				'secondary': {
					50: '#80B6F8',
					100: '#66A7F6',
					200: '#4D99F5',
					300: '#338AF3',
					400: '#1A7CF2',
					500: '#006DF0', // Основной синий
					600: '#0062D8',
					700: '#0057C0',
					800: '#004CA8',
					900: '#004190',
				},

				'neutral': {
					50: '#FAFAFA',
					100: '#F5F5F5',
					200: '#EEEEEE',
					300: '#E0E0E0',
					400: '#BDBDBD',
					500: '#9E9E9E',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#212121',
				},

				'accent': {
					'success': '#4CAF50',
					'warning': '#FFC107',
					'error': '#F44336',
					'info': '#2196F3',
				},
			},
		}
	},
	safelist: [
		{
      pattern: /^grid-in-/,
    },
	],
	plugins: [
		(function ({ addUtilities, theme }) {
			const areas = theme('gridTemplateAreas');
			const utils = {};

			Object.entries(areas).forEach(([key, value]) => {
				// 1. Генерируем класс сетки: .grid-areas-airbnb
				const gridString = Array.isArray(value)
					? value.map((row) => `"${row}"`).join(' ')
					: value;
				utils[`.grid-areas-${key}`] = { 'grid-template-areas': gridString };

				// 2. Генерируем классы элементов: .grid-in-main, .grid-in-a и т.д.
				const rawValues = Array.isArray(value) ? value.join(' ') : value;
				const uniqueAreas = [...new Set(rawValues.split(/\s+/).map(a => a.replaceAll('"', '')))];

				uniqueAreas.forEach((area) => {
					utils[`.grid-in-${area}`] = { 'grid-area': area };
				});
			});

			addUtilities(utils);
		}),
	],
};

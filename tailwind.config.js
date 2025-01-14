/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{vue,js,ts}',
		'./entities/**/*.{vue,js,ts}',
		'./features/**/*.{vue,js,ts}',
		'./pages/**/*.{vue,js,ts}',
		'./public/**/*.{vue,js,ts}',
		'./shared/**/*.{vue,js,ts}',
		'./widgets/**/*.{vue,js,ts}',
		'./app.config.{js,ts}'
	],
	theme: {
		extend: {
			colors: {
				'deep-orange': '#FF5722',
				'deep-pink': '#FF2061',
				'deep-brown': '#55433C',
				'ligth-brown': '#BDA69F',
				'ligth-blue': '#009EFF',
				'deep-blue': '#006DF0'
			},
			height: {
				header: '50px',
				'main-screen': '500px'
			},
			backgroundImage: {
				sprinter: "url('~/app/assets/images/others/mercedessprinter.webp')"
			},
			rotate: {
				270: '270deg'
			},
			boxShadow: {
				form: '0 2px 6px 0 rgba(0, 0, 0, .15);'
			}
		}
	},
	plugins: []
};

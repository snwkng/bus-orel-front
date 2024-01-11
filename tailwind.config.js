/** @type {import('tailwindcss').Config} */
module.exports = {
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
				'lite-brown': '#BDA69F',
				'lite-blue': '#009EFF',
				'deep-blue': '#006DF0'
			},
			height: {
				header: '50px',
				'main-screen': '500px'
			},
			rotate: {
				270: '270deg'
			}
		}
	},
	plugins: []
}

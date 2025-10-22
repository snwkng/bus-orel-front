/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{vue,js,ts}',
		'./entities/**/*.{vue,js,ts}',
		'./features/**/*.{vue,js,ts}',
		'./pages/**/*.{vue,js,ts}',
		'./public/**/*.{vue,js,ts}',
		'./src/shared/**/*.{vue,js,ts}',
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
			},
			animation: {
				glow: 'glow 1.5s infinite', // Links 'glow' animation to 'glow' keyframes
			},
			keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #FF5722' },
          '50%': { boxShadow: '0 0 20px #FF5722' },
        },
      },
		}
	},
	plugins: []
};

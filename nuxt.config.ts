// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	dir: {
		layouts: 'app/layouts'
	},
	devtools: { enabled: true },
	modules: [
		// Simple usage
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt'
	],
	eslint: {
		/* module options */
	},
	tailwindcss: {
		cssPath: '~/app/assets/styles/tailwind.css',
		configPath: 'tailwind.config',
		exposeConfig: false,
		exposeLevel: 2,
		config: {},
		injectPosition: 'first',
		viewer: true
	}
})

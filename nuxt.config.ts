import { resolve } from 'node:path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		resolve: {
			alias: [{ find: '@', replacement: resolve(__dirname, './') }]
		}
	},
	dir: {
		layouts: 'app/layouts'
	},
	devtools: { enabled: true },
	modules: [
		// Simple usage
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'nuxt-svgo'
	],
	plugins: [
		'~/shared/lib/plugins/clickAway'
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
	},
	svgo: {
		autoImportPath: '~/app/assets/images/icons/',
		componentPrefix: 'i'
	}
})

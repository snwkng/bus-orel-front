import { resolve } from 'node:path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: 'node-server'
	},
	routeRules: {
		'/api/**': { proxy: import.meta.env.BASE_URL }
	},
	vite: {
		resolve: {
			alias: [{ find: '@', replacement: resolve(__dirname, './') }]
		}
	},
	dir: {
		layouts: 'app/layouts'
	},
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			BASE_URL: process.env.BASE_URL ?? '/'
		}
	},
	modules: [
		// Simple usage
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'nuxt-svgo',
		'nuxt-swiper',
		'dayjs-nuxt'
	],
	plugins: ['~/shared/lib/plugins/clickAway'],
	pinia: {
		storesDirs: [
			'./entities/**/model/**',
			'./features/**/model/**',
			'./widgets/**/model/**'
		]
	},
	eslint: {
		/* module options */
		lintOnStart: false
	},
	tailwindcss: {
		cssPath: ["~/app/assets/styles/tailwind.css", { injectPosition: "first" }],
		configPath: 'tailwind.config',
		exposeConfig: {
      level: 2
    },
		config: {},
		viewer: true
	},
	svgo: {
		autoImportPath: '~/app/assets/images/icons/',
		componentPrefix: 'i'
	}
})

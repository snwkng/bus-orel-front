import { resolve } from 'node:path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Туристическое агентство "ГалаТур" Орёл',
			htmlAttrs: { lang: 'ru' },
			script: [
				{
					type: 'text/javascript',
					src: 'metrika.js',
					async: true,
					defer: true
				}
			]
		}
	},

	nitro: {
		preset: 'node-server',
		devProxy: {
			'/api/*': {
				target: import.meta.env.BASE_URL,
				changeOrigin: true
			}
		}
	},

	routeRules: {
		'/api/**': { proxy: import.meta.env.BASE_URL }
	},

	vite: {
		resolve: {
			alias: [{ find: '@', replacement: resolve(__dirname, './') }]
		}
	},

	components: [
		{
			path: '~/entities',
			prefix: 'Entities'
		},
		{
			path: '~/features',
			prefix: 'Features'
		},
		{
			path: '~/widgets',
			prefix: 'Widgets'
		},
		{
			path: '~/shared',
			prefix: 'Shared'
		}
	],
	imports: {
		dirs: [
			'shared/**/*.ts',
			'features/**/*.ts',
			'widgets/**/*.ts',
			'entities/**/*.ts'
		]
	},
	dir: {
		layouts: 'app/layouts',
		assets: 'app/assets',
		plugins: 'shared/lib/plugins'
	},

	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			BASE_URL: process.env.BASE_URL ?? '/'
		}
	},

	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'nuxt-svgo',
		'nuxt-swiper',
		'dayjs-nuxt',
		'nuxt-gtag'
	],

	gtag: {
		enabled: process.env.NODE_ENV === 'production',
		id: 'G-F0HWMP4P6V'
	},

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
		cssPath: ['~/app/assets/styles/tailwind.css', { injectPosition: 'first' }],
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
	},

	compatibilityDate: '2024-09-25'
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Туристическое агентство ГалаТур - Орёл',
			htmlAttrs: { lang: 'ru' },
			meta: [
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
				{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
			],
			script: [
				{
					type: 'text/javascript',
					src: import.meta.env.NODE_ENV === 'production' ? '/metrika.js' : '',
					async: true,
					defer: true
				}
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico',
					sizes: '32x32'
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon_16.svg',
					sizes: '16x16'
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon_32.svg',
					sizes: '32x32'
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon_120.svg',
					sizes: '120x120'
				}
			]
		}
	},

	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},
	colorMode: {
		classSuffix: '',
		preference: 'light',
		fallback: 'light'
	},
	nitro: {
		preset: 'node-server'
	},

	routeRules: {
		'/api/**': { proxy: `${import.meta.env.BASE_URL}/api/**` }
	},

	srcDir: 'src/',

	dir: {
		// app: 'src/app',
		layouts: 'app/layouts',
		// pages: 'src/pages',
		assets: 'shared/assets',
		plugins: 'shared/lib/plugins',
		middleware: 'shared/config/middleware',
	},
	components: [
		{ path: 'shared/ui', prefix: 'Shared' },
		{ path: 'widgets', prefix: 'Widgets' },
		{ path: 'entities', prefix: 'Entities' },
		{ path: 'features', prefix: 'Features' },
	],

	imports: {
		dirs: [
			'shared/lib',
			'shared/lib/slider',
			'entities/*/lib',
			'features/*/lib',
			'widgets/*/lib'
		]
	},

	typescript: {
		tsConfig: {
			include: [
				'./shared/**/*',
				'./entities/**/*',
				'./features/**/*'
			]
		}
	},

	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			BASE_URL: import.meta.env.BASE_URL ?? '/'
		}
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'nuxt-svgo',
		'dayjs-nuxt',
		'@nuxtjs/color-mode',
		'@nuxt/eslint',
		'@nuxt/image',
		'nuxt-viewport',
		'@nuxt/icon',
		'@vueuse/nuxt'
	],

	pinia: {
		storesDirs: [
			'entities/**/model/**',
			'features/**/model/**',
			'widgets/**/model/**'
		]
	},

	viewport: {
		breakpoints: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			'2xl': 1536
		},

		defaultBreakpoints: {
			desktop: 'lg',
			mobile: 'xs',
			tablet: 'md'
		},

		fallbackBreakpoint: 'lg'
	},

	css: ['~/app/assets/styles/tailwind.css'],

	tailwindcss: {
		// cssPath: ['app/assets/styles/tailwind.css', { injectPosition: 'first' }],
		configPath: 'tailwind.config',
		exposeConfig: {
			level: 2
		},
		config: {},
		viewer: true
	},

	svgo: {
		autoImportPath: 'app/assets/images/icons/',
		componentPrefix: 'i'
	},

	icon: {
		serverBundle: 'local',
		clientBundle: {
			scan: true
		}
	},

	image: {
		format: ['avif', 'webp'],
		domains: [import.meta.env.BASE_URL],
		alias: {
			image: `${import.meta.env.BASE_URL}/api/s3/download`
		},
		screens: {
			sm: 640,
			ma: 768,
			lg: 1024,
			xl: 1280
		}
	},

	compatibilityDate: '2024-09-25'
});
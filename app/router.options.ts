import type { RouterConfig } from '@nuxt/schema';
import type { RouteLocationNormalized } from 'vue-router';

export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes: any) => [
		{
			name: 'home',
			path: '/',
			component: () => import('~/pages/home/').then((r) => r.default || r)
		},
		{
			name: 'bus-tours',
			path: '/bus-tours',
			component: () => import('~/pages/bus-tours/').then((r) => r.default || r),
			props: true
		},
		{
			name: 'bus-tours/bus-tour',
			path: '/bus-tours/:id',
			meta: {
				layout: 'single'
			},
			component: () => import('~/pages/bus-tour/').then((r) => r.default || r),
			props: true
		},
		{
			name: 'excursions',
			path: '/excursions',
			component: () =>
				import('~/pages/excursions/').then((r) => r.default || r),
			props: true
		},
		{
			name: 'excursions/excursion',
			path: '/excursions/:id',
			meta: {
				layout: 'single'
			},
			component: () => import('~/pages/excursion/').then((r) => r.default || r),
			props: true
		},
		{
			name: 'about',
			path: '/about',
			meta: {
				layout: 'single'
			},
			component: () => import('~/pages/about-us/').then((r) => r.default || r)
		},
		{
			name: 'tourist-reminder',
			path: '/tourist-reminder',
			meta: {
				layout: 'single'
			},
			component: () =>
				import('~/pages/tourist-reminder/').then((r) => r.default || r)
		},
		{
			name: 'agreement',
			path: '/agreement',
			meta: {
				layout: 'single'
			},
			component: () => import('~/pages/agreement/').then((r) => r.default || r)
		},
		{
			name: 'privacy-policy',
			path: '/privacy-policy',
			meta: {
				layout: 'single'
			},
			component: () =>
				import('~/pages/privacy-policy/').then((r) => r.default || r)
		}
	],
	scrollBehavior(
		to: RouteLocationNormalized,
		_from: RouteLocationNormalized,
		savedPosition: any
	) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			};
		}
		return {
			top: 0
		};
	}
};

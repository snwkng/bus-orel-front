import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router';

export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes: any) => [
		{
			name: 'home',
			path: '/',
			component: () => import('~/pages/home/ui/MainPage.vue').then(r => r.default || r)
		},
		{
			name: 'bus-tours',
			path: '/bus-tours',
			component: () => import('~/pages/bus-tours/ui/BusTours.vue').then(r => r.default || r),
			props: true
		},
		{
			name: 'bus-tours/bus-tour',
			path: '/bus-tours/:id',
			component: () => import('~/pages/bus-tour/ui/BusTour.vue').then(r => r.default || r),
			props: true
		},
		{
			name: 'excursions',
			path: '/excursions',
			component: () => import('~/pages/excursions/ui/TheExcursions.vue').then(r => r.default || r),
			props: true
		},
		{
			name: 'excursions/excursion',
			path: '/excursions/:id',
			component: () => import('~/pages/excursion/ui/TheExcursion.vue').then(r => r.default || r),
			props: true
		}
	],
	scrollBehavior (to: RouteLocationNormalized, _from: RouteLocationNormalized, savedPosition: any) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			}
		}
		return {
			top: 0
		};
	}
}

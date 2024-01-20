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
			component: () => import('~/pages/bus-tours/ui/BusTours.vue').then(r => r.default || r)
		},
		{
			name: 'excursions',
			path: '/excursions',
			component: () => import('~/pages/excursions/ui/TheExcursions.vue').then(r => r.default || r)
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

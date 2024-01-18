import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router';

export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: _routes => [
		{
			name: 'home',
			path: '/',
			component: () => import('~/pages/home/ui/MainPage.vue').then(r => r.default || r)
		}
	],
	scrollBehavior (to: RouteLocationNormalized, _from, savedPosition) {
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

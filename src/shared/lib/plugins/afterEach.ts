import type { RouteLocationNormalized } from 'vue-router';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.config.globalProperties.$router.afterEach((to) => {
		if (to?.hash) {
			const el = document.querySelector(to.hash);
			if (el) {
				glow(to);
			} else {
				setTimeout(() => {
					const el = document.querySelector(to.hash);
					if (el) {
						glow(to);
					}
				}, 500);
			}
		}
	});
});

function glow(to: RouteLocationNormalized) {
	const item = document.getElementById(`${to.hash.slice(1)}-focus`);
	if (item) {
		item?.classList.add('animate-glow');
		item?.classList.add('rounded-xl');
		setTimeout(() => {
			item?.classList.remove('animate-glow');
			item?.classList.remove('rounded-xl');
		}, 1500);
	}
}

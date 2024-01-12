/* eslint-disable import/no-extraneous-dependencies */
import VueClickAway from 'vue3-click-away';

export default defineNuxtPlugin({
	name: 'clickAway',
	enforce: 'pre', // or 'post'
	hooks: {
		// You can directly register Nuxt app runtime hooks here
		'app:created' () {
			const nuxtApp = useNuxtApp();
			nuxtApp.vueApp.use(VueClickAway);
			// do something in the hook
		}
	},
	env: {
		islands: true
	}
})

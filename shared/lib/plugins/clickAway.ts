import { directive } from 'vue3-click-away';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('click-away', directive)
})

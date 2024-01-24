export const useExcursionsStore = defineStore('useExcursionsStore', {
	state: () => ({
		excursions: null
	}),
	actions: {
		async getExcursions (): Promise<void> {
			const { BASE_URL } = useRuntimeConfig().public;
			this.excursions = await $fetch(`${BASE_URL}/excursions`);
		}
	}
})

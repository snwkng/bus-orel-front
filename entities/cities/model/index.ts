const { BASE_URL } = useRuntimeConfig().public;
export const useCityStore = defineStore('useCityStore', {
	state: () => ({
		cities: [] as SelectItem[]
	}),
	actions: {
		async getCities(): Promise<void> {
			try {
				this.cities = await $fetch(`${BASE_URL}/api/cities`);
			} catch (err: any) {
				console.error(err);
				throw err;
			}
		}
	}
});

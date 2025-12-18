export const useExcursionStore = defineStore('useExcursionStore', {
	state: () => ({
		cityList: [] as SelectItem[]
	}),
	actions: {
		async getCityList(): Promise<void> {
			const cities: SelectItem[] = await $fetch(
				'/api/excursions/cities-list',
				{}
			);
			this.cityList = cities.toSorted((a: SelectItem, b: SelectItem) =>
				(a.name ?? '').localeCompare(b.name ?? '')
			);
		}
	}
});

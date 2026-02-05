export const useTourStore = defineStore('useTourStore', {
	state: () => ({
		seaList: [] as SelectItem[],
		cityList: [] as SelectItem[]
	}),
	actions: {
		async getSeaList(): Promise<void> {
			const sea: ApiResponse<SelectItem[]> = await $fetch('/api/hotels/sea-list');
			this.seaList = sea.data?.filter((s: SelectItem) => s.name) || [];
		},

		async getCityList(seaType?: string): Promise<void> {
			const city: ApiResponse<SelectItem[]> = await $fetch('/api/hotels/cities-list', {
				params: {
					seaType
				}
			});
			this.cityList = city.data?.filter((c: SelectItem) => c.name) || [];
		}
	}
});

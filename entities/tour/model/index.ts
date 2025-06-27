export const useTourStore = defineStore('useTourStore', {
	state: () => ({
		seaList: [] as SelectItem[],
		cityList: [] as SelectItem[]
	}),
	actions: {
		async getSeaList (): Promise<void> {
			const sea: SelectItem[] = await $fetch('/api/bus-tours/sea-list')
			this.seaList = sea.filter((s: SelectItem) => s.name)
		},

		async getCityList (seaType?: string): Promise<void> {
			const city: SelectItem[] = await $fetch('/api/bus-tours/cities-list', {
				params: {
					seaType
				}
			})
			this.cityList = city.filter((c: SelectItem) => c.name)
		}
	}
})

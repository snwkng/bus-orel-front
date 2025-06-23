import type { ICard } from '@/entities/card/model/types'
import type { ITour } from './types'

export const useTourStore = defineStore('useTourStore', {
	state: () => ({
		tours: [],
		tour: {} as ITour,
		seaList: [] as SelectItem[],
		cityList: [] as SelectItem[]
	}),
	getters: {
		cardMapped (state): ICard[] {
			return state.tours?.map((tour: ITour) => ({
				id: tour._id,
				title: tour.name,
				subtitle: tour?.city?.name ?? '',
				price: tour.price,
				image: tour?.images?.[0]
			}))
		}
	},
	actions: {
		async getTours (params?: any): Promise<void> {
			this.tours = await $fetch('/api/bus-tours', {
				params
			})
		},

		async getTour (id: string): Promise<void> {
			this.tour = await $fetch(`/api/bus-tours/${id}`)
		},

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

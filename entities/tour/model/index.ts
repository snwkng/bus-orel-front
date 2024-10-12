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
				// eslint-disable-next-line no-underscore-dangle
				id: tour._id,
				title: tour.name,
				subtitle: tour.city,
				price: tour.price,
				images: tour.images
			}))
		}
	},
	actions: {
		async getTours (params?: any): Promise<void> {
			this.tours = await $fetch('/api/hotels', {
				params
			})
		},

		async getTour (id: string): Promise<void> {
			this.tour = await $fetch(`/api/hotels/${id}`)
		},

		async getSeaList (): Promise<void> {
			const sea: SelectItem[] = await $fetch('/api/hotels/sea-list')
			this.seaList = sea.filter((s: SelectItem) => s.name)
		},

		async getCityList (seaType?: string): Promise<void> {
			const city: SelectItem[] = await $fetch('/api/hotels/city-list', {
				params: {
					seaType
				}
			})
			this.cityList = city.filter((c: SelectItem) => c.name)
		}
	}
})

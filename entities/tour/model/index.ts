import type { ICard } from '@/entities/card/model/types';
import type { ITour } from './types';

export const useTourStore = defineStore('useTourStore', {
	state: () => ({
		tours: [],
		tour: {} as ITour
	}),
	getters: {
		cardMapped (state): ICard[] {
			return state.tours.map((tour: ITour) => ({
				// eslint-disable-next-line no-underscore-dangle
				id: tour._id,
				title: tour.name,
				subtitle: tour.city,
				price: tour.fare,
				images: tour.images
			}))
		}
	},
	actions: {
		async getTours (): Promise<void> {
			const { BASE_URL } = useRuntimeConfig().public;
			this.tours = await $fetch(`${BASE_URL}/hotels`);
		},

		async getTour (id: string): Promise<void> {
			const { BASE_URL } = useRuntimeConfig().public;
			this.tour = await $fetch(`${BASE_URL}/hotels/${id}`)
		}
	}
})

import type { ICard } from '@/entities/card/model/types';
import type { ITour } from './types';

export const useToursStore = defineStore('useToursStore', {
	state: () => ({
		tours: []
	}),
	getters: {
		cardMapped (state): ICard[] {
			return state.tours.map((tour: ITour) => ({
				id: tour.id,
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
		}
	}
})

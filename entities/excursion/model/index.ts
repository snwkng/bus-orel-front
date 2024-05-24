import type { ICard } from '@/entities/card/model/types';
import type { IExcursion } from './types';

export const useExcursionStore = defineStore('useExcursionStore', {
	state: () => ({
		excursions: [],
		excursion: {} as IExcursion
	}),
	getters: {
		cardMapped (state): ICard[] {
			return state.excursions.map((ex: IExcursion) => ({
				// eslint-disable-next-line no-underscore-dangle
				id: ex._id,
				title: ex.name,
				subtitle: ex.city,
				price: ex.price,
				images: ex.images
			}))
		}
	},
	actions: {
		async getExcursions (): Promise<void> {
			const { BASE_URL } = useRuntimeConfig().public;
			this.excursions = await $fetch(`${BASE_URL}/excursions`);
		},

		async getExcursion (id: string): Promise<void> {
			const { BASE_URL } = useRuntimeConfig().public;
			this.excursions = await $fetch(`${BASE_URL}/excursions/${id}`)
		}
	}
})

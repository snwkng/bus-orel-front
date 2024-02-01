import type { ICard } from '@/entities/card/model/types';
import type { IExcursion } from './types';

export const useExcursionsStore = defineStore('useExcursionsStore', {
	state: () => ({
		excursions: []
	}),
	getters: {
		cardMapped (state): ICard[] {
			return state.excursions.map((excursion: IExcursion) => ({
				// eslint-disable-next-line no-underscore-dangle
				id: excursion._id,
				title: excursion.name,
				subtitle: excursion.city,
				price: excursion.price,
				images: excursion.images
			}))
		}
	},
	actions: {
		async getExcursions (): Promise<void> {
			const { BASE_URL } = useRuntimeConfig().public;
			this.excursions = await $fetch(`${BASE_URL}/excursions`);
		}
	}
})

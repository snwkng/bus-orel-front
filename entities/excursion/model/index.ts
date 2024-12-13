import type { ICard } from '@/entities/card/model/types';
import type { IExcursion } from './types';

const { BASE_URL } = useRuntimeConfig().public
export const useExcursionStore = defineStore('useExcursionStore', {
	state: () => ({
		excursions: [],
		excursion: {} as IExcursion,
		cityList: [] as SelectItem[]
	}),
	getters: {
		cardMapped (state): ICard[] {
			return state.excursions.map((ex: IExcursion) => ({
				// eslint-disable-next-line no-underscore-dangle
				id: ex._id,
				title: ex.name,
				subtitle: ex.city,
				price: ex.price,
				image: ex.images?.[0] || ''
			}));
		}
	},
	actions: {
		async getExcursions (params?: any): Promise<void> {
			this.excursions = await $fetch(`${BASE_URL}/api/excursions`, {
				params
			});
		},

		async getExcursion (id: string): Promise<void> {
			this.excursion = await $fetch(`${BASE_URL}/api/excursions/${id}`);
		},

		async getCityList (): Promise<void> {
			this.cityList = await $fetch(`${BASE_URL}/api/excursions/city-list`);
		}
	}
});

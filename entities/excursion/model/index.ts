import type { IExcursionCard } from '@/entities/card/model/types';
import type { IExcursion } from './types';

export const useExcursionStore = defineStore('useExcursionStore', {
	state: () => ({
		excursions: [],
		excursion: {} as IExcursion,
		cityList: [] as SelectItem[]
	}),
	getters: {
		cardMapped (state): IExcursionCard[] {
			return state.excursions.map((ex: IExcursion) => ({
				id: ex._id,
				title: ex.name,
				subtitle: ex.cities?.map((x: string) => x).join(', '),
				price: ex.price,
				image: ex.images?.[0] || '',
				date: ex?.excursionStart || null
			}));
		}
	},
	actions: {
		async getExcursions (params?: any): Promise<void> {
			this.excursions = await $fetch('/api/excursions', {
				params
			});
		},

		async getExcursion (id: string): Promise<void> {
			this.excursion = await $fetch(`/api/excursions/${id}`);
		},

		async getCityList (): Promise<void> {
			const cities: SelectItem[] = await $fetch('/api/excursions/cities-list', {
			});
			this.cityList =
				cities.toSorted((a: SelectItem, b: SelectItem) => (a.name ?? '').localeCompare(b.name ?? ''));
		}
	}
});

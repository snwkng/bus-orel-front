import type { IExcursionDto } from './excursion.dto';
import type { ICitiesDto } from './cities.dto';
import {
	excursionConverterCardList,
	excursionConverterCitiesList,
	excursionConverterOneListItem
} from '../lib/converter';
import type { LocationQuery } from 'vue-router';
import { unwrapApiList } from '@/shared/lib/converter';

export const getExcursionsCardList = (params: Ref<LocationQuery>) => {
	return useFetch('/api/excursions', {
		query: computed(() => params.value),
		lazy: import.meta.client,
		transform: (res: ApiResponse<IExcursionDto[] | { items?: IExcursionDto[] }>) =>
			excursionConverterCardList(unwrapApiList(res.data))
	});
};

export const getExcursion = (id: Ref<string>) => {
	return useFetch(`/api/excursions/${id.value}`, {
		key: `excursion-${id.value}`,
		lazy: import.meta.client,
		transform: (res: ApiResponse<IExcursionDto>) =>
			excursionConverterOneListItem(res.data)
	});
};

export const getExcursionsCitiesList = () => {
	return useFetch('/api/excursions/cities-list', {
		lazy: import.meta.client,
		transform: (res: ApiResponse<ICitiesDto[]>) =>
			excursionConverterCitiesList(res.data)
	});
};

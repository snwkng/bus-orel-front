import type { IExcursionDto } from './excursion.dto';
import type { ICitiesDto } from './cities.dto';
import { excursionConverterCardList, excursionConverterCitiesList } from '../lib/converter';
import type { LocationQuery } from 'vue-router';

export const getExcursionsCardList = (params: Ref<LocationQuery>) => {
  return useFetch('/api/excursions', {
    query: computed(() => params.value),
    lazy: import.meta.client,
    transform: (res: ApiResponse<IExcursionDto[]>) => excursionConverterCardList(res.data)
  });
};

export const getExcursionsCitiesList = () => {
  return useFetch('/api/excursions/cities-list', {
    lazy: import.meta.client,
    transform: (res: ApiResponse<ICitiesDto[]>) => excursionConverterCitiesList(res.data)
  });
};
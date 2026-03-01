import type { IExcursionDto } from './excursion.dto';
import type { ICitiesDto } from './cities.dto';
import { converterExcursionList, converterCitiesList } from '../lib/converter';

export const getExcursionsList = () => {
  return useFetch('/api/excursions', {
    lazy: import.meta.client,
    transform: (res: ApiResponse<IExcursionDto[]>) => converterExcursionList(res.data)
  });
};

export const getExcursionsCitiesList = () => {
  return useFetch('/api/excursions/cities-list', {
    lazy: import.meta.client,
    transform: (res: ApiResponse<ICitiesDto[]>) => converterCitiesList(res.data)
  });
};
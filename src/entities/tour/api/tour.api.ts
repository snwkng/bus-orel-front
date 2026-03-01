import type { ITourDto } from './tour.dto';
import type { ICitiesDto } from './cities.dto';
import { converterToursList, converterCitiesList } from '../lib/converter';

export const getToursList = () => {
  return useFetch('/api/hotels', {
    lazy: import.meta.client,
    transform: (res: ApiResponse<ITourDto[]>) => converterToursList(res.data)
  });
};

export const getToursCitiesList = (seaType: Ref<SelectItem>) => {
  // TODO: разобраться почему не работает автоматический request cancelled
  return useFetch('/api/hotels/cities-list', {
    query: {
      seaType: computed(() => seaType?.value?.name)
    },
    watch: [seaType],
    dedupe: 'cancel',
    lazy: import.meta.client,
    transform: (res: ApiResponse<ICitiesDto[]>) => converterCitiesList(res.data)
  });
};

export const getToursSeaList = () => {
  return useFetch('/api/hotels/sea-list', {
    lazy: import.meta.client,
    transform: (res: ApiResponse<ICitiesDto[]>) => converterSeaList(res.data)
  });
};
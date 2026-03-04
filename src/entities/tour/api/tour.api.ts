import type { ITourDto } from './tour.dto';
import type { ICitiesDto } from './cities.dto';
import { tourConverterCardList, tourConverterCitiesList, tourConverterSeaList } from '../lib/converter';
import type { LocationQuery } from 'vue-router';

export const getToursCardList = (params: Ref<LocationQuery>) => {
  return useFetch('/api/hotels', {
    query: computed(() => params.value),
    lazy: import.meta.client,
    transform: (res: ApiResponse<ITourDto[]>) => tourConverterCardList(res.data)
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
    transform: (res: ApiResponse<ICitiesDto[]>) => tourConverterCitiesList(res.data)
  });
};

export const getToursSeaList = () => {
  return useFetch('/api/hotels/sea-list', {
    lazy: import.meta.client,
    transform: (res: ApiResponse<ICitiesDto[]>) => tourConverterSeaList(res.data)
  });
};
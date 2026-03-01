import { converterArray, toArray, type Converter } from '@/shared/lib/converter';
import type { IExcursionDto } from '../api/excursion.dto';
import type { ICitiesDto } from '../api/cities.dto';
import type { IExcursionModel } from '../model/excursion.model';

const converterOneListItem: Converter<IExcursionDto, IExcursionModel> = (dto) => ({
  id: dto._id,
  name: dto.name,
  description: dto.description,
  images: dto.images,
  duration: dto.duration,
  price: dto.price,
  fileName: toArray(dto.documentName),
  excursionStartDates: dto.excursionStartDates,
  cities: dto.cities,
  hotelName: dto?.hotelName ?? null,
  thePriceIncludes: dto.thePriceIncludes,
  additionallyPaid: dto.additionallyPaid,
});

const converterCitiesListItem: Converter<ICitiesDto, SelectItem> = (dto) => ({
  id: dto.id,
  name: dto.name
})

export const converterExcursionList = converterArray(converterOneListItem);

export const converterCitiesList = converterArray(converterCitiesListItem)


import { converterArray, toArray, type Converter } from '@/shared/lib/converter';
import type { IExcursionDto } from '../api/excursion.dto';
import type { ICitiesDto } from '../api/cities.dto';
import type { IExcursionModel } from '../model/excursion.model';
import type { IExcursionCardModel } from '../model/excursionCard.model';


const converterOneListItem: Converter<IExcursionDto, IExcursionModel> = (dto) => ({
  id: dto._id,
  name: dto.name,
  description: toArray(dto.description),
  images: toArray(dto.images),
  duration: dto.duration,
  price: dto.price,
  fileName: toArray(dto.documentName),
  excursionStartDates: toArray(dto.excursionStartDates),
  cities: toArray(dto.cities),
  hotelName: dto?.hotelName ?? null,
  thePriceIncludes: toArray(dto.thePriceIncludes),
  additionallyPaid: toArray(dto.additionallyPaid),
});

const converterCardItem: Converter<IExcursionDto, IExcursionCardModel> = (dto) => ({
  id: dto._id,
  title: dto.name,
  subtitle: dto.cities?.map((x: string) => x).join(', '),
  price: dto.price,
  image: dto.images?.[0] ?? '',
  date:
    dto?.excursionStartDates?.find((date) => new Date(date) >= new Date()) ?? ''
})

const converterCitiesListItem: Converter<ICitiesDto, SelectItem> = (dto) => ({
  id: dto.id,
  name: dto.name
});

export const converterExcursionCardList = converterArray(converterCardItem)

export const converterExcursionList = converterArray(converterOneListItem);

export const converterCitiesList = converterArray(converterCitiesListItem)


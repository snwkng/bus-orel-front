import { converterArray, toArray, type Converter } from '@/shared/lib/converter';
import type { ITourDto } from '../api/tour.dto';
import type { ICitiesDto } from '../api/cities.dto';
import type { ITourModel } from '../model/tour.model';
import type { ISeaDto } from '../api/sea.dto';
import type { IAddressDto } from '../api/address.dto';
import type { IAddressModel } from '../model/address.model';
import type { IAdditionalInfoDto } from '../api/additionalInfo.dto';
import type { IAdditionalInfoModel } from '../model/additionalInfo.model';
import type { IBeachModel } from '../model/beach.model';
import type { IBeachDto } from '../api/beach.dto';
import type { IFoodDto } from '../api/food.dto';
import type { IFoodModel } from '../model/food.model';
import type { ICheckInOutDto } from '../api/checkInOut.dto';
import type { ICheckInOutModel } from '../model/checkInOut.model';
import type { IIncludedInThePriceDto } from '../api/includedInThePrice.dto';
import type { IIncludedInThePriceModel } from '../model/includedInThePrice.model';
import type { IHotelRoomDto } from '../api/hotelRoom.dto';
import type { IHotelRoomModel } from '../model/hotelRoom.model';
import type { IDatesAndPricesDto } from '../api/datesAndPrices.dto';
import type { IDatesAndPricesModel } from '../model/datesAndPrices.model';
import type { ICardModel } from '@/shared/lib/types/card.model';

const converterAddress: Converter<IAddressDto, IAddressModel> = (dto) => ({
  id: dto._id,
  city: dto.city,
  region: dto.region,
  country: dto.country,
  fullAddress: dto.fullAddress
});

const converterFood: Converter<IFoodDto, IFoodModel> = (dto) => ({
  included: dto.included,
  type: dto.type
});
const converterBeach: Converter<IBeachDto, IBeachModel> = (dto) => ({
  type: dto.type,
  distanceMinutes: dto?.distanceMinutes
});

const converterCheckInOut: Converter<ICheckInOutDto, ICheckInOutModel> = (dto) => ({
  checkIn: dto.checkIn,
  checkOut: dto.checkOut
});

const converterCitiesListItem: Converter<ICitiesDto, SelectItem> = (dto) => ({
  id: dto.id,
  name: dto.name
});

const converterSeaListItem: Converter<ISeaDto, SelectItem> = (dto) => ({
  id: dto.id,
  name: dto.name
});

const converterAdditionalInfo: Converter<IAdditionalInfoDto, IAdditionalInfoModel> = (dto) => ({
  food: converterFood(dto.food),
  beach: converterBeach(dto.beach),
  checkInOut: converterCheckInOut(dto.checkInOut)
});

const converterIncludedInThePriceItem: Converter<IIncludedInThePriceDto, IIncludedInThePriceModel> = (dto) => ({
  serviceName: dto.serviceName,
  icon: dto?.icon
});

const converterIncludedInThePriceList = converterArray(converterIncludedInThePriceItem);

const converterDatesAndPricesItem: Converter<IDatesAndPricesDto, IDatesAndPricesModel> = (dto) => ({
  startDate: dto.startDate,
  endDate: dto.endDate,
  pricePerPerson: dto.pricePerPerson
});

const converterDatesAndPricesList = converterArray(converterDatesAndPricesItem);

const converterHotelRoomItem: Converter<IHotelRoomDto, IHotelRoomModel> = (dto) => ({
  type: dto.type,
  roomName: dto.roomName,
  beds: dto.beds,
  description: dto.description,
  availability: converterDatesAndPricesList(dto.availability)
});

const converterHotelRoomList = converterArray(converterHotelRoomItem);

const converterCardItem: Converter<ITourDto, ICardModel> = (dto) => ({
  id: dto._id,
  title: dto.name,
  subtitle: dto.address?.city ?? '',
  price: dto.minPrice,
  image: dto.images?.[0] ?? ''
})

export const tourConverterOneListItem: Converter<ITourDto, ITourModel> = (dto) => ({
  id: dto._id,
  name: dto.name,
  type: dto.type,
  description: dto.description,
  address: converterAddress(dto.address),
  additionalInfo: converterAdditionalInfo(dto.additionalInfo),
  includedInThePrice: converterIncludedInThePriceList(dto.includedInThePrice),
  images: toArray(dto.images),
  minPrice: dto.minPrice,
  seaType: dto.seaType,
  fileName: toArray(dto.documentName),
  tours: converterHotelRoomList(dto?.tours),
  registryNumber: dto.registryNumber
});


export const tourConverterList = converterArray(tourConverterOneListItem);
export const tourConverterCardList = converterArray(converterCardItem);

export const tourConverterCitiesList = converterArray(converterCitiesListItem);
export const tourConverterSeaList = converterArray(converterSeaListItem);


import type { IAdditionalInfoDto } from './additionalInfo.dto';
import type { IAddressDto } from './address.dto';
import type { IHotelRoomDto } from './hotelRoom.dto';
import type { IIncludedInThePriceDto } from './includedInThePrice.dto';

export interface ITourDto {
  _id: string;
  name: string;
  type: string;
  description: string;
  address: IAddressDto;
  additionalInfo: IAdditionalInfoDto;
  includedInThePrice: IIncludedInThePriceDto[];
  images: string[];
  minPrice: number;
  seaType: string;
  documentName: string[];
  tours?: IHotelRoomDto[];
  published: boolean
}
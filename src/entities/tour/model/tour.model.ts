import type { IAdditionalInfoModel } from './additionalInfo.model';
import type { IAddressModel } from './address.model';
import type { IHotelRoomModel } from './hotelRoom.model';
import type { IIncludedInThePriceModel } from './includedInThePrice.model';

export interface ITourModel {
  id: string;
  name: string;
  type: string;
  description: string;
  address: IAddressModel;
  additionalInfo: IAdditionalInfoModel;
  includedInThePrice: IIncludedInThePriceModel[];
  images: string[];
  minPrice: number;
  seaType: string;
  fileName: string[];
  tours?: IHotelRoomModel[];
}
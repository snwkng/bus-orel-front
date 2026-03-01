import type { IDatesAndPricesModel } from '../model/datesAndPrices.model';

export interface IHotelRoomModel {
  type: string;
  roomName: string;
  beds: number;
  description: string;
  availability: IDatesAndPricesModel[];
}
import type { IDatesAndPricesDto } from './datesAndPrices.dto';

export interface IHotelRoomDto {
  type: string;
  roomName: string;
  beds: number;
  description: string;
  availability: IDatesAndPricesDto[];
}
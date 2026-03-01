import type { IDatesAndPrices } from '../model/types';

export interface IHotelRoomDto {
  type: string;
  roomName: string;
  beds: number;
  description: string;
  availability: IDatesAndPrices[];
}
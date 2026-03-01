import type { IBeachDto } from './beach.dto';
import type { ICheckInOutDto } from './checkInOut.dto';
import type { IFoodDto } from './food.dto';

export interface IAdditionalInfoDto {
  food: IFoodDto;
  beach: IBeachDto;
  checkInOut: ICheckInOutDto;
}
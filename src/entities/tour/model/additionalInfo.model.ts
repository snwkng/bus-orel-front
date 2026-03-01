import type { IBeachModel } from './beach.model';
import type { ICheckInOutModel } from './checkInOut.model';
import type { IFoodModel } from './food.model';

export interface IAdditionalInfoModel {
  food: IFoodModel;
  beach: IBeachModel;
  checkInOut: ICheckInOutModel;
}
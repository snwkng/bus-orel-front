import { ObjectId } from 'bson';

export interface IExcursion {
  _id: ObjectId,
  name: string,
  description: string[],
  images: {name: string}[],
  duration: number,
  price: number,
  documentName: string,
  checkInConditions: string,
  excursionStart: Date,
  city: string,
  thePriceIncludes: string[],
}
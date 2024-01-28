import { ObjectId } from 'bson';

export interface IExcursion {
  id: ObjectId,
  name: string,
  description: string,
  images: {name: string}[],
  duration: number,
  price: number,
  documentName: string,
  excursionStart: Date,
  city: string,
  thePriceIncludes: string[]
}
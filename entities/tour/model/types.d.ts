import { ObjectId } from 'bson';

export interface ITour {
  _id: ObjectId,
  name: string,
  type: string,
  locationDescription: string,
  rooms: {type: string, numberOfSeats: number, inRoom: string}[],
  images: {name: string}[],
  food: string,
  beach: string,
  distanceToBeach: string,
  checkInConditions: string,
  address: string,
  fare: number,
  thePriceIncludes: string,
  tours: ITourTable[],
  city: string,
  region: string
}

export interface ITourTable {
  startDate: Date,
  endDate: Date,
  rooms: {
    room: string,
    price: number,
  }[]
}
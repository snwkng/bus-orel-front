import type { ObjectId } from 'bson';

export interface IExcursion {
	_id: ObjectId;
	name: string;
	description: string[];
	images: string[];
	duration: number;
	price: number;
	documentName: string;
	checkInConditions: string;
	excursionStart: Date;
	cities: string[];
	hotelName: string;
	thePriceIncludes: string[];
}

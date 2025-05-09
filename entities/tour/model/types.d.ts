import { ObjectId } from 'bson';

export interface ITour {
	_id: ObjectId;
	name: string;
	type: string;
	locationDescription: string;
	documentName: string;
	rooms: { type: string; numberOfSeats: number; inRoom: string }[];
	images: string[];
	food: string;
	beach: string;
	distanceToBeach: string;
	checkInConditions: string;
	address: string;
	price: number;
	thePriceIncludes: string[];
	tours: ITourTable[];
	city: SelectItem;
	region: string;
}

export interface ITourTable {
	roomName: string;
	type: string;
	numberOfSeats: number;
	inRoom: string;
	datesAndPrices: {
		startDate: Date;
		endDate: Date;
		price: number;
	}[];
}

export interface ISeaList {
	id: number;
	name: string;
}

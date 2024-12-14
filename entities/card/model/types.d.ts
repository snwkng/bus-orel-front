import { ObjectId } from 'bson';

export interface ICard {
	id: ObjectId;
	title: string;
	subtitle: string;
	price: number;
	image: string;
}

export interface IExcursionCard extends ICard {
	date: Date | null,
}
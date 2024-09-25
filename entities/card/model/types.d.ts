import { ObjectId } from 'bson';

export interface ICard {
	id: ObjectId;
	title: string;
	subtitle: string;
	price: number;
	images?: { name: string }[];
}

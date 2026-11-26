export interface IExcursionModel {
	id: string;
	name: string;
	type: string | null;
	description: string[];
	images: string[];
	duration: number;
	price: number;
	fileName: string[];
	excursionStartDates: string[];
	cities: string[];
	hotelName: string | null;
	thePriceIncludes: string[];
	additionallyPaid: string[];
}

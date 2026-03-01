export interface IExcursionDto {
	_id: string;
	name: string;
	description: string[];
	images: string[];
	duration: number;
	price: number;
	documentName: string[];
	excursionStartDates: string[];
	cities: string[];
	hotelName?: string;
	thePriceIncludes: string[];
	additionallyPaid: string[];
}

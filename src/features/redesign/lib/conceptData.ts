export interface ConceptCardItem {
	id: string;
	title: string;
	meta: string;
	price: string;
	image?: string;
	images?: string[];
	date?: string;
}

export const conceptTours: ConceptCardItem[] = [
	{
		id: 'nadezhda-gelendzhik',
		title: 'Геленджик, отель «Надежда»',
		meta: 'Геленджик · 7 ночей · с питанием',
		price: '22 100',
		image: '/images/mercedessprinter.webp',
		images: [
			'/images/mercedessprinter.webp',
			'/images/mercedessprinter.webp',
			'/images/mercedessprinter.webp',
			'/images/mercedessprinter.webp',
			'/images/mercedessprinter.webp'
		],
		date: '12 июля'
	},
	{
		id: 'kabardinka-guest',
		title: 'Кабардинка, гостевой дом у моря',
		meta: 'Кабардинка · 10 ночей',
		price: '18 400',
		images: ['/images/mercedessprinter.webp', '/images/mercedessprinter.webp'],
		date: '26 июля'
	},
	{
		id: 'yuzhny-dzhemete',
		title: 'Джемете, пансионат «Южный»',
		meta: 'Анапа · 7 ночей · первая линия',
		price: '24 900',
		image: '/images/mercedessprinter.webp',
		date: '2 августа'
	},
	{
		id: 'primorsky-lazarevskoe',
		title: 'Лазаревское, отель «Приморский»',
		meta: 'Сочи · 8 ночей · бассейн',
		price: '27 300',
		date: '9 августа'
	},
	{
		id: 'morskaya-volna-vityazevo',
		title: 'Витязево, отель «Морская волна»',
		meta: 'Анапа · 11 ночей · с питанием',
		price: '29 800',
		image: '/images/mercedessprinter.webp',
		date: '16 августа'
	},
	{
		id: 'arkhipo-osipovka-guest',
		title: 'Архипо-Осиповка, гостевой дом',
		meta: 'Краснодарский край · 7 ночей',
		price: '19 700',
		date: '23 августа'
	},
	{
		id: 'priboy-dzhubga',
		title: 'Джубга, пансионат «Прибой»',
		meta: 'Туапсе · 8 ночей · первая линия',
		price: '21 500',
		date: '30 августа'
	},
	{
		id: 'betta-family',
		title: 'Бетта, семейный отель у моря',
		meta: 'Геленджик · 6 ночей',
		price: '17 900',
		date: '6 сентября'
	}
];

export const conceptExcursions: ConceptCardItem[] = [
	{
		id: 'kaluga-topy',
		title: 'Калужские тёпы и аквапарк',
		meta: '1 день · каждую субботу',
		price: '3 200',
		image: '/images/mercedessprinter.webp',
		images: [
			'/images/mercedessprinter.webp',
			'/images/mercedessprinter.webp',
			'/images/mercedessprinter.webp'
		],
		date: 'ближайшая — 8 ноября'
	},
	{
		id: 'tula-kremlin',
		title: 'Тула: Кремль, самовары и пряники',
		meta: '1 день · воскресенье',
		price: '2 800',
		images: ['/images/mercedessprinter.webp', '/images/mercedessprinter.webp'],
		date: 'ближайшая — 9 ноября'
	},
	{
		id: 'kursk-korennaya',
		title: 'Курск и Коренная пустынь',
		meta: '1 день · суббота',
		price: '2 500',
		image: '/images/mercedessprinter.webp',
		date: 'ближайшая — 15 ноября'
	},
	{
		id: 'moscow-day',
		title: 'Москва за один день',
		meta: '1 день · пятница',
		price: '3 900',
		date: 'ближайшая — 14 ноября'
	},
	{
		id: 'voronezh-fleet',
		title: 'Воронеж: флот и океанариум',
		meta: '1 день · суббота',
		price: '2 700',
		date: 'ближайшая — 22 ноября'
	},
	{
		id: 'belgorod-line',
		title: 'Белгородская черта',
		meta: '1 день · воскресенье',
		price: '3 100',
		date: 'ближайшая — 23 ноября'
	}
];

export const conceptIncluded = [
	'Проезд на туристическом автобусе из Орла',
	'Проживание в выбранном отеле',
	'Питание по выбранной программе',
	'Медицинская страховка',
	'Сопровождение представителем агентства'
];

export const conceptNotIncluded = [
	'Обеды и ужины вне программы питания',
	'Экскурсии и развлечения на месте',
	'Личные расходы'
];

export interface ConceptDatePrice {
	from: string;
	nights: number;
	price: string;
	left: number;
}

export const conceptDatesPrices: ConceptDatePrice[] = [
	{ from: '12 июля', nights: 7, price: '22 100', left: 6 },
	{ from: '26 июля', nights: 7, price: '23 400', left: 12 },
	{ from: '9 августа', nights: 7, price: '24 900', left: 4 },
	{ from: '23 августа', nights: 7, price: '21 800', left: 18 }
];

export const conceptTourProgram = [
	{
		day: 1,
		title: 'Выезд из Орла',
		text: 'Отправление от офиса агентства в 06:00. Остановки каждые 3–4 часа, обед в дороге. Ночной переезд в комфортабельном автобусе с кондиционером.'
	},
	{
		day: 2,
		title: 'Прибытие и заселение',
		text: 'Прибытие на побережье утром, заселение в отель с 14:00. До заселения — отдых на пляже и обед. Вечером встреча с представителем агентства.'
	},
	{
		day: 3,
		title: 'Отдых у моря',
		text: 'Свободные дни: пляж, море, прогулки по набережной. По желанию — экскурсии: джиппинг в горы, дельфинарий, морская прогулка.'
	},
	{
		day: 7,
		title: 'Выезд домой',
		text: 'Освобождение номеров до 12:00, трансфер к автобусу. Выезд в обратный путь с остановками на отдых и питание.'
	},
	{
		day: 8,
		title: 'Возвращение в Орёл',
		text: 'Прибытие в Орёл ориентировочно в первой половине дня. Развоз по точкам высадки в городе.'
	}
];

export const conceptExcursionProgram = [
	{
		time: '06:30',
		title: 'Выезд из Орла',
		text: 'Встреча у офиса агентства, посадка в автобус. В дороге — горячий чай и фильм по запросу группы.'
	},
	{
		time: '10:00',
		title: 'Обзорная экскурсия',
		text: 'Прибытие и обзорная экскурсия с гидом по историческому центру: главные площади, храмы и купеческие особняки.'
	},
	{
		time: '12:30',
		title: 'Обед',
		text: 'Обед в кафе города (включён в стоимость). Меню согласовываем с группой заранее, есть детские и вегетарианские варианты.'
	},
	{
		time: '14:00',
		title: 'Аквапарк',
		text: 'Три часа в аквапарке: горки, волновой бассейн, детская зона. Сопровождающий остаётся с группой и следит за временем.'
	},
	{
		time: '17:30',
		title: 'Свободное время и выезд',
		text: 'Сбор группы, выезд в Орёл. По пути — остановка на ужин в придорожном кафе (самостоятельно).'
	},
	{
		time: '22:00',
		title: 'Возвращение',
		text: 'Прибытие в Орёл, развоз по точкам высадки. Дети до 12 лет — только в сопровождении взрослых.'
	}
];

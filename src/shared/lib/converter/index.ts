export type Converter<TDto, TModel = TDto> = (dto: TDto) => TModel;

// утилита проверки на массив
export const toArray = <T>(val?: T[] | null): T[] =>
	Array.isArray(val) ? val : [];

// Бэкенд переходит на пагинированные списки { items, meta };
// поддерживаем оба формата, пока выкат не состоялся
export const unwrapApiList = <T>(data?: T[] | { items?: T[] } | null): T[] => {
	if (Array.isArray(data)) return data;
	return toArray(data?.items);
};

// конвертор массива
// можно добавить фильтрацию на null (если вдруг внутри массива будут битые элементы)
export const converterArray = <TDto, TModel>(mapper: (dto: TDto) => TModel) => {
	return (dtos?: TDto[] | null): TModel[] => toArray(dtos).map(mapper);
};

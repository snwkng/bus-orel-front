interface EntityWithId {
	_id: string;
	updatedAt?: string;
}

interface ApiListResponse<T> {
	data: T[] | { items?: T[] };
	meta?: { pagination?: { lastPage?: number } };
}

const PAGE_LIMIT = 100; // максимум по API-контракту бэкенда

const unwrap = <T>(res: ApiListResponse<T> | null): T[] => {
	const data = res?.data;
	if (Array.isArray(data)) return data;
	return data?.items ?? [];
};

const fetchAllPages = async <T>(
	baseUrl: string,
	path: string
): Promise<T[]> => {
	const first = await $fetch<ApiListResponse<T>>(`${baseUrl}${path}`, {
		query: { limit: PAGE_LIMIT }
	}).catch(() => null);

	const items = unwrap<T>(first);
	const lastPage = first?.meta?.pagination?.lastPage ?? 1;
	if (lastPage <= 1) return items;

	const rest = await Promise.all(
		Array.from({ length: lastPage - 1 }, (_, i) =>
			$fetch<ApiListResponse<T>>(`${baseUrl}${path}`, {
				query: { limit: PAGE_LIMIT, page: i + 2 }
			})
				.then(unwrap<T>)
				.catch(() => [] as T[])
		)
	);
	return items.concat(rest.flat());
};

export default defineEventHandler(async (event) => {
	const { BASE_URL } = useRuntimeConfig(event).public;

	const [hotels, excursions] = await Promise.all([
		fetchAllPages<EntityWithId>(BASE_URL, '/api/hotels'),
		fetchAllPages<EntityWithId>(BASE_URL, '/api/excursions')
	]);

	return [
		...hotels.map((h) => ({
			loc: `/bus-tours/${h._id}`,
			lastmod: h.updatedAt
		})),
		...excursions.map((e) => ({
			loc: `/excursions/${e._id}`,
			lastmod: e.updatedAt
		}))
	];
});

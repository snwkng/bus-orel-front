interface EntityWithId {
	_id: string;
	updatedAt?: string;
}

type ApiListResponse<T> = { data: T[] | { items?: T[] } };

const unwrap = <T>(res: ApiListResponse<T> | null): T[] => {
	const data = res?.data;
	if (Array.isArray(data)) return data;
	return data?.items ?? [];
};

export default defineEventHandler(async (event) => {
	const { BASE_URL } = useRuntimeConfig(event).public;

	const [hotels, excursions] = await Promise.all([
		$fetch<ApiListResponse<EntityWithId>>(`${BASE_URL}/api/hotels`)
			.then(unwrap<EntityWithId>)
			.catch(() => []),
		$fetch<ApiListResponse<EntityWithId>>(`${BASE_URL}/api/excursions`)
			.then(unwrap<EntityWithId>)
			.catch(() => [])
	]);

	return [
		...hotels.map((h) => ({ loc: `/bus-tours/${h._id}`, lastmod: h.updatedAt })),
		...excursions.map((e) => ({
			loc: `/excursions/${e._id}`,
			lastmod: e.updatedAt
		}))
	];
});

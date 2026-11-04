import type { LocationQuery } from 'vue-router';
import type { ICardModel } from '@/shared/lib/types/card.model';
import { fetchToursCardPage } from '@/entities/tour/api/tour.api';
import { fetchExcursionsCardPage } from '@/entities/excursion/api/excursion.api';

export const usePagedCardList = async (
	kind: 'tour' | 'excursion',
	query: Ref<LocationQuery>
) => {
	const fetchPage =
		kind === 'tour' ? fetchToursCardPage : fetchExcursionsCardPage;

	// первая страница — через useAsyncData (SSR + рефетч при смене фильтров)
	const {
		data: firstPage,
		status,
		error
	} = await useAsyncData(
		`catalog-${kind}`,
		() => fetchPage({ ...query.value, page: String(1) }),
		{
			watch: [query]
		}
	);

	const extraItems = ref<ICardModel[]>([]);
	const page = ref(1);
	const pagination = ref<ApiPagination | null>(
		firstPage.value?.pagination ?? null
	);
	const loadingMore = ref(false);
	const moreError = ref<unknown>(null);

	// пришла новая первая страница (смена фильтров) — сбрасываем догруженное
	watch(firstPage, (value) => {
		extraItems.value = [];
		page.value = 1;
		pagination.value = value?.pagination ?? null;
		moreError.value = null;
	});

	const items = computed(() => [
		...(firstPage.value?.items ?? []),
		...extraItems.value
	]);

	const hasMore = computed(
		() => !!pagination.value && page.value < pagination.value.lastPage
	);

	const errorText = computed(() => getApiErrorMessage(error.value));
	const moreErrorText = computed(() => getApiErrorMessage(moreError.value));

	const loadMore = async () => {
		if (!hasMore.value || loadingMore.value || status.value === 'pending') {
			return;
		}
		loadingMore.value = true;
		moreError.value = null;
		try {
			const nextPage = page.value + 1;
			const res = await fetchPage({
				...query.value,
				page: String(nextPage)
			});
			extraItems.value = [...extraItems.value, ...res.items];
			page.value = nextPage;
		} catch (e) {
			moreError.value = e;
		} finally {
			loadingMore.value = false;
		}
	};

	return {
		items,
		status,
		error,
		errorText,
		hasMore,
		loadingMore,
		moreError,
		moreErrorText,
		loadMore
	};
};

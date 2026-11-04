<script setup lang="ts">
interface IProps {
	kind: 'tour' | 'excursion';
	emptyText?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	emptyText: undefined
});

const route = useRoute();
const routeRef = computed(() => route.query);

const {
	items,
	status,
	error,
	errorText,
	hasMore,
	loadingMore,
	moreError,
	moreErrorText,
	loadMore
} = await usePagedCardList(props.kind, routeRef);

const sentinel = ref<HTMLElement | null>(null);
useIntersectionObserver(
	sentinel,
	([entry]) => {
		if (entry?.isIntersecting) {
			loadMore();
		}
	},
	{ rootMargin: '300px' }
);

const cardType = computed(() =>
	props.kind === 'tour' ? 'bus-tour' : 'excursion'
);

const text = computed(
	() =>
		props.emptyText ??
		(props.kind === 'tour'
			? 'Автобусных туров к морю пока нет'
			: 'Экскурсионных туров пока нет')
);
</script>
<template>
	<div
		v-if="status === 'pending' && !items.length"
		class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
		aria-hidden="true"
	>
		<SharedSkeletonCard
			v-for="i in 6"
			:key="i"
		/>
	</div>
	<SharedAlertsBaseAlert
		v-else-if="error && !items.length"
		mode="error"
		icon-name="circle-alert"
	>
		Не удалось загрузить список{{
			errorText ? `: ${errorText}` : '. Попробуйте обновить страницу позже'
		}}
	</SharedAlertsBaseAlert>
	<SharedInformersEmptyDataInformer
		v-else-if="!items.length"
		:text="text"
	/>
	<template v-else>
		<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
			<SharedCardsBaseCard
				v-for="item in items"
				:id="item.id"
				:key="item.id"
				:type="cardType"
				:title="item.title"
				:price="item.price"
				:date="item?.date ?? ''"
				:subtitle="item.subtitle"
				:image-link="item.image"
			/>
			<template v-if="loadingMore">
				<SharedSkeletonCard
					v-for="i in 3"
					:key="`skeleton-${i}`"
					aria-hidden="true"
				/>
			</template>
		</div>
		<SharedAlertsBaseAlert
			v-if="moreError"
			mode="error"
			icon-name="circle-alert"
			class="mt-6"
		>
			Не удалось загрузить ещё{{ moreErrorText ? `: ${moreErrorText}` : '' }}.
			<button
				type="button"
				class="base-link"
				@click="loadMore"
			>
				Повторить
			</button>
		</SharedAlertsBaseAlert>
		<div
			v-if="hasMore"
			ref="sentinel"
			class="h-1"
			aria-hidden="true"
		/>
	</template>
</template>

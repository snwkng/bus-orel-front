<script setup lang="ts">
import { getToursCardList } from '@/entities/tour/api/tour.api';
import { getExcursionsCardList } from '@/entities/excursion/api/excursion.api';

interface IProps {
	kind: 'tour' | 'excursion';
	emptyText?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	emptyText: undefined
});

const route = useRoute();
const routeRef = computed(() => route.query);

const { data, status, error } =
	props.kind === 'tour'
		? getToursCardList(routeRef)
		: getExcursionsCardList(routeRef);

const errorText = computed(() => getApiErrorMessage(error.value));

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
		v-if="status === 'pending' && !data?.length"
		class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
		aria-hidden="true"
	>
		<SharedSkeletonCard
			v-for="i in 6"
			:key="i"
		/>
	</div>
	<div
		v-else-if="data?.length"
		class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
	>
		<SharedCardsBaseCard
			v-for="item in data"
			:id="item.id"
			:key="item.id"
			:type="cardType"
			:title="item.title"
			:price="item.price"
			:date="item?.date ?? ''"
			:subtitle="item.subtitle"
			:image-link="item.image"
		/>
	</div>
	<SharedAlertsBaseAlert
		v-else-if="error"
		mode="error"
		icon-name="circle-alert"
	>
		Не удалось загрузить список{{
			errorText ? `: ${errorText}` : '. Попробуйте обновить страницу позже'
		}}
	</SharedAlertsBaseAlert>
	<SharedInformersEmptyDataInformer
		v-else
		:text="text"
	/>
</template>

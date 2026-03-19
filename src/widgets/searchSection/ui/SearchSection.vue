<script setup lang="ts">
interface IProps {
	multiple?: boolean;
	title?: string;
	searchControl?: 'default' | 'excursion' | 'tour';
}

const props = withDefaults(defineProps<IProps>(), {
	multiple: false,
	title: '',
	searchControl: 'default'
});

const store = useMainBtnGroupStore();

const { searchSection } = storeToRefs(store);

const commonTitle = computed(() => {
	if (props.title) return props.title;

	return searchSection.value === 'excursion'
		? 'Поиск экскурсионных туров из Орла'
		: 'Поиск автобусных туров к морю из Орла';
});

const typeControl = computed(() =>
	props.searchControl === 'default' ? searchSection.value : props.searchControl
);
</script>
<template>
	<div class="h-full w-full bg-secondary-500 text-white dark:bg-gray-800">
		<div
			class="max-w-container flex flex-col items-center justify-center gap-y-6 py-5 lg:mt-[-56px] lg:h-[500px]"
		>
			<SharedFontsHeading
				variant="display-lg"
				color="white"
				weight="bold"
				class="mb-2"
			>
				{{ commonTitle }}
			</SharedFontsHeading>
			<FeaturesMainBtnGroup v-if="multiple" />
			<FeaturesSearchForm :type="typeControl" />
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchToursForm from '@/features/searchToursForm';
import SearchExcursionsForm from '@/features/searchExcursionsForm';
import MainBtnGroup from '@/features/mainBtnGroup/ui/MainBtnGroup.vue';

const title = ref('Поиск автобусных туров к морю из Орла');

const store = useMainBtnGroupStore();

const { searchSection } = storeToRefs(store);

watch(
	() => searchSection.value,
	() => {
		if (searchSection.value === 'excursions') {
			title.value = 'Поиск экскурсионных туров из Орла';
		} else {
			title.value = 'Поиск автобусных туров к морю из Орла';
		}
	}
)

</script>
<template>
	<div class="px-base w-full h-full py-5 lg:h-96 bg-deep-blue flex flex-col items-center justify-center gap-y-6 text-white">
		<h1 class=" font-bold text-4xl mb-2">
			{{ title }}
		</h1>
		<main-btn-group />
		<search-excursions-form v-if="searchSection === 'excursions'" />
		<search-tours-form v-else />
	</div>
</template>

<script setup lang="ts">
import SearchToursForm from '@/features/searchToursForm';
import SearchExcursionsForm from '@/features/SearchExcursionsForm';

type goToSearch = 'busTours' | 'excursions';

const title = ref('Поиск автобусных туров к морю из Орла');
const searchSection = ref('busTours');

const showSearch = (showSearchUi: goToSearch) => {
	if (showSearchUi === 'excursions') {
		searchSection.value = 'excursions';
		title.value = 'Поиск экскурсионных туров из Орла';
	} else {
		searchSection.value = 'busTours';
		title.value = 'Поиск автобусных туров к морю из Орла';
	}
}
</script>
<template>
	<div class="px-base w-full h-96 bg-deep-blue flex flex-col items-center justify-center gap-y-6 text-white">
		<h1 class=" font-bold text-4xl mb-2">
			{{ title }}
		</h1>
		<div class="flex gap-1 items-center justify-start">
			<button type="button" class="px-4 py-1 text-white bg-slate-200/10 hover:bg-slate-200/25 transition-all rounded-xl" @click="showSearch('busTours')">
				Туры к морю
			</button>
			<button type="button" class="px-4 py-1 text-white bg-slate-200/10 hover:bg-slate-200/25 transition-all rounded-xl" @click="showSearch('excursions')">
				Экскурсии
			</button>
			<router-link to="#bus-rent" class="px-4 py-1 ml-5 text-white bg-slate-200/10 hover:bg-slate-200/25 transition-all rounded-xl">
				Аренда автобуса
			</router-link>
		</div>
		<search-excursions-form v-if="searchSection === 'excursions'" />
		<search-tours-form v-else />
	</div>
</template>

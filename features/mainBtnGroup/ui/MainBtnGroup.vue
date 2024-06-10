<script setup lang="ts">
import type { goToSearch } from '../model/types';

const store = useMainBtnGroupStore();

const { toggleSearch } = store;

const { searchSection } = storeToRefs(store);

const showSearch = (search: goToSearch) => {
	toggleSearch(search);
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
</script>

<template>
	<div ref="mainBtnGroup" class="flex gap-1 items-center justify-start py-3">
		<button
			type="button"
			class="px-4 py-2 transition-all rounded-xl"
			:class="[searchSection === 'busTours' ? 'bg-white text-slate-900' : 'text-white bg-blue-900/20 hover:bg-blue-900/35']"
			@click="showSearch('busTours')"
		>
			Туры к морю
		</button>
		<button
			type="button"
			class="px-4 py-2 transition-all rounded-xl"
			:class="[searchSection === 'excursions' ? 'bg-white text-slate-900' : 'text-white bg-blue-900/20 hover:bg-blue-900/35']"
			@click="showSearch('excursions')"
		>
			Экскурсии
		</button>
		<router-link to="#bus-rent" class="px-4 py-2 ml-5 text-white bg-blue-200/20  transition-all rounded-xl">
			Аренда автобуса
		</router-link>
	</div>
</template>

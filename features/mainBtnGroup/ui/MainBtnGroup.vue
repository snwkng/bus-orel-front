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
};
</script>

<template>
	<div ref="mainBtnGroup" class="flex flex-col sm:flex-row items-center justify-start gap-1 py-3">
		<div class="flex gap-1 mb-2 sm:mb-0">
			<button
				type="button"
				class="rounded-xl px-3 py-2 transition-all lg:px-4 lg:py-2"
				:class="[
					searchSection === 'busTours'
						? 'bg-white text-slate-900'
						: 'bg-blue-900/20 text-white hover:bg-blue-900/35',
				]"
				@click="showSearch('busTours')"
			>
				Туры к морю
			</button>
			<button
				type="button"
				class="rounded-xl px-3 py-2 transition-all lg:px-4 lg:py-2"
				:class="[
					searchSection === 'excursions'
						? 'bg-white text-slate-900'
						: 'bg-blue-900/20 text-white hover:bg-blue-900/35',
				]"
				@click="showSearch('excursions')"
			>
				Экскурсии
			</button>
		</div>
		<router-link
			to="#bus-rent"
			class="sm:ml-5 rounded-xl bg-blue-200/20 px-3 py-2 text-white transition-all lg:px-4 lg:py-2"
		>
			Аренда автобуса
		</router-link>
	</div>
</template>

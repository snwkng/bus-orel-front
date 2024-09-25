<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue';
import TheSelect from '@/shared/ui/forms/select/TheSelect.vue';
import TheButton from '@/shared/ui/buttons/TheButton.vue';

const router = useRouter();

const store = useExcursionStore();

const { getCityList } = store;
const { cityList } = storeToRefs(store);

const selectedCity = ref<SelectItem>({});

const getExcursions = () => {
	router.push({ name: 'excursions', query: { city: selectedCity.value.name } });
};

await callOnce(getCityList);
</script>
<template>
	<form
		class="flex w-full flex-row flex-wrap items-center justify-center gap-x-[2px]"
	>
		<the-input
			disabled="true"
			class="input:rounded-l-none w-64"
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			classes="rounded-t-xl md:rounded-t-none md:rounded-l-xl"
		/>
		<the-select
			class="w-64"
			select-id="куда"
			label="Куда"
			:list="cityList"
			classes="md:rounded-r-xl"
			query-name="city"
			@change="selectedCity = $event"
		/>
		<the-button
			class="w-full rounded-t-none md:ml-5 md:w-52 md:rounded-t-xl"
			btn-title="Найти"
			@click="getExcursions"
		/>
	</form>
</template>

<script setup lang="ts">

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
		<SharedUiFormsTheInput
			disabled
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			classes="rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl"
		/>
		<SharedUiFormsSelectTheSelect
			class="w-64"
			select-id="куда"
			label="Куда"
			:list="cityList"
			classes="md:rounded-r-xl"
			query-name="city"
			@change="selectedCity = $event"
		/>
		<SharedUiButtonsTheButton
			class="w-full rounded-t-none md:ml-5 md:w-52 md:rounded-t-xl"
			btn-title="Найти"
			@click="getExcursions"
		/>
	</form>
</template>

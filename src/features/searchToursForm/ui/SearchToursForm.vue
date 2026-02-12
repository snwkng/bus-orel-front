<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const store = useTourStore();

const { getSeaList, getCityList } = store;
const { seaList, cityList } = storeToRefs(store);

await useAsyncData('init-data', async () => {
	await Promise.all([getSeaList(), getCityList(route.query.seaType as string)]);
	return true;
});

const selectedSea = ref(
	seaList.value.find(
		(s) =>
			s.name?.toLowerCase() === (route.query.seaType as string)?.toLowerCase()
	) || {}
);
const selectedPlace = ref(
	cityList.value.find(
		(c) => c.name?.toLowerCase() === (route.query.city as string)?.toLowerCase()
	) || {}
);

watch(
	() => selectedSea.value?.name,
	async (newName) => {
		// Загружаем новый список городов
		await getCityList(newName);

		// Проверяем валидность текущего города в новом списке
		if (selectedPlace.value?.name) {
			const isValid = cityList.value.some(
				(c) => c.name?.toLowerCase() === selectedPlace.value.name?.toLowerCase()
			);
			if (!isValid) {
				selectedPlace.value = {};
			}
		}
	}
);

const getTours = () => {
	router.push({
		name: 'bus-tours',
		query: { seaType: selectedSea.value?.name, city: selectedPlace.value?.name }
	});
};
</script>
<template>
	<form
		class="flex w-full select-none flex-col items-center gap-x-[2px] md:flex-row md:justify-center"
	>
		<SharedBlockGroupsSelectGroup>
			<SharedFormsTheInput
				disabled
				input-id="откуда"
				type="text"
				label="Откуда"
				placeholder="Орёл"
				classes="rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl"
			/>
			<SharedFormsBaseSelect
				v-model="selectedSea"
				label="Море"
				:list="seaList"
			/>
			<SharedFormsBaseSelect
				v-model="selectedPlace"
				:list="cityList"
				label="Куда"
			/>
		</SharedBlockGroupsSelectGroup>
		<SharedButtonsTheButton
			class="w-full rounded-t-none md:ml-5 md:w-52 md:rounded-t-xl"
			btn-title="Найти"
			@click="getTours"
		/>
	</form>
</template>

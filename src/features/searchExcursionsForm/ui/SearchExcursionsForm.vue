<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const store = useExcursionStore();

const { getCityList } = store;
const { cityList } = storeToRefs(store);

const selectedCity = ref(
	cityList.value.find(
		(s) =>
			s.name?.toLowerCase() === (route.query.city as string)?.toLowerCase()
	) || {}
);

const getExcursions = () => {
	router.push({ name: 'excursions', query: { city: selectedCity.value.name } });
};

await callOnce(getCityList);
</script>
<template>
	<form
		class="flex w-full flex-row flex-wrap items-center justify-center gap-x-[2px]"
	>
		<SharedBlockGroupsSelectGroup>
			<SharedFormsTheInput
				disabled
				input-id="откуда"
				type="text"
				label="Откуда"
				placeholder="Орёл"
			/>
			<SharedFormsBaseSelect
				v-model="selectedCity"
				label="Куда"
				:list="cityList"
			/>
		</SharedBlockGroupsSelectGroup>
		<SharedButtonsTheButton
			class="w-full rounded-t-none md:ml-5 md:w-52 md:rounded-t-xl"
			btn-title="Найти"
			@click="getExcursions"
		/>
	</form>
</template>

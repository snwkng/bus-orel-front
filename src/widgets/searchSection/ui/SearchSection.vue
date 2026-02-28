<script setup lang="ts">
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
				{{ title }}
			</SharedFontsHeading>
			<FeaturesMainBtnGroup />
			<ClientOnly>
				<Transition
					name="fade"
					mode="out-in"
				>
					<FeaturesSearchExcursionsForm v-if="searchSection === 'excursions'" />
					<FeaturesSearchToursForm v-else />
				</Transition>
			</ClientOnly>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

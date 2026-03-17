<script setup lang="ts">
import { BusRentModal } from '@/features/modals';
const { $modals } = useNuxtApp();

const toggleModal = () => {
	$modals.open(BusRentModal);
};
</script>
<template>
	<div
		id="bus-rent"
		class="w-full px-0 py-0 dark:bg-gray-800 lg:py-8"
	>
		<div class="max-w-container-rent flex items-center justify-center">
			<section
				id="bus-rent-focus"
				class="flex min-h-40 flex-col items-center justify-center gap-4 bg-slate-50 p-5 py-8 dark:bg-gray-700 dark:text-slate-200 sm:min-h-60 sm:flex-row sm:justify-between sm:gap-8 md:gap-16 md:rounded-xl"
			>
				<div
					class="min-h-40 w-full bg-sprinter bg-contain bg-center bg-no-repeat sm:min-h-60"
				/>
				<div class="flex w-full flex-col items-center gap-y-5 sm:items-start">
					<SharedFontsText variant="body-2xl">
						Арендуйте микроавтобусы в Орле с опытными водителями и
						комфортабельными салонами для приятного путешествия
					</SharedFontsText>
					<SharedButtonsTheButton
						class="w-7"
						@click="toggleModal"
					>
						Арендовать
					</SharedButtonsTheButton>
				</div>
			</section>
		</div>
	</div>
</template>

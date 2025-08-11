<script setup lang="ts">
const openModal = ref(false);
</script>
<template>
	<div
		id="bus-rent"
		class="w-full px-0 py-0 dark:bg-gray-800 lg:py-8"
	>
		<div class="max-w-container-rent flex items-center justify-center">
			<section
				id="bus-rent-focus"
				class="p-5 flex min-h-40 flex-col items-center justify-center sm:justify-between gap-4 bg-slate-50 py-8 dark:bg-gray-700 dark:text-slate-200 sm:min-h-60 sm:flex-row sm:gap-8 md:gap-16 md:rounded-xl"
			>
				<div
					class="min-h-40 w-full bg-sprinter bg-contain bg-center bg-no-repeat sm:min-h-60"
				/>
				<div class="flex w-full flex-col items-center gap-y-5 sm:items-start">
					<span class="text-xl md:text-2xl">
						Арендуйте микроавтобусы в Орле с опытными водителями и
						комфортабельными салонами для приятного путешествия
					</span>
					<SharedUiButtonsTheButton
						btn-title="Арендовать"
						class="w-7"
						@click="openModal = true"
					/>
				</div>
			</section>
		</div>
	</div>
	<SharedUiModalBaseModal
		v-model="openModal"
		title="Аренда автобусов и микроавтобусов"
		description=""
	>
		<p>
			По вопросам аренды автобусов и микроавтобусов звоните:
			<a
				href="tel:+74862780958"
				class="cursor-pointer text-deep-blue transition-colors hover:text-ligth-blue dark:text-ligth-blue dark:hover:text-deep-blue"
				>+7(4862)78-09-58</a
			>
		</p>
		<p>
			или напишите нам в группу в
			<a
				href="https://vk.com/gtorel"
				rel="noopener noreferrer"
				class="cursor-pointer text-deep-blue transition-colors hover:text-ligth-blue dark:text-ligth-blue dark:hover:text-deep-blue"
				target="_blank"
				aria-label="vk"
			>
				VK
			</a>
		</p>
	</SharedUiModalBaseModal>
</template>

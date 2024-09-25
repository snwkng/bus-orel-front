<script setup lang="ts">
import TheButton from '~/shared/ui/buttons/TheButton.vue';
</script>
<template>
	<section
		id="bus-rent"
		class="px-base flex min-h-40 w-full flex-col items-center justify-between gap-4 rounded-xl bg-slate-50 py-8 sm:min-h-60 sm:flex-row sm:gap-8 md:gap-16"
	>
		<div
			class="min-h-40 w-full bg-sprinter bg-contain bg-center bg-no-repeat sm:min-h-60"
		/>
		<div class="flex w-full flex-col items-center gap-y-5 sm:items-start">
			<span class="text-xl md:text-2xl">
				Арендуйте микроавтобусы в Орле с опытными водителями и комфортабельными
				салонами для приятного путешествия
			</span>
			<the-button btn-title="Арендовать" class="w-7" />
		</div>
	</section>
</template>

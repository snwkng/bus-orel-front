<script setup lang="ts">
import TheButton from '~/shared/ui/buttons/TheButton.vue';
</script>
<template>
	<section id="bus-rent" class="w-full flex flex-col sm:flex-row justify-between px-base py-8 gap-4 sm:gap-8 md:gap-16 rounded-xl bg-slate-50 min-h-40 sm:min-h-60 items-center">
		<div class="w-full bg-sprinter bg-no-repeat bg-center bg-contain min-h-40 sm:min-h-60" />
		<div class="w-full flex flex-col gap-y-5 items-center sm:items-start">
			<span class="text-xl md:text-2xl">Арендуйте микроавтобусы в Орле с опытными водителями и комфортабельными салонами
				для приятного путешествия</span>
			<the-button btn-title="Арендовать" class="w-7" />
		</div>
	</section>
</template>

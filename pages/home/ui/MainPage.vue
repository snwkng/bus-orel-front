<script setup lang="ts">
import searchSection from '@/widgets/searchSection';
import BusRentSection from '@/widgets/busRentSection';
import BusToursSection from '@/widgets/busToursSection';
import ExcursionsSection from '@/widgets/excursionsSection';

definePageMeta({
	layout: 'default'
});

useHead({
	title: 'Туристическое агентство "ГалаТур" Орёл'
});

const route = useRoute();

const scrollToSection = (id: string): void => {
	document.getElementById(id)?.scrollIntoView({
		behavior: 'smooth'
	});
};

onMounted(() => {
	if (route.hash) {
		scrollToSection(route.hash.slice(1));
	}
});
</script>
<template>
	<div>
		<search-section />
		<div class="px-base py-8">
			<bus-tours-section title="Автобусные туры к морю из Орла" class="pb-11" />
			<excursions-section title="Экскурсионные туры из Орла" class="pb-11" />
		</div>
		<div class="px-0 py-0 lg:px-20 lg:py-8">
			<bus-rent-section />
		</div>
		<section id="tour-selection" class="px-base py-8">
			<h2 class="mb-6 text-2xl font-bold">
				Отдых по вашим мечтам: выбор тура с нашим агентством
			</h2>
			<p class="mb-2 leading-7">
				Подбор тура - это одна из ключевых услуг, предлагаемых нашим
				туристическим агентством в городе Орёл. Наша команда опытных
				специалистов готова тщательно подобрать идеальный тур, учитывая все ваши
				предпочтения и интересы. Мы учтем каждую деталь - от продолжительности
				путешествия и типа развлечений до вашего бюджета и потребностей.
			</p>
			<p class="mb-2 leading-7">
				Мы предлагаем широкий выбор туров по различным направлениям - от
				пляжного отдыха до культурных экскурсий. Наша главная цель - сделать
				ваше путешествие максимально комфортным и запоминающимся.
			</p>
			<p class="mb-2 leading-7">
				Наше агентство отличает надежность, прозрачность и высокий уровень
				сервиса. Доверьте нам подбор тура и отправляйтесь в увлекательное
				путешествие, которое запомнится вам на всю жизнь!
			</p>
		</section>
	</div>
</template>

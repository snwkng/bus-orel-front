<script setup lang="ts">
definePageMeta({
	layout: 'default'
});

useHead({
	meta: [
		{
			name: 'description',
			content:
				'Турагентство ГалаТур из Орла предлагает выгодные путешествия и незабываемые экскурсии. Также предоставляем в аренду микроавтобусы с опытными водителями для комфортного передвижения. Забронируйте свой отдых уже сегодня!'
		},
		{
			name: 'keywords',
			content:
				'галатур, туристическое агентство, Орёл, аренда микроавтобусов, экскурсии, путешествия, отдых, аренда микроавтобусов с водителем, групповые поездки, индивидуальные туры'
		},
		{
			name: 'yandex-verification',
			content: '580bdd84c70ca5a3'
		}
	]
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
		<WidgetsSearchSection />
		<WidgetsBusToursSection
			classes="px-base pt-11 py-8"
			title="Автобусные туры к морю из Орла"
		/>
		<WidgetsExcursionsSection
			classes="px-base pt-11"
			title="Экскурсионные туры из Орла"
		/>
		<SharedLibModulesTheDelimir />

		<WidgetsBusRentSection />

		<section
			id="tour-selection"
			class="px-base py-8 dark:bg-gray-800 dark:text-white"
		>
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

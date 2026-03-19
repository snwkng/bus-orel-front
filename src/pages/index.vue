<script setup lang="ts">
const route = useRoute();

definePageMeta({
	layout: 'default'
});

useSeoMeta({
	title: 'Туристическое агентство Галатур Орёл',
	ogTitle: 'Туристическое агентство Галатур Орёл',
	description:
		'Турагентство ГалаТур из Орла предлагает выгодные путешествия и незабываемые экскурсии. Также предоставляем в аренду микроавтобусы с опытными водителями для комфортного передвижения. Забронируйте свой отдых уже сегодня!',
	ogDescription:
		'Турагентство ГалаТур из Орла предлагает выгодные путешествия и незабываемые экскурсии. Также предоставляем в аренду микроавтобусы с опытными водителями для комфортного передвижения. Забронируйте свой отдых уже сегодня!',
	keywords:
		'галатур, туристическое агентство, Орёл, аренда микроавтобусов, экскурсии, путешествия, отдых, аренда микроавтобусов с водителем, групповые поездки, индивидуальные туры, автобусом к морю, поездки на море, турагентство, туры по России'
});

useHead({
	meta: [
		{
			name: 'yandex-verification',
			content: '580bdd84c70ca5a3'
		}
	]
});

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
	<div class="flex flex-col gap-y-8">
		<WidgetsSearchSection multiple />

		<WidgetsToursSection
			class="pt-11"
			type="slider"
			title="Автобусные туры к морю из Орла"
			icon-link="bus-tours"
		/>

		<WidgetsExcursionsSection
			class="pb-11 pt-11"
			type="slider"
			title="Экскурсионные туры из Орла"
			icon-link="excursions"
		/>


		<WidgetsBusRentSection />

		<div
			id="tour-selection"
			class="pb-8 dark:bg-gray-800 dark:text-slate-200"
		>
			<section class="max-w-container">
				<SharedFontsHeading
					id="tour-selection-focus"
					variant="heading-xl"
					color="default"
					weight="bold"
					class="mb-6"
				>
					Отдых по вашим мечтам: выбор тура с нашим агентством
				</SharedFontsHeading>
				<SharedFontsText
					variant="body-lg"
					weight="regular"
					class="mb-2"
				>
					Подбор тура - это одна из ключевых услуг, предлагаемых нашим
					туристическим агентством в городе Орёл. Наша команда опытных
					специалистов готова тщательно подобрать идеальный тур, учитывая все
					ваши предпочтения и интересы. Мы учтем каждую деталь - от
					продолжительности путешествия и типа развлечений до вашего бюджета и
					потребностей.
				</SharedFontsText>
				<SharedFontsText
					variant="body-lg"
					weight="regular"
					class="mb-2"
				>
					Мы предлагаем широкий выбор туров по различным направлениям - от
					пляжного отдыха до культурных экскурсий. Наша главная цель - сделать
					ваше путешествие максимально комфортным и запоминающимся.
				</SharedFontsText>
				<SharedFontsText
					variant="body-lg"
					weight="regular"
					class="mb-2"
				>
					Наше агентство отличает надежность, прозрачность и высокий уровень
					сервиса. Доверьте нам подбор тура и отправляйтесь в увлекательное
					путешествие, которое запомнится вам на всю жизнь!
				</SharedFontsText>
			</section>
		</div>
	</div>
</template>

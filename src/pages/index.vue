<script setup lang="ts">
const route = useRoute();

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

const rentModalOpen = ref(false);

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
		<!-- Hero -->
		<section class="mx-auto w-full max-w-[1200px] px-6 pt-14 pb-16 md:pt-20">
			<div class="max-w-[560px]">
				<h1 class="reveal typo-display">К морю — на нашем автобусе</h1>
				<p
					class="reveal typo-lead mt-4 max-w-[46ch] text-neutral-600"
					style="animation-delay: 90ms"
				>
					Из Орла без пересадок, с заселением в проверенные отели. Едем сами —
					отвечаем сами.
				</p>
			</div>

			<div
				class="reveal mt-10"
				style="animation-delay: 180ms"
			>
				<FeaturesSearchPill />
			</div>
		</section>

		<!-- Tours carousel -->
		<section class="border-t border-neutral-100 bg-neutral-50 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<WidgetsToursCarousel />
			</div>
		</section>

		<!-- Excursions carousel -->
		<section class="border-t border-neutral-100 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<WidgetsExcursionsCarousel />
			</div>
		</section>

		<!-- Bus rent -->
		<section
			id="bus-rent"
			class="border-t border-neutral-100 bg-neutral-50 py-14"
		>
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<div
					class="flex flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:flex-row md:gap-16 md:p-12"
				>
					<div
						class="bg-sprinter min-h-40 w-full bg-contain bg-center bg-no-repeat sm:min-h-60"
					/>
					<div class="flex w-full flex-col items-start gap-y-5">
						<h2 class="typo-h2">Аренда микроавтобусов в Орле</h2>
						<p class="typo-body max-w-[52ch] text-neutral-600">
							С опытными водителями и комфортабельными салонами — для свадеб,
							корпоративов, экскурсий и поездок на море своей компанией.
						</p>
						<button
							type="button"
							class="bg-primary-500 hover:bg-primary-600 typo-button rounded-full px-6 py-3 text-white transition-all active:scale-95"
							@click="rentModalOpen = true"
						>
							Узнать стоимость аренды
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- SEO text -->
		<section
			id="tour-selection"
			class="border-t border-neutral-100 py-14"
		>
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<h2 class="typo-h2 mb-6 max-w-[24ch]">
					Отдых по вашим мечтам: выбор тура с нашим агентством
				</h2>
				<div class="typo-body max-w-[68ch] space-y-3 text-neutral-600">
					<p>
						Подбор тура — это одна из ключевых услуг, предлагаемых нашим
						туристическим агентством в городе Орёл. Наша команда опытных
						специалистов готова тщательно подобрать идеальный тур, учитывая все
						ваши предпочтения и интересы. Мы учтем каждую деталь — от
						продолжительности путешествия и типа развлечений до вашего бюджета и
						потребностей.
					</p>
					<p>
						Мы предлагаем широкий выбор туров по различным направлениям — от
						пляжного отдыха до культурных экскурсий. Наша главная цель — сделать
						ваше путешествие максимально комфортным и запоминающимся.
					</p>
					<p>
						Наше агентство отличает надежность, прозрачность и высокий уровень
						сервиса. Доверьте нам подбор тура и отправляйтесь в увлекательное
						путешествие, которое запомнится вам на всю жизнь!
					</p>
				</div>
			</div>
		</section>

		<FeaturesContactModal
			v-if="rentModalOpen"
			mode="question"
			context="Аренда микроавтобуса"
			@close="rentModalOpen = false"
		/>
	</div>
</template>

<style scoped>
@keyframes rise {
	from {
		opacity: 0;
		transform: translateY(16px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.reveal {
	opacity: 0;
	animation: rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
	.reveal {
		opacity: 1;
		animation: none;
	}
}
</style>

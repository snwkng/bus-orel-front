<script setup lang="ts">
const route = useRoute();

useSeoMeta({
	title: 'Туристическое агентство Галатур Орёл',
	ogTitle: 'Туристическое агентство Галатур Орёл',
	description:
		'Турагентство ГалаТур из Орла предлагает туры к морю, экскурсии и подбор путешествий по России и за границу. Также предоставляем в аренду автобусы и микроавтобусы с опытными водителями. Забронируйте свой отдых уже сегодня!',
	ogDescription:
		'Турагентство ГалаТур из Орла предлагает туры к морю, экскурсии и подбор путешествий по России и за границу. Также предоставляем в аренду автобусы и микроавтобусы с опытными водителями. Забронируйте свой отдых уже сегодня!'
});

useHead({
	meta: [
		{
			name: 'yandex-verification',
			content: '580bdd84c70ca5a3'
		},
		{
			name: 'keywords',
			content:
				'галатур, туристическое агентство, Орёл, аренда автобусов, аренда микроавтобусов, экскурсии, путешествия, отдых, аренда автобусов с водителем, групповые поездки, индивидуальные туры, автобусом к морю, поездки на море, турагентство, туры по России, подбор тура, туры за границу'
		}
	]
});

type HeroTab = 'tour' | 'excursion';

const heroTab = ref<HeroTab>('tour');

const heroTitle = computed(() =>
	heroTab.value === 'tour' ? 'Туры к морю из Орла' : 'Экскурсии из Орла'
);

const heroLead = computed(() =>
	heroTab.value === 'tour'
		? 'Из Орла без пересадок, с заселением в проверенные отели. Подберём тур под ваши даты и бюджет.'
		: 'Однодневные и многодневные поездки с гидом — города, термы и замки без хлопот с дорогой.'
);

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
				<Transition
					name="hero-swap"
					mode="out-in"
				>
					<div :key="heroTab">
						<h1 class="reveal typo-display">{{ heroTitle }}</h1>
						<p
							class="reveal typo-lead mt-4 max-w-[46ch] text-neutral-600"
							style="animation-delay: 90ms"
						>
							{{ heroLead }}
						</p>
					</div>
				</Transition>
			</div>

			<div
				class="reveal mt-10"
				style="animation-delay: 180ms"
			>
				<FeaturesSearchPill @update:tab="heroTab = $event" />
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
						<h2 class="typo-h2">Аренда автобусов и микроавтобусов в Орле</h2>
						<p class="typo-body max-w-[52ch] text-neutral-600">
							Микроавтобусы для небольших компаний и туристические автобусы для
							больших групп — с опытными водителями и комфортабельными салонами.
							Для свадеб, корпоративов, экскурсий и поездок на море своей
							компанией.
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
					Подбор тура: отдых в России и за границей под ваши пожелания
				</h2>
				<div class="typo-body max-w-[68ch] space-y-3 text-neutral-600">
					<p>
						Подбор тура — одна из ключевых услуг нашего туристического агентства
						в Орле. Мы работаем с проверенными туроператорами и партнёрами,
						поэтому предлагаем не только автобусные туры к морю и экскурсии, но
						и путешествия по всей России и за границу — от пляжного отдыха до
						насыщенных экскурсионных программ.
					</p>
					<p>
						Мы учтём каждую деталь: даты и продолжительность поездки, состав
						путешественников, уровень отеля, питание, развлечения и бюджет. Вам
						останется только собрать чемоданы — остальное мы возьмём на себя.
					</p>
					<p>
						Совсем скоро подбирать зарубежные туры станет ещё удобнее: мы
						подключаем онлайн-системы наших партнёров, чтобы показывать
						актуальные цены и наличие мест прямо на сайте. А уже сегодня просто
						позвоните или оставьте заявку — бесплатно подберём тур, который
						запомнится надолго!
					</p>
				</div>
			</div>
		</section>

		<FeaturesContactModal
			v-if="rentModalOpen"
			mode="question"
			context="Аренда автобуса"
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

.hero-swap-enter-active,
.hero-swap-leave-active {
	transition: opacity 0.25s ease;
}

.hero-swap-enter-from,
.hero-swap-leave-to {
	opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
	.reveal {
		opacity: 1;
		animation: none;
	}
}
</style>

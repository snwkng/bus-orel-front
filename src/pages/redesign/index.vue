<script setup lang="ts">
definePageMeta({
	layout: 'redesign'
});

useHead({
	title: 'ГалаТур — концепт редизайна',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const primaryScale = [
	{ step: 50, hex: '#FFF4F0' },
	{ step: 100, hex: '#FFE4DB' },
	{ step: 200, hex: '#FFC7B8' },
	{ step: 300, hex: '#FFA28A' },
	{ step: 400, hex: '#FF7B54' },
	{ step: 500, hex: '#FF5722' },
	{ step: 600, hex: '#EE4A12' },
	{ step: 700, hex: '#C93E0D' },
	{ step: 800, hex: '#A5330B' },
	{ step: 900, hex: '#822A0A' },
	{ step: 950, hex: '#4A1806' }
];

const secondaryScale = [
	{ step: 50, hex: '#EDF8F5' },
	{ step: 100, hex: '#D3EFE8' },
	{ step: 200, hex: '#A8DED2' },
	{ step: 300, hex: '#73C7B6' },
	{ step: 400, hex: '#44AA96' },
	{ step: 500, hex: '#228C78' },
	{ step: 600, hex: '#0F6E5F' },
	{ step: 700, hex: '#0C584C' },
	{ step: 800, hex: '#0A463D' },
	{ step: 900, hex: '#08352E' },
	{ step: 950, hex: '#04231E' }
];
</script>

<template>
	<div>
		<!-- Hero -->
		<section class="mx-auto w-full max-w-[1200px] px-6 pt-14 pb-16 md:pt-20">
			<div class="max-w-[560px]">
				<h1
					class="reveal text-4xl leading-[1.12] font-bold tracking-tight md:text-[44px]"
				>
					К морю — на нашем автобусе
				</h1>
				<p
					class="reveal mt-4 max-w-[46ch] text-lg leading-relaxed text-neutral-600"
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
				<FeaturesConceptSearchPill />
			</div>
		</section>

		<!-- Tours carousel -->
		<section class="border-t border-neutral-100 bg-neutral-50 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<FeaturesConceptCarousel
					title="Автобусные туры к морю"
					subtitle="Ближайшие даты отправления из Орла"
					link-to="/redesign/bus-tours"
					link-label="Все туры"
					base-path="/redesign/bus-tours"
					:items="conceptTours"
				/>
			</div>
		</section>

		<!-- Excursions carousel -->
		<section class="border-t border-neutral-100 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<FeaturesConceptCarousel
					title="Экскурсии из Орла"
					subtitle="Однодневные поездки по выходным"
					link-to="/redesign/excursions"
					link-label="Все экскурсии"
					base-path="/redesign/excursions"
					:items="conceptExcursions"
				/>
			</div>
		</section>

		<!-- Palette -->
		<section class="border-t border-neutral-100 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<h2 class="mb-2 text-2xl font-bold tracking-tight">Палитра</h2>
				<p class="mb-8 max-w-[60ch] text-sm text-neutral-500">
					Primary — фирменный оранжевый, работает в CTA, ценах и активных
					состояниях. Secondary — глубокий еловый teal: ссылки, вторичные
					кнопки, иконки-статусы. Не заливаем большие площади.
				</p>

				<p class="mb-3 text-sm font-semibold">Primary — оранжевый</p>
				<div
					class="mb-10 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-11"
				>
					<div
						v-for="c in primaryScale"
						:key="c.step"
					>
						<div
							class="mb-1.5 h-14 rounded-lg"
							:style="{ backgroundColor: c.hex }"
						/>
						<p class="text-xs font-semibold">{{ c.step }}</p>
						<p class="text-[11px] text-neutral-400">{{ c.hex }}</p>
					</div>
				</div>

				<p class="mb-3 text-sm font-semibold">Secondary — еловый teal</p>
				<div
					class="mb-10 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-11"
				>
					<div
						v-for="c in secondaryScale"
						:key="c.step"
					>
						<div
							class="mb-1.5 h-14 rounded-lg"
							:style="{ backgroundColor: c.hex }"
						/>
						<p class="text-xs font-semibold">{{ c.step }}</p>
						<p class="text-[11px] text-neutral-400">{{ c.hex }}</p>
					</div>
				</div>

				<!-- Buttons demo -->
				<p class="mb-3 text-sm font-semibold">Кнопки и ссылки</p>
				<div class="flex flex-wrap items-center gap-4">
					<button
						type="button"
						class="bg-primary-500 hover:bg-primary-600 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all active:scale-95"
					>
						Найти тур
					</button>
					<button
						type="button"
						class="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-900 active:scale-95"
					>
						Подробнее
					</button>
					<button
						type="button"
						class="bg-secondary-600 hover:bg-secondary-700 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all active:scale-95"
					>
						Задать вопрос
					</button>
					<a
						href="#"
						class="text-secondary-600 decoration-secondary-300 hover:text-secondary-700 text-sm font-semibold underline underline-offset-4 transition-colors"
					>
						Все экскурсии
					</a>
				</div>
			</div>
		</section>

		<!-- Typography -->
		<section class="border-t border-neutral-100 bg-neutral-50 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<h2 class="mb-8 text-2xl font-bold tracking-tight">
					Типографика — Onest
				</h2>
				<div class="max-w-[640px] space-y-6">
					<p class="text-[40px] leading-[1.12] font-bold tracking-tight">
						Экскурсии, после которых есть что рассказать
					</p>
					<p class="text-2xl font-bold tracking-tight">
						Калужские тёпы, аквапарк и древний Козельск за один день
					</p>
					<p class="text-lg leading-relaxed text-neutral-600">
						Выезжаем из Орла рано утром, чтобы успеть больше. В стоимость входит
						дорога на комфортабельном автобусе, услуги гида и входные билеты по
						программе.
					</p>
					<p class="text-sm leading-relaxed text-neutral-500">
						Мелкий текст: даты отправления уточняйте у менеджера. Группа
						формируется от 15 человек, посадка — у офиса агентства и по
						согласованию на маршруте следования.
					</p>
				</div>
			</div>
		</section>
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

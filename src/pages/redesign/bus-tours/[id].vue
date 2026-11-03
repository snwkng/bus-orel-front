<script setup lang="ts">
definePageMeta({
	layout: 'redesign'
});

useHead({
	title: 'Страница тура — концепт',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const route = useRoute();

const tour = computed(
	() => conceptTours.find((t) => t.id === route.params.id) ?? conceptTours[0]
);

const galleryImages = computed(
	() => tour.value.images ?? (tour.value.image ? [tour.value.image] : [])
);

const openDate = ref(0);

const contactMode = ref<'booking' | 'question' | null>(null);
const contactContext = computed(() =>
	openDate.value >= 0
		? `${tour.value.title} · заезд ${conceptDatesPrices[openDate.value].from}`
		: tour.value.title
);
</script>

<template>
	<div>
		<section class="mx-auto w-full max-w-[1200px] px-6 pt-8 pb-16">
			<!-- Breadcrumbs -->
			<nav class="mb-5 flex items-center gap-1.5 text-sm text-neutral-500">
				<NuxtLink
					to="/redesign"
					class="transition-colors hover:text-neutral-900"
					>Главная</NuxtLink
				>
				<Icon
					name="lucide:chevron-right"
					class="size-3.5"
				/>
				<NuxtLink
					to="/redesign/bus-tours"
					class="transition-colors hover:text-neutral-900"
					>Туры к морю</NuxtLink
				>
				<Icon
					name="lucide:chevron-right"
					class="size-3.5"
				/>
				<span class="truncate text-neutral-900">{{ tour.title }}</span>
			</nav>

			<h1 class="mb-2 max-w-[20ch] text-3xl font-bold tracking-tight">
				{{ tour.title }}
			</h1>
			<p
				class="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500"
			>
				<span class="flex items-center gap-1">
					<Icon
						name="lucide:map-pin"
						class="text-secondary-600 size-4"
					/>
					{{ tour.meta }}
				</span>
			</p>

			<!-- Gallery -->
			<FeaturesConceptGallery
				:images="galleryImages"
				:alt="tour.title"
				icon="lucide:palmtree"
			/>

			<div class="grid gap-12 lg:grid-cols-[1fr_360px]">
				<!-- Content -->
				<div class="min-w-0">
					<section class="mb-10">
						<h2 class="mb-4 text-xl font-bold tracking-tight">О туре</h2>
						<p class="max-w-[68ch] leading-relaxed text-neutral-600">
							Едем из Орла на нашем автобусе без пересадок и ночных ожиданий на
							вокзалах. Заселяем в проверенный отель, с которым работаем не
							первый сезон: знаем номера, питание и хозяев лично. В стоимость
							уже включены дорога, проживание и сопровождение — вы просто
							выбираете даты.
						</p>
					</section>

					<section class="mb-10">
						<h2 class="mb-4 text-xl font-bold tracking-tight">
							Программа по дням
						</h2>
						<div class="space-y-0">
							<div
								v-for="step in conceptTourProgram"
								:key="step.day"
								class="relative flex gap-5 pb-6 last:pb-0"
							>
								<div class="flex flex-col items-center">
									<span
										class="bg-secondary-600 z-10 flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
									>
										{{ step.day }}
									</span>
									<span class="bg-secondary-200 w-px flex-1 last:hidden" />
								</div>
								<div class="pt-1.5 pb-1">
									<p class="font-semibold">{{ step.title }}</p>
									<p
										class="mt-1 max-w-[64ch] text-sm leading-relaxed text-neutral-600"
									>
										{{ step.text }}
									</p>
								</div>
							</div>
						</div>
					</section>

					<section class="mb-10 grid gap-6 sm:grid-cols-2">
						<div class="rounded-2xl bg-neutral-50 p-5">
							<h3 class="mb-3 font-semibold">В стоимость включено</h3>
							<ul class="space-y-2.5 text-sm text-neutral-600">
								<li
									v-for="item in conceptIncluded"
									:key="item"
									class="flex gap-2.5"
								>
									<Icon
										name="lucide:check"
										class="text-secondary-600 mt-0.5 size-4 shrink-0"
									/>
									{{ item }}
								</li>
							</ul>
						</div>
						<div class="rounded-2xl bg-neutral-50 p-5">
							<h3 class="mb-3 font-semibold">Оплачивается отдельно</h3>
							<ul class="space-y-2.5 text-sm text-neutral-600">
								<li
									v-for="item in conceptNotIncluded"
									:key="item"
									class="flex gap-2.5"
								>
									<Icon
										name="lucide:minus"
										class="mt-0.5 size-4 shrink-0 text-neutral-400"
									/>
									{{ item }}
								</li>
							</ul>
						</div>
					</section>

					<section class="mb-10">
						<h2 class="mb-4 text-xl font-bold tracking-tight">Даты и цены</h2>
						<div class="overflow-hidden rounded-2xl border border-neutral-200">
							<div
								v-for="(row, i) in conceptDatesPrices"
								:key="row.from"
								class="flex items-center justify-between gap-4 px-5 py-4 transition-colors"
								:class="[
									i % 2 === 0 ? 'bg-white' : 'bg-neutral-50',
									{ 'ring-secondary-600 ring-2 ring-inset': openDate === i }
								]"
							>
								<div>
									<p class="font-semibold">{{ row.from }}</p>
									<p class="text-sm text-neutral-500">
										{{ row.nights }} ночей · осталось {{ row.left }} мест
									</p>
								</div>
								<div class="flex items-center gap-4">
									<p class="font-bold">{{ row.price }} ₽</p>
									<button
										type="button"
										class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all active:scale-95"
										:class="
											openDate === i
												? 'bg-secondary-600 text-white'
												: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
										"
										@click="openDate = openDate === i ? -1 : i"
									>
										{{ openDate === i ? 'Выбрано' : 'Выбрать' }}
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>

				<!-- Booking card -->
				<aside class="lg:sticky lg:top-24 lg:self-start">
					<div
						class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
					>
						<p class="mb-1 text-sm text-neutral-500">от</p>
						<p class="mb-4 text-3xl font-bold tracking-tight">
							{{ tour.price }} ₽
							<span class="text-base font-medium text-neutral-500"
								>/ человек</span
							>
						</p>
						<div class="mb-4 rounded-xl border border-neutral-200 px-4 py-3">
							<p class="text-xs font-semibold text-neutral-500">Дата заезда</p>
							<p class="text-sm font-medium">
								{{
									openDate >= 0
										? conceptDatesPrices[openDate].from
										: 'Выберите дату в таблице'
								}}
							</p>
						</div>
						<button
							type="button"
							class="bg-primary-500 hover:bg-primary-600 mb-2.5 w-full rounded-full py-3 text-sm font-semibold text-white transition-all active:scale-95"
							@click="contactMode = 'booking'"
						>
							Забронировать
						</button>
						<button
							type="button"
							class="bg-secondary-600 hover:bg-secondary-700 w-full rounded-full py-3 text-sm font-semibold text-white transition-all active:scale-95"
							@click="contactMode = 'question'"
						>
							Задать вопрос
						</button>
						<p
							class="mt-4 flex items-start gap-2 text-xs leading-relaxed text-neutral-400"
						>
							<Icon
								name="lucide:shield-check"
								class="text-secondary-500 mt-0.5 size-3.5 shrink-0"
							/>
							Бронь бесплатна и ни к чему не обязывает: менеджер перезвонит,
							ответит на вопросы и зафиксирует цену.
						</p>
					</div>
				</aside>
			</div>
		</section>

		<!-- Similar -->
		<section class="border-t border-neutral-100 bg-neutral-50 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<FeaturesConceptCarousel
					title="Похожие туры"
					link-to="/redesign/bus-tours"
					link-label="Все туры"
					base-path="/redesign/bus-tours"
					:items="conceptTours.filter((t) => t.id !== tour.id)"
				/>
			</div>
		</section>

		<FeaturesContactModal
			v-if="contactMode"
			:mode="contactMode"
			:context="contactContext"
			@close="contactMode = null"
		/>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'redesign'
});

useHead({
	title: 'Страница экскурсии — концепт',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const route = useRoute();

const excursion = computed(
	() =>
		conceptExcursions.find((e) => e.id === route.params.id) ??
		conceptExcursions[0]
);

const galleryImages = computed(
	() =>
		excursion.value.images ??
		(excursion.value.image ? [excursion.value.image] : [])
);

const nextDates = ['8 ноября', '15 ноября', '22 ноября', '29 ноября'];
const activeDate = ref(0);

const contactMode = ref<'booking' | 'question' | null>(null);
const contactContext = computed(
	() => `${excursion.value.title} · ${nextDates[activeDate.value]}`
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
					to="/redesign/excursions"
					class="transition-colors hover:text-neutral-900"
					>Экскурсии</NuxtLink
				>
				<Icon
					name="lucide:chevron-right"
					class="size-3.5"
				/>
				<span class="truncate text-neutral-900">{{ excursion.title }}</span>
			</nav>

			<h1 class="mb-2 max-w-[24ch] text-3xl font-bold tracking-tight">
				{{ excursion.title }}
			</h1>
			<p
				class="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-500"
			>
				<span class="flex items-center gap-1">
					<Icon
						name="lucide:clock"
						class="text-secondary-600 size-4"
					/>
					{{ excursion.meta }}
				</span>
				<span class="flex items-center gap-1">
					<Icon
						name="lucide:bus"
						class="text-secondary-600 size-4"
					/>
					Выезд из Орла
				</span>
			</p>

			<!-- Gallery -->
			<FeaturesConceptGallery
				:images="galleryImages"
				:alt="excursion.title"
				icon="lucide:landmark"
			/>

			<div class="grid gap-12 lg:grid-cols-[1fr_360px]">
				<!-- Content -->
				<div class="min-w-0">
					<section class="mb-10">
						<h2 class="mb-4 text-xl font-bold tracking-tight">Об экскурсии</h2>
						<p class="max-w-[68ch] leading-relaxed text-neutral-600">
							Однодневная поездка без ночёвок и долгих сборов: утром выезжаем из
							Орла, вечером возвращаемся. В дороге — туристический автобус с
							кондиционером, на месте — насыщенная программа с гидом, обед и
							время на самостоятельные прогулки. Подходит для поездки всей
							семьёй, в том числе с детьми.
						</p>
					</section>

					<section class="mb-10">
						<h2 class="mb-4 text-xl font-bold tracking-tight">Программа дня</h2>
						<div class="space-y-0">
							<div
								v-for="(step, i) in conceptExcursionProgram"
								:key="step.time"
								class="relative flex gap-5 pb-6 last:pb-0"
							>
								<div class="flex w-14 shrink-0 flex-col items-center">
									<span
										class="bg-secondary-50 text-secondary-700 rounded-full px-2.5 py-1 text-xs font-bold"
									>
										{{ step.time }}
									</span>
									<span
										v-if="i < conceptExcursionProgram.length - 1"
										class="bg-secondary-200 mt-1 w-px flex-1"
									/>
								</div>
								<div class="pb-1">
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
								<li class="flex gap-2.5">
									<Icon
										name="lucide:check"
										class="text-secondary-600 mt-0.5 size-4 shrink-0"
									/>
									Проезд на туристическом автобусе
								</li>
								<li class="flex gap-2.5">
									<Icon
										name="lucide:check"
										class="text-secondary-600 mt-0.5 size-4 shrink-0"
									/>
									Обзорная экскурсия с лицензированным гидом
								</li>
								<li class="flex gap-2.5">
									<Icon
										name="lucide:check"
										class="text-secondary-600 mt-0.5 size-4 shrink-0"
									/>
									Обед по программе
								</li>
								<li class="flex gap-2.5">
									<Icon
										name="lucide:check"
										class="text-secondary-600 mt-0.5 size-4 shrink-0"
									/>
									Входные билеты по программе
								</li>
							</ul>
						</div>
						<div class="rounded-2xl bg-neutral-50 p-5">
							<h3 class="mb-3 font-semibold">Взять с собой</h3>
							<ul class="space-y-2.5 text-sm text-neutral-600">
								<li class="flex gap-2.5">
									<Icon
										name="lucide:backpack"
										class="text-secondary-500 mt-0.5 size-4 shrink-0"
									/>
									Купальник и полотенце для аквапарка
								</li>
								<li class="flex gap-2.5">
									<Icon
										name="lucide:backpack"
										class="text-secondary-500 mt-0.5 size-4 shrink-0"
									/>
									Удобная обувь для прогулок
								</li>
								<li class="flex gap-2.5">
									<Icon
										name="lucide:backpack"
										class="text-secondary-500 mt-0.5 size-4 shrink-0"
									/>
									Паспорт (для детей — свидетельство)
								</li>
							</ul>
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
							{{ excursion.price }} ₽
							<span class="text-base font-medium text-neutral-500"
								>/ человек</span
							>
						</p>
						<p class="mb-2 text-xs font-semibold text-neutral-500">
							Ближайшие даты
						</p>
						<div class="mb-4 grid grid-cols-2 gap-2">
							<button
								v-for="(d, i) in nextDates"
								:key="d"
								type="button"
								class="rounded-xl border px-3 py-2 text-sm font-medium transition-all active:scale-95"
								:class="
									activeDate === i
										? 'border-secondary-600 bg-secondary-50 text-secondary-700'
										: 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
								"
								@click="activeDate = i"
							>
								{{ d }}
							</button>
						</div>
						<button
							type="button"
							class="bg-primary-500 hover:bg-primary-600 mb-2.5 w-full rounded-full py-3 text-sm font-semibold text-white transition-all active:scale-95"
							@click="contactMode = 'booking'"
						>
							Забронировать место
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
							Группа формируется от 15 человек. Если наберётся меньше —
							предупредим за 2 дня и вернём предоплату.
						</p>
					</div>
				</aside>
			</div>
		</section>

		<!-- Similar -->
		<section class="border-t border-neutral-100 bg-neutral-50 py-14">
			<div class="mx-auto w-full max-w-[1200px] px-6">
				<FeaturesConceptCarousel
					title="Другие экскурсии"
					link-to="/redesign/excursions"
					link-label="Все экскурсии"
					base-path="/redesign/excursions"
					:items="conceptExcursions.filter((e) => e.id !== excursion.id)"
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

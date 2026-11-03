<script setup lang="ts">
definePageMeta({
	layout: 'redesign'
});

useHead({
	title: 'Автобусные туры к морю — концепт',
	meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const seaOptions = ['Все моря', 'Чёрное', 'Азовское'];
const activeSea = ref(0);

const monthOptions = ['Любой месяц', 'Июль', 'Август', 'Сентябрь'];
const activeMonth = ref(0);

const durationOptions = [
	'Любая длительность',
	'6–7 ночей',
	'8–10 ночей',
	'11+ ночей'
];
const activeDuration = ref(0);

const sortOptions = ['Сначала дешёвые', 'По дате', 'По популярности'];
const activeSort = ref(0);

const visibleCount = ref(6);
const visibleTours = computed(() => conceptTours.slice(0, visibleCount.value));
</script>

<template>
	<div>
		<section class="mx-auto w-full max-w-[1200px] px-6 pt-10 pb-16">
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
				<span class="text-neutral-900">Туры к морю</span>
			</nav>

			<div class="mb-8">
				<h1 class="text-3xl font-bold tracking-tight md:text-4xl">
					Автобусные туры к морю
				</h1>
				<p class="mt-2 text-neutral-500">
					{{ conceptTours.length }} направлений · выезд из Орла на наших
					автобусах
				</p>
			</div>

			<!-- Filters -->
			<div
				class="mb-10 space-y-4 rounded-2xl border border-neutral-200 bg-white p-5"
			>
				<div class="flex flex-wrap items-center gap-x-6 gap-y-4">
					<div>
						<p class="mb-2 text-xs font-semibold text-neutral-500">Море</p>
						<div class="flex flex-wrap gap-2">
							<button
								v-for="(opt, i) in seaOptions"
								:key="opt"
								type="button"
								class="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all active:scale-95"
								:class="
									activeSea === i
										? 'border-secondary-600 bg-secondary-600 text-white'
										: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
								"
								@click="activeSea = i"
							>
								{{ opt }}
							</button>
						</div>
					</div>
					<div>
						<p class="mb-2 text-xs font-semibold text-neutral-500">Месяц</p>
						<div class="flex flex-wrap gap-2">
							<button
								v-for="(opt, i) in monthOptions"
								:key="opt"
								type="button"
								class="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all active:scale-95"
								:class="
									activeMonth === i
										? 'border-secondary-600 bg-secondary-600 text-white'
										: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
								"
								@click="activeMonth = i"
							>
								{{ opt }}
							</button>
						</div>
					</div>
					<div>
						<p class="mb-2 text-xs font-semibold text-neutral-500">
							Длительность
						</p>
						<div class="flex flex-wrap gap-2">
							<button
								v-for="(opt, i) in durationOptions"
								:key="opt"
								type="button"
								class="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all active:scale-95"
								:class="
									activeDuration === i
										? 'border-secondary-600 bg-secondary-600 text-white'
										: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
								"
								@click="activeDuration = i"
							>
								{{ opt }}
							</button>
						</div>
					</div>
				</div>
				<div
					class="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4"
				>
					<div class="flex items-center gap-2 text-sm">
						<span class="text-neutral-500">Сортировка:</span>
						<button
							v-for="(opt, i) in sortOptions"
							:key="opt"
							type="button"
							class="font-medium transition-colors"
							:class="
								activeSort === i
									? 'text-primary-600'
									: 'text-neutral-500 hover:text-neutral-900'
							"
							@click="activeSort = i"
						>
							{{ opt }}
						</button>
					</div>
					<button
						type="button"
						class="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-600"
					>
						Сбросить фильтры
					</button>
				</div>
			</div>

			<!-- Grid -->
			<div
				class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
			>
				<FeaturesConceptCard
					v-for="tour in visibleTours"
					:key="tour.id"
					:item="tour"
					:to="`/redesign/bus-tours/${tour.id}`"
				/>
			</div>

			<div
				v-if="visibleCount < conceptTours.length"
				class="mt-12 text-center"
			>
				<button
					type="button"
					class="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-semibold transition-all hover:border-neutral-900 active:scale-95"
					@click="visibleCount = conceptTours.length"
				>
					Показать ещё {{ conceptTours.length - visibleCount }}
				</button>
				<p class="mt-3 text-xs text-neutral-400">
					Показано {{ visibleTours.length }} из {{ conceptTours.length }}
				</p>
			</div>
		</section>
	</div>
</template>

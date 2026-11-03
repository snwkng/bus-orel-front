<script setup lang="ts">
const { y: scrollY } = useScroll(globalThis.window);
const scrolled = computed(() => scrollY.value > 8);

const route = useRoute();

const navLinks = [
	{ label: 'Туры к морю', to: '/bus-tours' },
	{ label: 'Экскурсии', to: '/excursions' },
	{ label: 'Аренда автобуса', to: { name: 'index', hash: '#bus-rent' } },
	{ label: 'О компании', to: '/about-us' }
];

const isActive = (to: string | object): boolean =>
	typeof to === 'string' && route.path.startsWith(to);

const menuOpen = ref(false);
watch(
	() => route.fullPath,
	() => {
		menuOpen.value = false;
	}
);

const contactOpen = ref(false);
</script>

<template>
	<header
		class="sticky top-0 z-20 border-b bg-white/95 backdrop-blur transition-all duration-300"
		:class="
			scrolled
				? 'border-neutral-200 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
				: 'border-transparent'
		"
	>
		<div
			class="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6"
		>
			<NuxtLink
				:to="{ name: 'index' }"
				class="group flex items-center gap-2"
			>
				<span
					class="bg-primary-500 flex size-8 items-center justify-center rounded-lg text-lg font-bold text-white transition-transform duration-300 group-hover:rotate-6"
					>Г</span
				>
				<span class="text-lg font-semibold tracking-tight">ГалаТур</span>
			</NuxtLink>
			<nav class="hidden items-center gap-7 lg:flex">
				<NuxtLink
					v-for="link in navLinks"
					:key="link.label"
					:to="link.to"
					class="after:bg-primary-500 typo-small relative font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300 hover:text-neutral-900"
					:class="
						isActive(link.to)
							? 'text-neutral-900 after:w-full'
							: 'text-neutral-600 after:w-0 hover:after:w-full'
					"
				>
					{{ link.label }}
				</NuxtLink>
			</nav>
			<div class="flex items-center gap-4">
				<a
					href="tel:+74862780958"
					class="hover:text-primary-600 typo-small hidden items-center gap-2 font-semibold text-neutral-900 transition-colors md:flex"
				>
					<Icon
						name="lucide:phone"
						class="text-secondary-600 size-4"
					/>
					+7 (4862) 78-09-58
				</a>
				<button
					type="button"
					class="bg-primary-500 hover:bg-primary-600 typo-button hidden rounded-full px-4 py-2 text-white transition-all active:scale-95 sm:block"
					@click="contactOpen = true"
				>
					Подобрать тур
				</button>
				<button
					type="button"
					class="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 lg:hidden"
					aria-label="Меню"
					:aria-expanded="menuOpen"
					@click="menuOpen = !menuOpen"
				>
					<Icon
						:name="menuOpen ? 'lucide:x' : 'lucide:menu'"
						class="size-5"
					/>
				</button>
			</div>
		</div>

		<!-- Mobile menu -->
		<nav
			v-if="menuOpen"
			class="border-t border-neutral-100 bg-white lg:hidden"
		>
			<div class="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-4">
				<NuxtLink
					v-for="link in navLinks"
					:key="link.label"
					:to="link.to"
					class="typo-small border-b border-neutral-100 py-3 font-medium text-neutral-700 transition-colors last:border-0 hover:text-neutral-900"
					:class="{ 'text-neutral-900': isActive(link.to) }"
				>
					{{ link.label }}
				</NuxtLink>
				<a
					href="tel:+74862780958"
					class="typo-small flex items-center gap-2 py-3 font-semibold text-neutral-900"
				>
					<Icon
						name="lucide:phone"
						class="text-secondary-600 size-4"
					/>
					+7 (4862) 78-09-58
				</a>
				<button
					type="button"
					class="bg-primary-500 hover:bg-primary-600 typo-button mb-2 rounded-full px-4 py-2.5 text-white transition-all active:scale-95"
					@click="((contactOpen = true), (menuOpen = false))"
				>
					Подобрать тур
				</button>
			</div>
		</nav>

		<FeaturesContactModal
			v-if="contactOpen"
			mode="question"
			@close="contactOpen = false"
		/>
	</header>
</template>

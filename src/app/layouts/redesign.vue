<script setup lang="ts">
const { y: scrollY } = useScroll(globalThis.window);
const scrolled = computed(() => scrollY.value > 8);

const route = useRoute();

const navLinks = [
	{ label: 'Туры к морю', to: '/redesign/bus-tours' },
	{ label: 'Экскурсии', to: '/redesign/excursions' },
	{ label: 'Аренда автобуса', to: '/redesign#rent' },
	{ label: 'О компании', to: '/redesign#about' }
];

const isActive = (to: string) => !to.includes('#') && route.path.startsWith(to);

const contactOpen = ref(false);
</script>

<template>
	<div
		class="flex min-h-screen flex-col scroll-smooth bg-white font-sans text-neutral-900"
	>
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
					to="/redesign"
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
						class="after:bg-primary-500 relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300 hover:text-neutral-900"
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
						href="tel:+74862000000"
						class="hover:text-primary-600 hidden items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors md:flex"
					>
						<Icon
							name="lucide:phone"
							class="text-secondary-600 size-4"
						/>
						+7 (4862) 00-00-00
					</a>
					<button
						type="button"
						class="bg-primary-500 hover:bg-primary-600 hidden rounded-full px-4 py-2 text-sm font-semibold text-white transition-all active:scale-95 sm:block"
						@click="contactOpen = true"
					>
						Подобрать тур
					</button>
					<button
						type="button"
						class="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 lg:hidden"
						aria-label="Меню"
					>
						<Icon
							name="lucide:menu"
							class="size-5"
						/>
					</button>
				</div>
			</div>
		</header>

		<main class="flex-1">
			<slot />
		</main>

		<footer class="border-t border-neutral-100 bg-neutral-50">
			<div
				class="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4"
			>
				<div>
					<div class="mb-4 flex items-center gap-2">
						<span
							class="bg-primary-500 flex size-8 items-center justify-center rounded-lg text-lg font-bold text-white"
							>Г</span
						>
						<span class="text-lg font-semibold tracking-tight">ГалаТур</span>
					</div>
					<p class="max-w-[28ch] text-sm leading-relaxed text-neutral-500">
						Турагентство из Орла. Возим к морю на своих автобусах с 2010 года.
					</p>
				</div>
				<div>
					<p class="mb-3 text-sm font-semibold">Направления</p>
					<ul class="space-y-2 text-sm text-neutral-500">
						<li>
							<NuxtLink
								to="/redesign/bus-tours"
								class="transition-colors hover:text-neutral-900"
								>Туры к морю</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/redesign/excursions"
								class="transition-colors hover:text-neutral-900"
								>Экскурсии</NuxtLink
							>
						</li>
						<li>
							<a
								href="#"
								class="transition-colors hover:text-neutral-900"
								>Аренда автобуса</a
							>
						</li>
					</ul>
				</div>
				<div>
					<p class="mb-3 text-sm font-semibold">Компания</p>
					<ul class="space-y-2 text-sm text-neutral-500">
						<li>
							<a
								href="#"
								class="transition-colors hover:text-neutral-900"
								>О нас</a
							>
						</li>
						<li>
							<a
								href="#"
								class="transition-colors hover:text-neutral-900"
								>Памятка туриста</a
							>
						</li>
						<li>
							<a
								href="#"
								class="transition-colors hover:text-neutral-900"
								>Документы</a
							>
						</li>
					</ul>
				</div>
				<div>
					<p class="mb-3 text-sm font-semibold">Контакты</p>
					<ul class="space-y-2 text-sm text-neutral-500">
						<li>
							<a
								href="tel:+74862000000"
								class="hover:text-primary-600 font-semibold text-neutral-900 transition-colors"
								>+7 (4862) 00-00-00</a
							>
						</li>
						<li>г. Орёл, ул. Примерная, 1</li>
						<li>Ежедневно с 9:00 до 20:00</li>
					</ul>
				</div>
			</div>
			<div class="border-t border-neutral-200/60">
				<div
					class="mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-6 py-5 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between"
				>
					<span>© 2026 ГалаТур, Орёл</span>
					<span>Концепт редизайна · данные демонстрационные</span>
				</div>
			</div>
		</footer>

		<FeaturesContactModal
			v-if="contactOpen"
			mode="question"
			@close="contactOpen = false"
		/>
	</div>
</template>

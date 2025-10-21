<script setup lang="ts">
onMounted(() => {
	isDesktop.value = !$viewport.isLessThan('lg')
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

const { $viewport } = useNuxtApp()

watch($viewport.breakpoint, () => {
	isDesktop.value = !$viewport.isLessThan('lg')
})

const route = useRoute();

const toggle = ref(false);
const scroll = ref(false);
const isDesktop = ref(false);

const handleScroll = () => {
	scroll.value = window.scrollY > 400;
};

const showShadow = computed(() => scroll.value && route.name !== 'bus-tours' && route.name !== 'excursions')

const close = (closeNav: boolean) => {
	if ($viewport.isLessThan('sm')) {
		document.body.classList.remove('lock');
	}
	toggle.value = closeNav;
};

const toggleMenu = () => {
	toggle.value = !toggle.value
	if (toggle.value && $viewport.isLessThan('sm')) {
		document.body.classList.add('lock');
	} else if ($viewport.isLessThan('sm')) {
		document.body.classList.remove('lock');
	}
}
</script>

<template>
	<header
		:class="[
			'font-large fixed z-20 h-14 w-full bg-deep-blue dark:bg-gray-800',
			{ 'shadow-lg': showShadow },
		]"
	>
		<div
			class="flex h-14 w-full items-center justify-between bg-transparent max-w-container"
		>
			<div class="text-white">
				<router-link :to="{ name: 'home' }">
					<strong class="text-deep-orange">Г</strong>алатур
				</router-link>
			</div>
			<div v-if="scroll && isDesktop">
				<FeaturesMainBtnGroup v-if="route.name === 'home'" />
			</div>
			<div class="flex items-center gap-x-3">
				<SharedUiFormsThemeSwitcher />
				<div class="relative">
					<button
						type="button"
						name="menu"
						class="btn-hover"
						@click="toggleMenu"
					>
						<i-menu
							filled
							:font-controlled="false"
							class="h-6 w-6 fill-white"
							alt="menu"
						/>
					</button>
					<Transition name="dropdown-fade">
						<WidgetsNavbar
							v-if="toggle"
							@close-nav="close"
						/>
					</Transition>
				</div>
			</div>
		</div>
	</header>
</template>
<style lang="scss" scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
	transition: opacity 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
	opacity: 0;
}
</style>

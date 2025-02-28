<script setup lang="ts">
export interface Props {
	isSingle?: boolean;
}

withDefaults(defineProps<Props>(), {
	isSingle: false
});

onMounted(() => {
	mediaQuery.value = window.matchMedia('(min-width: 992px)');
	mediaQuery.value.addEventListener('change', onChange);
	onChange();
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
	mediaQuery.value?.removeEventListener('change', onChange);
});

const route = useRoute();

const toggle = ref(false);
const scroll = ref(false);
const mediaQuery = ref<MediaQueryList>();
const isDesktop = ref(false);

const handleScroll = () => {
	scroll.value = window.scrollY > 400;
};

const showShadow = computed(() => scroll.value && route.name !== 'bus-tours' && route.name !== 'excursions')

const onChange = () => {
	isDesktop.value = mediaQuery.value?.matches ?? false;
};
const close = (closeNav: boolean) => {
	toggle.value = closeNav;
};
</script>

<template>
	<header
		:class="[
			'font-large fixed z-20 h-14 w-full bg-deep-blue dark:bg-gray-800',
			{ 'shadow-lg': showShadow },
		]"
	>
		<div
			:class="[
				'px-base mx-auto flex h-14 w-full items-center justify-between bg-transparent',
				{ 'xl:w-[1280px]': isSingle },
			]"
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
						class="btn-hover"
						@click="toggle = !toggle"
					>
						<i-menu
							filled
							:font-controlled="false"
							class="h-6 w-6 fill-white"
							alt="menu"
						/>
					</button>
					<Transition name="dropdown-fade">
						<FeaturesNavbar
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

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const target = useTemplateRef('target');

onClickOutside(target, () => close());

onMounted(() => {
	globalThis.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	globalThis.removeEventListener('scroll', handleScroll);
});

const { $viewport } = useNuxtApp();

const isDesktop = computed(() => $viewport.isGreaterThan('md'));

const route = useRoute();

const toggle = ref(false);
const scroll = ref(false);

const handleScroll = () => {
	scroll.value = globalThis.scrollY > 400;
};

const showShadow = computed(
	() =>
		scroll.value && route.name !== 'bus-tours' && route.name !== 'excursions'
);

const close = () => {
	if ($viewport.isLessThan('sm')) {
		document.body.classList.remove('lock');
	}
	toggle.value = false;
};

const toggleMenu = () => {
	toggle.value = !toggle.value;
	if (toggle.value && $viewport.isLessThan('sm')) {
		document.body.classList.add('lock');
	} else if ($viewport.isLessThan('sm')) {
		document.body.classList.remove('lock');
	}
};
</script>

<template>
	<header
		:class="[
			'font-large fixed z-20 h-14 w-full bg-secondary-500 dark:bg-gray-800',
			{ 'shadow-lg': showShadow }
		]"
	>
		<div
			class="max-w-container flex h-14 w-full items-center justify-between bg-transparent"
		>
			<div class="text-white">
				<NuxtLink :to="{ name: 'index' }">
					<strong class="text-primary-500">Г</strong>алатур
				</NuxtLink>
			</div>
			<div v-if="scroll && isDesktop">
				<FeaturesMainBtnGroup v-if="route.name === 'index'" />
			</div>
			<div class="flex items-center gap-x-3">
				<SharedFormsThemeSwitcher />
				<div
					ref="target"
					class="relative"
				>
					<button
						type="button"
						name="menu"
						class="btn-hover"
						@click="toggleMenu"
					>
						<SvgoIcon
							name="menu"
							filled
							:font-controlled="false"
							class="h-6 w-6 fill-white"
							alt="menu"
						/>
					</button>
					<Transition
						:name="
							$viewport.isLessThan('sm')
								? 'dropdown-translateY'
								: 'dropdown-fade'
						"
					>
						<WidgetsTheNavbar
							v-show="toggle"
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

.dropdown-translateY-enter-active,
.dropdown-translateY-leave-active {
	transform: translateY(0);
	transition: all 0.2s ease;
}

.dropdown-translateY-enter-from,
.dropdown-translateY-leave-to {
	transform: translateY(1000px);
}
</style>

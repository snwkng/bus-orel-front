<script setup lang="ts">
import TheNavbar from '@/features/navbar';
import MainBtnGroup from '@/features/mainBtnGroup/ui/MainBtnGroup.vue';

export interface Props {
	isSingle?: boolean;
}

withDefaults(defineProps<Props>(), {
	isSingle: false
});

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

const route = useRoute();

const toggle = ref(false);
const scroll = ref(false);

const handleScroll = () => {
	scroll.value = window.scrollY > 400;
};
const close = (closeNav: boolean) => {
	toggle.value = closeNav;
};
</script>

<template>
	<header
		:class="[
			'font-large fixed z-20 h-14 w-full bg-deep-blue',
			{ 'shadow-lg': scroll }
		]"
	>
		<div
			:class="[
				'px-base mx-auto flex h-14 w-full items-center justify-between bg-transparent',
				{ 'xl:w-[1280px]': isSingle }
			]"
		>
			<div class="text-white">
				<router-link :to="{ name: 'home' }">
					<strong class="text-deep-orange">G</strong>alatour
				</router-link>
			</div>
			<div v-if="scroll">
				<main-btn-group v-if="route.name === 'home'" />
			</div>
			<div class="relative">
				<button type="button" class="btn-hover" @click="toggle = !toggle">
					<i-menu
						filled
						:font-controlled="false"
						class="h-6 w-6 fill-white"
						alt="menu"
					/>
				</button>
				<Transition name="dropdown-fade">
					<the-navbar v-if="toggle" @close-nav="close" />
				</Transition>
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

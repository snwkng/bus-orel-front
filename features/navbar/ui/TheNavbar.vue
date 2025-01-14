<script setup>
const emit = defineEmits(['closeNav']);
const route = useRoute();
const close = () => {
	emit('closeNav', false);
};
watch(
	() => route.name,
	() => {
		close();
	}
);
</script>

<template>
	<nav
		v-click-away="close"
		class="absolute right-0 top-10 w-max sm:w-80 rounded-xl bg-white p-6 shadow-lg"
	>
		<ul class="list-none text-base">
			<li>
				<RouterLink to="/bus-tours" class="list-item">
					Автобусные туры к морю
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/excursions" class="list-item">
					Экскурсионные туры
				</RouterLink>
			</li>
			<li>
				<RouterLink
					:to="{ name: 'home', hash: '#tour-selection' }"
					class="list-item"
				>
					Подбор тура
				</RouterLink>
			</li>
			<li>
				<RouterLink :to="{ hash: '#contacts' }" class="list-item">
					Контакты
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

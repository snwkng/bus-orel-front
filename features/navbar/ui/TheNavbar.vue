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
		class="absolute right-0 top-10 w-80 rounded-xl bg-white p-6 shadow-lg"
	>
		<ul class="list-none text-base">
			<li>
				<router-link to="/bus-tours" class="list-item">
					Автобусные туры к морю
				</router-link>
			</li>
			<li>
				<router-link to="/excursions" class="list-item">
					Экскурсионные туры
				</router-link>
			</li>
			<li>
				<router-link
					:to="{ name: 'home', hash: '#tour-selection' }"
					class="list-item"
				>
					Подбор тура
				</router-link>
			</li>
			<li>
				<router-link :to="{ hash: '#contacts' }" class="list-item">
					Контакты
				</router-link>
			</li>
		</ul>
	</nav>
</template>

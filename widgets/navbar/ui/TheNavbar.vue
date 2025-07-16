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
		class="absolute right-0 top-10 w-max rounded-xl bg-white p-6 shadow-lg dark:bg-gray-700 dark:text-slate-300 sm:w-80"
		itemscope
		itemtype="https://schema.org/SiteNavigationElement"
	>
		<ul
			class="list-none text-base"
			itemscope
			itemtype="https://schema.org/ItemList"
		>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<RouterLink
					to="/bus-tours"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Автобусные туры к морю</span>
				</RouterLink>
				<meta
					itemprop="position"
					content="1"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<RouterLink
					to="/excursions"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Экскурсионные туры</span>
				</RouterLink>
				<meta
					itemprop="position"
					content="2"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<RouterLink
					:to="{ name: 'home', hash: '#tour-selection' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Подбор тура</span>
				</RouterLink>
				<meta
					itemprop="position"
					content="3"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<RouterLink
					:to="{ hash: '#contacts' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Контакты</span>
				</RouterLink>
				<meta
					itemprop="position"
					content="4"
				>
			</li>
		</ul>
	</nav>
</template>

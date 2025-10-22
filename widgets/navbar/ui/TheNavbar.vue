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

watch(
	() => route.hash,
	() => {
		close();
	}
);
</script>

<template>
	<nav
		v-click-away="close"
		class="fixed left-0 top-0 h-full w-full overflow-hidden bg-white p-6 shadow-lg dark:bg-gray-700 dark:text-slate-300 sm:absolute sm:left-auto sm:right-0 sm:top-10 sm:h-max sm:w-80 sm:rounded-xl"
		itemscope
		itemtype="https://schema.org/SiteNavigationElement"
	>
		<button
			type="button"
			class="flex absolute right-2 top-2 cursor-pointer justify-end rounded-full p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:text-gray-100 sm:hidden"
			aria-label="Закрыть меню"
			@click="close"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
		<ul
			class="list-none text-base mt-5 sm:mt-0"
			itemscope
			itemtype="https://schema.org/ItemList"
		>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					to="/bus-tours"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Автобусные туры к морю</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="1"
				/>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					to="/excursions"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Экскурсионные туры</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="2"
				/>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					:to="{ name: 'home', hash: '#tour-selection' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Подбор тура</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="3"
				/>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					:to="{ name: 'home', hash: '#bus-rent' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Аренда автобуса</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="4"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					:to="{ hash: '#contacts' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Контакты</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="5"
				>
			</li>
		</ul>
	</nav>
</template>

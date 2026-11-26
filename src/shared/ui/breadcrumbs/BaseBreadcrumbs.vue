<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface IBreadcrumbItem {
	label: string;
	to?: RouteLocationRaw;
}

const props = defineProps<{
	items: IBreadcrumbItem[];
}>();

const { url: siteUrl } = useSiteConfig();
const router = useRouter();

useJsonLd(
	computed(() => ({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: props.items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			...(item.to ? { item: `${siteUrl}${router.resolve(item.to).href}` } : {})
		}))
	}))
);
</script>

<template>
	<nav
		class="typo-small mb-5 flex items-center gap-1.5 text-neutral-500"
		aria-label="Хлебные крошки"
	>
		<template
			v-for="(item, index) in items"
			:key="index"
		>
			<Icon
				v-if="index > 0"
				name="lucide:chevron-right"
				class="size-3.5 shrink-0"
			/>
			<NuxtLink
				v-if="item.to"
				:to="item.to"
				class="shrink-0 transition-colors hover:text-neutral-900"
				>{{ item.label }}</NuxtLink
			>
			<span
				v-else
				class="truncate text-neutral-900"
				>{{ item.label }}</span
			>
		</template>
	</nav>
</template>

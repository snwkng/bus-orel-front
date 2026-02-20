<script setup lang="ts">
interface IProps {
	text?: string;
}

defineProps<IProps>();
</script>
<template>
	<div class="dark:text-slate-200">
		<span>
			{{ text || 'Нет данных' }}, уточните информацию по телефону указанному в
			<NuxtLink
				:to="{ hash: '#contacts' }"
				class="base-link dark:text-secondary-300 dark:hover:text-secondary-500"
			>
				контактах
			</NuxtLink>
			.
		</span>
		<span>
			Или напишите нам в сообществе в
			<a
				href="https://vk.com/gtorel"
				rel="noopener noreferrer"
				class="base-link cursor-pointer dark:text-secondary-300 dark:hover:text-secondary-500"
				target="_blank"
				aria-label="vk"
			>
				VK
			</a>
		</span>
	</div>
</template>

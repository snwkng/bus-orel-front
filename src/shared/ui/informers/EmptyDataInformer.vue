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
				class="base-link"
			>
				контактах
			</NuxtLink>
			.
		</span>
		<span>
			Или напишите нам в сообществе в
			<a
				href="https://vk.com/gtorel"
				class="base-link cursor-pointer"
				target="_blank"
				aria-label="vk"
			>
				ВК
			</a>
		</span>
	</div>
</template>

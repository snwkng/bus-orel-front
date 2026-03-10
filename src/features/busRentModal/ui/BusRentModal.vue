<script setup lang="ts">
interface IProps {
  title: string
}
defineEmits<(e: 'close') => void>();

defineProps<IProps>();
</script>

<template>
	<SharedModalBaseModal @close="$emit('close')">
		<div>
      <h3>{{ title }}</h3>
			<p>
				По вопросам аренды автобусов и микроавтобусов звоните:
				<a
					href="tel:+74862780958"
					class="base-link cursor-pointer dark:text-secondary-300 dark:hover:text-secondary-500"
					>+7(4862)78-09-58</a
				>
			</p>
			<p>
				или напишите нам в группу в
				<a
					href="https://vk.com/gtorel"
					rel="noopener noreferrer"
					class="base-link cursor-pointer dark:text-secondary-300 dark:hover:text-secondary-500"
					target="_blank"
					aria-label="vk"
				>
					VK
				</a>
			</p>
		</div>
	</SharedModalBaseModal>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}
defineEmits<(e: 'close') => void>();

defineProps<IProps>();
</script>

<template>
	<SharedModalBaseModal @close="$emit('close')">
		<div>
      <h3 v-if="title">{{ title }}</h3>
			<SharedFontsText variant="body-lg">
				По вопросам бронирования туров и экскурсий звоните (пишите):
				<a
					href="tel:+74862780958"
					class="base-link cursor-pointer dark:text-secondary-300 dark:hover:text-secondary-500"
					>+7(4862)78-09-58</a
				>
			</SharedFontsText>
			<SharedFontsText variant="body-lg">
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
			</SharedFontsText>
		</div>
	</SharedModalBaseModal>
</template>

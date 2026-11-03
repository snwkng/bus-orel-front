<script setup lang="ts">
import { downloadFile } from '@/shared/lib/download/useLinkDownloadFile';

interface IProps {
	title: string;
	fileName: string;
	filenames?: string[];
}

withDefaults(defineProps<IProps>(), {
	filenames: () => []
});
</script>

<template>
	<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
		<h1 class="typo-h1 max-w-[24ch]">{{ title }}</h1>
		<button
			v-if="filenames.length && filenames[0]"
			type="button"
			class="flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
			title="Скачать прайс"
			aria-label="Скачать прайс"
			@click.prevent="downloadFile(filenames[0], fileName)"
		>
			<Icon
				name="lucide:file-down"
				class="text-secondary-600 size-5"
			/>
		</button>
	</div>
</template>

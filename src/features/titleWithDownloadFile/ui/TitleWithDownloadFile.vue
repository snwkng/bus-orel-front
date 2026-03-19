<script setup lang="ts">
import { donwloadFile } from '@/shared/lib/download/useLinkDownloadFile';

interface IProps {
  title: string,
  fileName: string
  filenames?: string[],
}

withDefaults(defineProps<IProps>(), {
  filenames: () => []
})

</script>

<template>
	<div
		class="flex w-full items-baseline gap-x-2"
	>
		<SharedFontsHeading
			class="text-center"
			variant="display-lg"
			weight="bold"
		>
			{{ title }}
		</SharedFontsHeading>
		<div
			v-if="filenames.length && filenames[0]"
			class="flex cursor-pointer items-center justify-center rounded-full bg-neutral-100 p-2 shadow-md transition-all hover:scale-105 hover:bg-neutral-200"
			title="Скачать прайс"
			@click.prevent="donwloadFile(filenames[0], fileName)"
		>
			<Icon
				name="lucide:file-down"
				size="24"
				class="text-secondary-500"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
interface IProps {
	iconName: string;
	iconColor?: string;
	title?: string;
	text?: string;
	textOnTitle?: boolean;
}

withDefaults(defineProps<IProps>(), {
	iconColor: 'text-primary-500',
	title: '',
	text: '',
	textOnTitle: false
});
</script>

<template>
	<div class="flex flex-col items-start gap-1">
		<div class="flex items-center gap-1">
			<ClientOnly>
				<div class="w-fit h-fit flex items-start">
					<Icon
						:name="`lucide:${iconName}`"
						size="24"
						:class="`${iconColor}`"
					/>
				</div>
			</ClientOnly>
			<SharedFontsText
				v-if="title"
				:variant="textOnTitle ? 'body-lg' : 'body-sm'"
				:color="textOnTitle ? 'default' : 'muted'"
				:weight="textOnTitle ? 'semibold' : 'medium'"
			>
				{{ title }}
			</SharedFontsText>
		</div>
		<SharedFontsText
			v-if="text"
			variant="body-lg"
			weight="semibold"
		>
			{{ text }}
		</SharedFontsText>
	</div>
</template>

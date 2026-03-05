<script setup lang="ts">
interface IProps {
	included?: string[];
	excluded?: string[];
	title?: string;
	includedTitle?: string;
	excludedTitle?: string;
}

withDefaults(defineProps<IProps>(), {
	included: () => [],
	excluded: () => [],
	title: '',
	includedTitle: '',
	excludedTitle: ''
});
</script>

<template>
	<div>
		<SharedFontsHeading
			v-if="title"
			class="mb-4"
			variant="heading-xl"
		>
			{{ title }}
		</SharedFontsHeading>
		<div class="grid md:grid-cols-2 gap-4">
			<div v-if="included.length">
				<SharedFontsHeading
					v-if="includedTitle"
					class="mb-4"
					variant="heading-lg"
				>
					{{ includedTitle }}
				</SharedFontsHeading>
				<div
					v-for="include in included"
					:key="include"
					class="flex w-full flex-row items-start gap-y-4"
				>
					<SharedLayoutsIconWithInfo
						icon-name="check"
						icon-color="text-accent-success"
						text-on-title
						:title="include"
					/>
				</div>
			</div>
			<div v-if="excluded.length">
				<SharedFontsHeading
					v-if="excludedTitle"
					class="mb-4"
					variant="heading-lg"
				>
					{{ excludedTitle }}
				</SharedFontsHeading>
				<div
					v-for="exclude in excluded"
					:key="exclude"
					class="flex w-full flex-row items-start gap-y-4"
				>
					<SharedLayoutsIconWithInfo
						icon-name="x"
						icon-color="text-accent-error"
						text-on-title
						:title="exclude"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

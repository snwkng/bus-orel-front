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
	includedTitle: 'В стоимость включено',
	excludedTitle: 'Оплачивается отдельно'
});
</script>

<template>
	<div>
		<h2
			v-if="title"
			class="typo-h2 mb-4"
		>
			{{ title }}
		</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			<div
				v-if="included.length"
				class="rounded-2xl bg-neutral-50 p-5"
			>
				<h3 class="typo-h4 mb-3">{{ includedTitle }}</h3>
				<ul class="typo-small space-y-2.5 text-neutral-600">
					<li
						v-for="include in included"
						:key="include"
						class="flex gap-2.5"
					>
						<Icon
							name="lucide:check"
							class="text-secondary-600 mt-0.5 size-4 shrink-0"
						/>
						{{ include }}
					</li>
				</ul>
			</div>
			<div
				v-if="excluded.length"
				class="rounded-2xl bg-neutral-50 p-5"
			>
				<h3 class="typo-h4 mb-3">{{ excludedTitle }}</h3>
				<ul class="typo-small space-y-2.5 text-neutral-600">
					<li
						v-for="exclude in excluded"
						:key="exclude"
						class="flex gap-2.5"
					>
						<Icon
							name="lucide:minus"
							class="mt-0.5 size-4 shrink-0 text-neutral-400"
						/>
						{{ exclude }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

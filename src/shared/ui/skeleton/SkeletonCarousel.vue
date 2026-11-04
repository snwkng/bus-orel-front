<template>
	<div
		class="animate-pulse"
		aria-hidden="true"
	>
		<div class="mb-8">
			<div class="h-7 w-56 rounded bg-neutral-200" />
			<div class="mt-2 h-4 w-72 max-w-full rounded bg-neutral-200" />
		</div>
		<div class="flex gap-6 overflow-hidden pb-2">
			<SharedSkeletonCard
				v-for="i in 4"
				:key="i"
				class="w-[72vw] shrink-0 sm:w-[calc(50%_-_12px)] lg:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]"
			/>
		</div>
	</div>
</template>

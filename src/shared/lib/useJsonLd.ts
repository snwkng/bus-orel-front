import type { MaybeRefOrGetter } from 'vue';

export const useJsonLd = (
	schema: MaybeRefOrGetter<Record<string, unknown>>
): void => {
	useHead({
		script: [
			{
				type: 'application/ld+json',
				innerHTML: computed(() => JSON.stringify(toValue(schema)))
			}
		]
	});
};

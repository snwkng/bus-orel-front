<script setup lang="ts">
interface IProps {
	variant?:
		| 'body-2xl'
		| 'body-xl'
		| 'body-lg'
		| 'body-md'
		| 'body-sm'
		| 'caption-lg'
		| 'caption-md'
		| 'caption-sm';
	color?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'muted'
		| 'disabled'
		| 'dark-only'
		| 'white'
		| 'white-only';
	align?: 'left' | 'center' | 'right';
	weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}

const props = withDefaults(defineProps<IProps>(), {
	variant: 'body-md',
	color: 'default',
	align: 'left',
	weight: 'medium'
});

const tag = computed(() => {
	const headingMap: Record<string, string> = {
		'body-2xl': 'p',
		'body-xl': 'p',
		'body-lg': 'p',
		'body-md': 'p',
		'body-sm': 'p',
		'caption-lg': 'span',
		'caption-md': 'span',
		'caption-sm': 'span'
	};

	return headingMap[props.variant] || 'span';
});

// Стили
const classes = computed(() => {
	const variantClasses: Record<string, string> = {
		'body-2xl': 'text-2xl leading-relaxed',
		'body-xl': 'text-xl leading-relaxed',
		'body-lg': 'text-base leading-relaxed',
		'body-md': 'text-sm leading-relaxed',
		'body-sm': 'text-sm leading-normal',

		'caption-lg': 'text-xs leading-normal',
		'caption-md': 'text-xs leading-normal',
		'caption-sm': 'text-[11px] leading-normal'
	};

	const weightClasses: Record<string, string> = {
		light: 'font-light',
		regular: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};

	const colorClasses: Record<string, string> = {
		default: 'text-neutral-900 dark:text-neutral-100',
		primary: 'text-primary-600 dark:text-primary-400',
		secondary: 'text-secondary-600 dark:text-secondary-400',
		muted: 'text-neutral-600 dark:text-neutral-400',
		disabled: 'text-neutral-400 dark:text-neutral-500',
		'dark-only': 'text-neutral-900 dark:text-neutral-900',
		white: 'text-neutral-200 dark:text-neutral-900',
		'white-only': 'text-neutral-200 dark:text-neutral-300'
	};

	const alignClasses: Record<string, string> = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};

	const additionalClasses = [alignClasses[props.align]].filter(Boolean);

	return [
		variantClasses[props.variant],
		weightClasses[props.weight],
		colorClasses[props.color],
		...additionalClasses
	]
		.filter(Boolean)
		.join(' ');
});
</script>
<template>
	<component
		:is="tag"
		:class="classes"
	>
		<slot />
	</component>
</template>

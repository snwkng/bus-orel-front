<script setup lang="ts">
interface IProps {
	variant?:
		| 'display-xl'
		| 'display-lg'
		| 'display-md'
		| 'heading-xl'
		| 'heading-lg'
		| 'heading-md'
		| 'heading-sm';
	color?: 'default' | 'primary' | 'secondary' | 'muted' | 'disabled' | 'dark' | 'white';
	align?: 'left' | 'center' | 'right';
	weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}

const props = withDefaults(defineProps<IProps>(), {
	variant: 'display-xl',
	color: 'default',
	align: 'left',
	weight: 'medium'
});

// Определяем тег
const tag = computed(() => {
	const headingMap: Record<string, string> = {
		'display-xl': 'h1',
		'display-lg': 'h1',
		'display-md': 'h2',
		'heading-xl': 'h2',
		'heading-lg': 'h2',
		'heading-md': 'h3',
		'heading-sm': 'h4'
	};

	return headingMap[props.variant] || 'span';
});

// Стили
const classes = computed(() => {
	const variantClasses: Record<string, string> = {
		// Display
		'display-xl': 'text-5xl leading-tight tracking-tight',
		'display-lg': 'text-4xl leading-tight tracking-tight',
		'display-md': 'text-3xl leading-snug',

		// Heading
		'heading-xl': 'text-2xl leading-snug',
		'heading-lg': 'text-xl leading-snug',
		'heading-md': 'text-lg leading-normal',
		'heading-sm': 'text-base leading-normal',

		// Body
		'body-lg': 'text-base leading-relaxed',
		'body-md': 'text-sm leading-relaxed',
		'body-sm': 'text-sm leading-normal',

		// Caption
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
    dark: 'text-gray-600 dark:text-gray-300'
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

<script setup lang="ts">
interface IProps {
  images?: string[]
}

withDefaults(defineProps<IProps>(), {
  images: () => []
})
const viewport = useViewport();
</script>

<template>
	<div>
		<SharedGalleryBaseGallery
			v-if="viewport.isGreaterThan('sm')"
      key="desktop-view"
			:images="images"
      
		/>

		<SharedSlidersBaseSlider
			v-if="viewport.isLessThan('md')"
      key="mobile-view"
			full-width
		>
			<NuxtImg
				v-for="(value, idx) in images"
				:key="value"
				:src="`/image/${value}`"
				class="h-[350px] w-full object-cover brightness-100 bg-neutral-50"
				:alt="`Изображение ${idx + 1}`"
				height="350"
				loading="lazy"
				fit="inside"
			/>
		</SharedSlidersBaseSlider>
	</div>
</template>

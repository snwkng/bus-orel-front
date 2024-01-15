<script setup lang="ts">
const props = defineProps({
	cardType: { type: String, default: 'tour' }
})
</script>
<template>
	<router-link to="#" rel="noopener noreferrer nofollow">
		<div class="w-full">
			<img class="rounded-xl mb-3 bg-cover w-full brightness-100" :class="[cardType === 'tour' ? 'h-72' : 'h-96']" src="https://images.unsplash.com/photo-1701743805444-d51a3636a03f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" title="pic" />
			<div class="card-content">
				<h3 class="font-semibold">
					Отель Атлас
				</h3>
				<div class=" text-gray-500 font-normal">
					Краснодарский край, Геленджик
				</div>
				<div class="text-gray-500 font-normal">
					от <strong class="text-black font-semibold">14000 &#8381;</strong> за поездку
				</div>
			</div>
		</div>
	</router-link>
</template>

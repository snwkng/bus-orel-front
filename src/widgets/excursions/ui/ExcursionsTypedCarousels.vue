<script setup lang="ts">
import { getExcursionsTypesList } from '@/entities/excursion/api/excursion.api';

const { data: types } = await getExcursionsTypesList();
</script>
<template>
	<WidgetsExcursionsCarousel
		v-for="item in types ?? []"
		:key="item.id"
		:type="item.name"
	/>
</template>

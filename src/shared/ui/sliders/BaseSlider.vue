<script lang="ts" setup>
import { useTemplateRef } from 'vue'

const sliderRef = useTemplateRef('slider')

const scroll = (direction: string) => {
  const container = sliderRef.value
  if (!container) return

  // Прокручиваем на ширину контейнера (или можно задать фиксированное число)
  const scrollStep = container.clientWidth * 0.7
  container.scrollBy({
    left: direction === 'next' ? scrollStep : -scrollStep,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="slider-container">
    <div class="slider-controls">
      <button class="btn-nav" @click="scroll('prev')">←</button>
      <button class="btn-nav" @click="scroll('next')">→</button>
    </div>

    <div ref="slider" class="slider-wrapper">
      <!-- Слот, куда попадут все слайды из родителя -->
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-container {
  .slider-wrapper {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }

    // Глубокий селектор, чтобы стилизовать элементы, переданные в слот
    :deep(> *) {
      flex: 0 0 80%;
      scroll-snap-align: center;

      @media (min-width: 1024px) {
        flex: 0 0 300px;
      }
    }
  }
}
.slider-controls {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Проверяем начальное состояние
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    class="scroll-to-top"
    :class="{ 'scroll-to-top--visible': isVisible }"
    type="button"
    aria-label="Наверх"
    title="Наверх"
    @click="scrollToTop"
  >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 19V5M5 12L12 5L19 12"
      stroke="#343A40"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  </button>
</template>

<style scoped lang="scss">
.scroll-to-top {
  @include flex-center(true);
  @include square(50px);

  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99;
  padding: 0;
  background-color: var(--color-white);
  border: var(--border);
  border-color: var(--color-white);
  border-radius: 50%;
  box-shadow: 0 2px 8px var(--color-black);
  color: var(--color-black);
  fill: var(--color-black);
  cursor: pointer;
  transition-duration: var(--transition-duration);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);

  &--visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }


  svg {
    path {
      stroke: var(--color-black);
    }
  }

  @include hover {
    background-color: var(--color-accent);

    svg {
      path {
        stroke: var(--color-white);
      }
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>


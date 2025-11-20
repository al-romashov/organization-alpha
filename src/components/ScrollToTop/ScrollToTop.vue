<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Icons from '@/components/Icons'

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
    <Icons
      class="scroll-to-top__icon"
      name="arrow-up"
      label="Наверх"
    />
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
  background-color: var(--color-accent);
  border: var(--border);
  border-radius: 50%;
  color: var(--color-white);
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

  @include hover {
    background-color: transparent;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>


<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  imageSrc: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
  if (newValue) {
    document.documentElement.classList.add('is-lock')
  } else {
    document.documentElement.classList.remove('is-lock')
  }
}, { immediate: true })

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  closeModal()
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.documentElement.classList.remove('is-lock')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="modal"
    >
      <div
        class="modal__overlay"
        @click="handleOverlayClick"
      ></div>
      <div
        class="modal__content"
        @click.stop
      >
        <button
          class="modal__close"
          type="button"
          aria-label="Закрыть"
          @click="closeModal"
        >
          ×
        </button>
        <img
          v-if="imageSrc"
          :src="imageSrc"
          :alt="imageAlt"
          class="modal__image"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &__overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-width: 100%;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  &__close {
    @include flex-center(true);
    @include square(40px);

    position: absolute;
    top: -40px;
    right: -40px;
    padding: 0;
    background-color: var(--color-accent);
    border: var(--border);
    border-radius: 50%;
    color: var(--color-white);
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
    transition-duration: var(--transition-duration);

    @include hover {
      background-color: transparent;
    }

    @include mobile {
      top: -50px;
      right: 0;
    }
  }
}
</style>


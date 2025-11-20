<script setup>
import { ref } from 'vue'
import ImageModal from '@/components/ImageModal'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const selectedImage = ref(null)
const isModalOpen = ref(false)

const openImageModal = (image) => {
  selectedImage.value = image
  isModalOpen.value = true
}
</script>

<template>
  <div class="special-block-content">
    <div v-if="images.length > 0" class="special-block-content__images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="special-block-content__image"
        @click="openImageModal(image)"
      />
    </div>
    <ImageModal
      v-model="isModalOpen"
      :image-src="selectedImage?.src"
      :image-alt="selectedImage?.alt"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../SpecialBlockContent.scss' as *;
</style>

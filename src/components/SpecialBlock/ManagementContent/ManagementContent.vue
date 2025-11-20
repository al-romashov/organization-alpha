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
    <div class="special-block-content__text">
      <h4>1. Руководитель:</h4>
      <p>Ромашова Мария Алексеевна, директор, 8-913-980-38-19, uc@alfa54.com</p>
      <h4>2. Состав педагогических работников:</h4>
      <p>Шубин Юрий Викторович, преподаватель, образование высшее, стаж работы более 30 лет.</p>
      <p>Двуреченский Вадим Геннадьевич, преподаватель, образование высшее, стаж работы более 20 лет.</p>
      <p>Благодатнова Анастасия Геннадьевна. образование высшее, стаж работы более 10 лет.</p>
    </div>

    <div v-if="images.length > 0" class="special-block-content__images-wrapper">
      <h3 class="special-block-content__images-title">
        Изображения
      </h3>
      <div class="special-block-content__images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="special-block-content__image"
          @click="openImageModal(image)"
        />
      </div>
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

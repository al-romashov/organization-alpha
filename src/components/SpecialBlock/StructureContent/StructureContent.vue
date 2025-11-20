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
      <p>ООО «Альфа» имеет структурное подразделение ООО Учебный центр ДПО «Альфа».</p>
      <p><strong>Директором организации является:</strong> Ромашова Мария Алексеевна, 8-913-980-3819</p>
      <p><strong>Бухгалтер:</strong> Белякова Анна Сергеевна, 8-913-701-0188</p>
      <p><strong>Специалист по охране труда:</strong> Анпилова Валерия Сергеевна, 8-913-761-7955.</p>
      <p><strong>ПРИЛОЖЕНИЕ «ПОЛОЖЕНИЕ О СТРУКТУРНОМ ПОДРАЗДЕЛЕНИИ»</strong></p>
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

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
      <p><strong>Наименование организации:</strong> Общество с ограниченной ответственностью «Альфа», ООО «Альфа».</p>
      <p><strong>Дата создания:</strong> март 2018 года.</p>
      <p><strong>Учредитель:</strong> Волковая Наталья Александровна</p>
      <p><strong>Адрес:</strong> 630123, НОС, г. Новосибирск, Красный проспект, 232/1</p>
      <p><strong>Режим работы:</strong> пн-пт с 8.00 до 17.00<br>Сб-вс ВЫХОДНОЙ</p>
      <p><strong>Телефон:</strong> 8(383)255-77-63, 8-913-980-3819</p>
      <p><strong>Адрес электронной почты:</strong> uc@alfa54.com</p>
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

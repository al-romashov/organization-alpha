<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})
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
      <h2 class="special-block-content__images-title">
        Изображения
      </h2>
      <div class="special-block-content__images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="special-block-content__image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.special-block-content {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__text {
    @include fluid-text(16, 14);
    line-height: 1.6;
    color: var(--color-white);

    :deep(p) {
      margin: 0 0 15px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(strong) {
      font-weight: 700;
    }
  }

  &__images-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include mobile {
      margin-top: 30px;
      gap: 15px;
    }
  }

  &__images-title {
    @include fluid-text(24, 20);
    font-weight: 600;
    color: var(--color-white);
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__images {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-width: 720px;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    object-fit: cover;
  }
}
</style>

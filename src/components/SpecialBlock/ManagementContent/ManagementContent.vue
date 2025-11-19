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
      <h3>1. Руководитель:</h3>
      <p>Ромашова Мария Алексеевна, директор, 8-913-980-38-19, uc@alfa54.com</p>
      <h3>2. Состав педагогических работников:</h3>
      <p>Шубин Юрий Викторович, преподаватель, образование высшее, стаж работы более 30 лет.</p>
      <p>Двуреченский Вадим Геннадьевич, преподаватель, образование высшее, стаж работы более 20 лет.</p>
      <p>Благодатнова Анастасия Геннадьевна. образование высшее, стаж работы более 10 лет.</p>
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

    :deep(h3) {
      @include fluid-text(24, 20);
      font-weight: 600;
      margin: 25px 0 12px 0;
      color: var(--color-white);

      &:first-child {
        margin-top: 0;
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

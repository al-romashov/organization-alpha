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
      <p>ООО «Альфа» имеет структурное подразделение ООО Учебный центр ДПО «Альфа».</p>
      <p><strong>Директором организации является:</strong> Ромашова Мария Алексеевна, 8-913-980-3819</p>
      <p><strong>Бухгалтер –</strong> Белякова Анна Сергеевна, 8-913-701-0188</p>
      <p><strong>Специалист по охране труда-</strong> Анпилова Валерия Сергеевна, 8-913-761-7955.</p>
      <p><strong>ПРИЛОЖЕНИЕ «ПОЛОЖЕНИЕ О СТРУКТУРНОМ ПОДРАЗДЕЛЕНИИ»</strong></p>
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

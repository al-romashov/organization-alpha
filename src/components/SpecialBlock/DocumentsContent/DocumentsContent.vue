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
    <div v-if="images.length > 0" class="special-block-content__images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="special-block-content__image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.special-block-content {
  display: flex;
  flex-direction: column;
  gap: 30px;

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

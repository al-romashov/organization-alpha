<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value) => Boolean(value && value.trim()),
  },
  label: {
    type: String,
    default: '',
  },
});

const icons = import.meta.glob('../../assets/icons/**/*.svg', {
  eager: true,
  import: 'default',
});

const iconSrc = computed(() => {
  const entries = Object.entries(icons);
  const match = entries.find(([path]) => path.endsWith(`/${props.name}.svg`));

  if (match) {
    return match[1];
  }

  return '';
});

const accessibleLabel = computed(() => props.label.trim());
const isDecorative = computed(() => accessibleLabel.value.length === 0);
</script>

<template>
  <span
    class="icon"
    role="img"
    :aria-hidden="isDecorative"
    :aria-label="isDecorative ? undefined : accessibleLabel"
    v-bind="$attrs"
  >
    <img
      v-if="iconSrc"
      :src="iconSrc"
      class="icon__image"
      :alt="accessibleLabel"
    />
  </span>
</template>

<style scoped lang="scss">
@use './Icons.scss' as *;
</style>
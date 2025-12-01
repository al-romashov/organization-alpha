<script setup>
import { computed } from 'vue';

import Icon from '@/components/Icons';

const props = defineProps({
  className: {
    type: [String, Array, Object],
    default: '',
  },
  type: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
  /*  */
  mode: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  isLabelHidden: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'before',
    validator: (value) => ['before', 'after'].includes(value),
  },
  hasFillIcon: {
    type: Boolean,
    default: false,
  },
  extraAttrs: {
    type: Object,
    default: () => ({}),
  },
});

const isLink = computed(() => Boolean(props.href));

const componentTag = computed(() => (isLink.value ? 'a' : 'button'));

const specificAttrs = computed(() => {
  if (isLink.value) {
    return {
      href: props.href,
      ...(props.target ? { target: props.target } : {}),
    };
  }

  return {
    type: props.type,
  };
});

const buttonClasses = computed(() => [
  'button',
  props.className,
  {
    [`button--${props.mode}`]: Boolean(props.mode),
  },
]);

const title = computed(() => (props.isLabelHidden ? props.label : undefined));

const componentAttrs = computed(() => ({
  ...specificAttrs.value,
  ...props.extraAttrs,
}))
</script>

<template>
  <component
    :is="componentTag"
    :class="buttonClasses"
    :title="title"
    :aria-label="title"
    v-bind="componentAttrs"
  >
    <Icon
      v-if="iconName && iconPosition === 'before'"
      class="button__icon"
      :name="iconName"
      :has-fill="hasFillIcon"
    />
    <span v-if="!isLabelHidden" class="button__label">
      {{ label }}
    </span>
    <Icon
      v-if="iconName && iconPosition === 'after'"
      class="button__icon"
      :name="iconName"
      :has-fill="hasFillIcon"
    />
  </component>
</template>

<style scoped lang="scss">
.button {
  @include flex-center(true);

  column-gap: 4px;
  padding: fluid-to-laptop(18, 14) fluid-to-laptop(24, 20);
  font-weight: 600;
  text-align: center;
  color: var(--color-white);
  background-color: var(--color-accent);
  border: var(--border);
  border-radius: var(--border-radius);
  user-select: none;
  cursor: pointer;

  @include hover {
    background-color: transparent;
  }

  &:active {
    scale: 1.05;
  }

  &:disabled {
    color: var(--color-black);
    background-color: var(--color-gray);
    pointer-events: none;
  }

  &:has(.button__icon:only-child) {
    @include square(fluid-to-laptop(56, 44));

    padding: 0;
  }

  &--transparent {
    background-color: transparent;

    @include hover {
      background-color: var(--color-accent);
    }

    &:has(.button__icon:only-child) {
      @include square(44px);
    }
  }

  &--white {
    background-color: var(--color-accent);
    color: var(--color-white);
    border-color: var(--color-white);

    @include hover {
      background-color: var(--color-white);
      color: var(--color-accent);
    }
  }
}
</style>

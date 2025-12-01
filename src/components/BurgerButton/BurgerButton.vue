<script setup>
const title = 'Open menu'
</script>

<template>
  <button
    class="burger-button"
    type="button"
    :aria-label=title
    :title=title
    data-js-overlay-menu-burger-button
  >
  <svg class="burger-button__svg" width="30" height="30" viewBox="0 0 100 100">
    <path
      class="burger-button__line burger-button__line--1"
      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
    />
    <path
      class="burger-button__line burger-button__line--2"
      d="M 20,50 H 80"
    />
    <path
      class="burger-button__line burger-button__line--3"
      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
    />
  </svg>
  </button>
</template>

<style scoped lang="scss">
.burger-button {
  --burger-button-color: var(--color-accent);

  @include flex-center(true);
  @include square(50px);

  padding: 0;
  border: 1px solid var(--color-white);
  border-radius: var(--border-radius);
  background-color: var(--color-accent);
  color: var(--color-white);

  @include hover {
    background-color: var(--color-white);
    color: var(--color-accent);
  }

  &.is-active {
    .burger-button__line {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;

      &--2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
      }
    }
  }

  &:not(.is-active) {
    .burger-button__line--3 {
      stroke-dasharray: 30 207;
      stroke-dashoffset: -30;
    }
  }

  &__line {
    fill: none;
    stroke: currentColor;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 60 207;
    transition:
      stroke-dasharray var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1),
      stroke var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1);

    &--2 {
      stroke-dasharray: 60 60;
    }
  }
}
</style>

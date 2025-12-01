<script setup>
import logoImgSrc from '@/assets/images/logo.svg'

const title = 'Главная'
const loading = 'lazy'

</script>
<template>
  <a
    class="logo"
    href="/"
    :title=title
    :aria-label=title
    >
    <img
      class="logo__image"
      :src=logoImgSrc
      alt=""
      width="60"
      height="60"
      :loading=loading
    />
  </a>
</template>
<style scoped lang="scss">
.logo {
  width: 60px;
  height: 60px;

  @include hover {
    opacity: .7;
  }
}
</style>

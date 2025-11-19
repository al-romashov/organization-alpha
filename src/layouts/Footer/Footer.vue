<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__extra">
        <p class="footer__copyright">
          @<time datetime="2025">2025</time> Общество с ограниченной ответственностью «Альфа». Все права защищены.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--color-dark);
  &__extra {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    padding-top: 25px;
    padding-bottom: fluid(40, 25);

    @include mobile {
      flex-direction: column;
      row-gap: 20px;
    }
  }
}
</style>

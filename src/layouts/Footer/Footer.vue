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
  background-color: var(--color-accent);

  &__inner {
    border-top: var(--border-gray);
  }

  &__extra {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    padding-block: fluid(30, 15);

    @include mobile {
      flex-direction: column;
      row-gap: 20px;
    }
  }
}
</style>

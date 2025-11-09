<script setup>
import Button from '@/components/Button'

const titleId = 'hero-title'

</script>

<template>
  <section
    class="hero"
    :aria-labelledby=titleId
  >
    <div class="hero__body">
      <div class="hero__body-inner container">
        <h1 class="hero__title" :id=titleId>
          Профессиональное образование и повышение квалификации
        </h1>
        <div class="hero__description">
          <p>Лицензированная образовательная деятельность с 2005 года. Более 15 000 выпускников.</p>
        </div>
        <div class="hero__actions">
          <Button
            class="hero__button button"
            href="#"
            label="Записаться"
          />
          <Button
            class="hero__button button button--transparent"
            href="#"
            label="Узнать больше"
          />
        </div>
        <div class="hero__mouse">
          <div class="hero__mouse-scroll"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding-bottom: var(--section-padding-y);
  background: url('@/assets/images/hero/bg.jpg') 50%/cover;

  & .button {
    width: 170px;
  }

  &__body {
    width: 760px;

    &-inner {
      display: grid;
      row-gap: 20px;
    }
  }

  &__title {
    text-shadow: 2px 2px 4px var(--color-dark);
  }

  &__actions {
    display: flex;
    justify-content: center;
    column-gap: 30px;
  }

  &__mouse {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);

    &-scroll {
      position: relative;
      width: 25px;
      height: 40px;
      border: 2px solid #f2f2f2;
      border-radius: 60px;
      overflow: hidden;

      &::before {
        content: "";
        opacity: 1;
        position: absolute;
        width: 5px;
        height: 5px;
        top: 7px;
        left: 50%;
        border-radius: 50%;
        background: #f2f2f2;
        transform: translate(-50%);
        -webkit-animation: hero-mouse-wheel 1.6s infinite ease-in-out;
        animation: hero-mouse-wheel 1.6s infinite ease-in-out;
      }
    }
  }
}

@-webkit-keyframes hero-mouse-wheel {
  0% {
    opacity: 0;
    transform: translate(-50%);
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
    transform: translate(-50%, 12px);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, 18px);
  }
}

@keyframes hero-mouse-wheel {
  0% {
    opacity: 0;
    transform: translate(-50%);
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
    transform: translate(-50%, 12px);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, 18px);
  }
}
</style>

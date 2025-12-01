<script setup>
import { onMounted, onUnmounted } from 'vue'
import BurgerButton from '@/components/BurgerButton'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import OverlayMenu from '@/modules/OverlayMenu'

let resizeObserver = null
let overlayMenu = null

const updateHeaderHeight = () => {
  const header = document.querySelector('.header')
  if (header) {
    const height = header.offsetHeight
    document.documentElement.style.setProperty('--header-height', `${height}px`)
  }
}

onMounted(() => {
  updateHeaderHeight()
  window.addEventListener('resize', updateHeaderHeight)

  // Обновляем при изменении размера через ResizeObserver для более точного отслеживания
  const header = document.querySelector('.header')
  if (header) {
    resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight()
    })
    resizeObserver.observe(header)
  }

  overlayMenu = new OverlayMenu()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeaderHeight)
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<template>
  <header class="header is-fixed" data-js-overlay-menu>
    <div class="header__inner container">
      <Logo />
      <dialog
        class="header__overlay-menu-dialog"
        data-js-menu-dialog
      >
        <nav class="header__menu">
          <ul class="header__menu-list">
            <li class="header__menu-item">
              <Button
                class="header__menu-link button--white"
                href="#personal-block"
                label="Специальный раздел"
              />
            </li>
          </ul>
        </nav>
      </dialog>
      <BurgerButton
        class="header__burger-button visible-tablet"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  padding-block: fluid(12, 8);
  animation-name: scrolling-header;
  animation-fill-mode: both;
  animation-timeline: scroll();
  animation-range: 0 120px;

  @mixin scrolling-header-styles {
    background-color: var(--color-accent);
  }

  @keyframes scrolling-header {
    to {
      @include scrolling-header-styles;
    }
  }

  @supports(not (animation-timeline: scroll())) {
    @include scrolling-header-styles;

    position: sticky !important;
  }

  &.is-fixed {
    position: fixed;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 16px;
  }

  &__overlay-menu-dialog {
     position: fixed;
     inset: 0;
     flex-direction: column-reverse;
     justify-content: center;
     row-gap: 16px;
     width: 100%;
     height: 100%;
     padding: var(--container-padding-x);
     background-color: var(--color-dark);
     border: none;
     transition-duration: var(--transition-duration);
     transition-behavior: allow-discrete;

    // Временно закомментировано, т.к. количество ссылок в header слишком мало (< 3)
    //@include tablet-above {
      display: contents;
    //}

     @mixin starting-styles {
       opacity: 0;
       translate: 50%;
     }

     @include tablet {
       &[open] {
         display: flex;

         @starting-style {
           @include starting-styles;
         }
       }

       &:not([open]) {
         @include starting-styles;
       }
     }
  }

  &__menu {
    overflow-y: auto;
    padding: fluid-to-laptop(10, 8);

    &-list {
      display: flex;
      align-items: center;
      column-gap: 6px;

      // Временное скрытие burger кнопки, тк количество ссылок в header слишком мало ( < 3 )
      // @include tablet {
      //   flex-direction: column;
      //   row-gap: 16px;
      //   margin-block: auto;
      // }
    }

    &-link {
     padding: fluid-to-laptop(14, 12) fluid-to-laptop(24, 20);
    }
  }

  &__burger-button {
    position: relative;

    // Временное скрытие burger кнопки, тк количество ссылок в header слишком мало ( < 3 )
    display: none !important;
  }
}
</style>

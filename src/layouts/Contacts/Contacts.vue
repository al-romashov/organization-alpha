<script setup>
import Icons from '@/components/Icons';
</script>

<template>
  <section class="contacts" id="contacts">
    <div class="contacts__inner container">
      <div class="contacts__content">
        <div class="contacts__info">
          <div class="contacts__item">
            <Icons
              class="contacts__icon"
              name="contacts/location-pin"
              label="Адрес"
            />
            <div class="contacts__info-content">
              <p class="contacts__label">Адрес</p>
              <p class="contacts__text">Красный проспект, 232/1, Новосибирск, 630123</p>
            </div>
          </div>
          <div class="contacts__item">
            <Icons
              class="contacts__icon"
              name="contacts/phone"
              label="Телефон"
            />
            <div class="contacts__info-content">
              <p class="contacts__label">Телефон</p>
              <a href="tel:83832557763" class="contacts__text">8(383)255-77-63</a>
              <a href="tel:89139803819" class="contacts__text">8(913)980-38-19</a>
            </div>
          </div>
          <div class="contacts__item">
            <Icons
              class="contacts__icon"
              name="contacts/email"
              label="Email"
            />
            <div class="contacts__info-content">
              <p class="contacts__label">Email</p>
              <a href="mailto:info@example.com" class="contacts__text">uc@alfa54.com</a>
            </div>
          </div>
          <div class="contacts__item">
            <Icons
              class="contacts__icon"
              name="contacts/clock"
              label="Время работы"
            />
            <div class="contacts__info-content">
              <p class="contacts__label">Время работы</p>
              <p class="contacts__text">Пн-Пт: 8:00 - 17:00</p>
            </div>
          </div>
        </div>
        <div class="contacts__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A86621e805dbdb653353419a081fbec15caeac85448b162adf8a56424b5888de8&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
            title="Карта расположения"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contacts {
  padding-block: var(--section-padding-y);
  background-color: var(--color-accent);

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: fluid(60, 30);
    align-items: start;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: fluid(32, 24);
  }

  &__item {
    display: flex;
    align-items: center;
    column-gap: fluid(20, 16);
  }

  &__icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  &__info-content {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  &__label {
    font-weight: 600;
    font-size: 1.1rem;
    margin: 0;
  }

  &__text {
    font-size: 1rem;
    margin: 0;
  }

  // Hover эффект для ссылок с классом contacts__text
  a#{&}__text {
    @include hover {
      color: var(--color-gray);
    }
  }

  &__map {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;

    @include mobile {
      height: 400px;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
  }
}
</style>


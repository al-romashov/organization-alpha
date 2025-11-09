<script setup>
import Icons from '@/components/Icons';
import menuItems from './menuItems.js';
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <nav class="footer__menu">
        <div
          v-for="(menuItem, menuIndex) in menuItems"
          :key="menuIndex"
          class="footer__menu-column"
        >
          <a
            v-if="(typeof menuItem.title === 'object' && menuItem.title.href) || menuItem.href"
            class="footer__menu-title"
            :href="typeof menuItem.title === 'object' && menuItem.title.href ? menuItem.title.href : menuItem.href"
          >
            {{ typeof menuItem.title === 'object' ? menuItem.title.label ?? '' : menuItem.title }}
          </a>
          <p
            v-else
            class="footer__menu-title footer__menu-title--text"
          >
            {{ typeof menuItem.title === 'object' ? menuItem.title.label ?? '' : menuItem.title }}
          </p>
          <ul
            v-if="Array.isArray(menuItem.links) && menuItem.links.length"
            class="footer__menu-list"
          >
            <li
              v-for="(link, linkIndex) in menuItem.links"
              :key="typeof link === 'object' ? link.label ?? linkIndex : linkIndex"
              class="footer__menu-item"
            >
              <a
                v-if="typeof link === 'object' && link.href"
                class="footer__menu-link"
                :href="link.href"
              >
                {{ link.label ?? '' }}
              </a>
              <p v-else class="footer__menu-text">
                {{ typeof link === 'object' ? link.label ?? '' : link }}
              </p>
            </li>
          </ul>
          <ul
            v-if="Array.isArray(menuItem.socialLinks) && menuItem.socialLinks.length"
            class="footer__socials"
          >
            <li
              v-for="(socialLink, socialIndex) in menuItem.socialLinks"
              :key="socialIndex"
              class="footer__socials-item"
            >

              <a
                v-if="socialLink.href"
                class="footer__socials-link"
                :href="socialLink.href"
                :aria-label="socialLink.label"
              >
                <Icons
                  v-if="socialLink.iconName"
                  class="footer__socials-icon"
                  :name="socialLink.iconName"
                  :label="socialLink.label"
                />
                {{ socialLink.label }}
              </a>
              <p v-else class="footer__socials-text">
                <Icons
                  v-if="socialLink.iconName"
                  class="footer__socials-icon"
                  :name="socialLink.iconName"
                  :label="socialLink.label"
                />
                {{ socialLink.label }}
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <div class="footer__extra">
        <p class="footer__copyright">
          @<time datetime="2025">2025</time> Академия повышения квалификации. Все права защищены.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--color-dark);

  &__menu {
    --footerMenuColumns: 4;

    display: grid;
    grid-template-columns: repeat(var(--footerMenuColumns), 1fr);
    gap: 30px fluid(30, 10);
    padding-top: fluid(40, 25);
    padding-bottom: 25px;
    border-bottom: var(--border);

    @include laptop {
      --footerMenuColumns: 3;
    }

    @include mobile {
      --footerMenuColumns: 2;
    }

    @include mobile-s {
      --footerMenuColumns: 1;
    }

    &-title {
      font-weight: 600;
      font-size: 1.2rem;
    }

    &-column {
      display: flex;
      flex-direction: column;
      row-gap: fluid(24, 16);
    }

    &-list {
      display: flex;
      flex-direction: column;
      align-items: start;
      row-gap: fluid(14, 8);
    }
  }

  &__socials {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: fluid(14, 8);
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      list-style: none;
    }

    &-icon {
      width: 24px;
      height: 24px;
    }

    &-link {
      display: inline-flex;
      align-items: center;
      column-gap: 8px;
    }

    &-text {
      display: inline-flex;
      align-items: center;
      column-gap: 8px;
      margin: 0;
    }
  }

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

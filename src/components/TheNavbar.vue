<template>
<header class="header">
  <div class="container">
    <div class="header__top">
      <nav class="menu">
        <a class="menu__link" href="#">Our Shops</a>
        <a class="menu__link" href="#">Sale</a>
        <a class="menu__link" href="#">About Us</a>
      </nav>

      <a class="logo" href="#">
        <router-link to="/">
          <img class="logo__img" src="@/assets/img/icons/logo.svg" alt="logo" />
        </router-link>
        <img class="logo__img-mobile" src="@/assets/img/icons/logo-mobile.svg" alt="logo mobile" />
      </a>

      <a class="header-info" href="#">
        <img class="header-info__img" src="@/assets/img/icons/geopoint.svg" alt="geopoint" />
        <span class="header-info__text">New York City, 7th Ave</span>
      </a>

      <ul class="user-list">
        <li
        class="user-list__item"
        v-for="u in userList"
        :key="u.alt">
          <a class="user-list__link">
            <img class="user-list__img" :src="require(`@/assets/img/icons/${u.src}`)" :alt="u.alt" />
          </a>
        </li>
      </ul>
    </div>

    <div class="header__bottom">
      <div class="container">
        <nav class="menu-categories">
          <router-link
          v-for="c in categoriesList"
          :key="c.text"
          class="menu-categories__link"
          :class="c.class"
          :to="{name: 'Catalog', params: {slug: c.slug }}"
          >
            {{ c.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import { } from 'vue'

export default {
  setup () {
    const userList = ([
      { src: 'heart.svg', alt: 'favorites' },
      { src: 'user.svg', alt: 'user' },
      { src: 'basket.svg', alt: 'basket' }
    ])

    const categoriesList = ([
      // { name: 'Vodka', slug: 'vodka', class: 'menu-categories__link--active' },
      { name: 'Vodka', slug: 'vodka' },
      { name: 'Liqueur', slug: 'liqueur' },
      { name: 'Beer', slug: 'beer' },
      { name: 'Cider', slug: 'cider' },
      { name: 'Gin', slug: 'gin' },
      { name: 'Whiskey', slug: 'whiskey' }
    ])

    return { userList, categoriesList }
  }
}
</script>

<style>
</style>

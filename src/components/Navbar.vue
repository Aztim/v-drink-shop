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
        <img class="logo__img" src="@/assets/img/icons/logo.svg" alt="logo" />
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
        <!-- <li class="user-list__item">
          <a class="user-list__link" href="#">
            <img class="user-list__img" src="@/assets/img/icons/heart.svg" alt="favorites" />
          </a>
        </li>
        <li class="user-list__item">
          <a class="user-list__link" href="#">
            <img class="user-list__img" src="@/assets/img/icons/user.svg" alt="user" />
          </a>
        </li>
        <li class="user-list__item">
          <a class="user-list__link" href="#">
            <img class="user-list__img" src="@/assets/img/icons/basket.svg" alt="basket" />
            <span class="user-list__count">1</span>
          </a>
        </li> -->
      </ul>
    </div>

    <div class="header__bottom">
      <div class="container">
        <nav class="menu-categories">
          <router-link
          v-for="c in categoriesList"
          :key="c.text" class="menu-categories__link"
          :class="c.class"
          :to="{name: 'Catalog', params: {type: c.text.toLowerCase() }}"
          >
            {{ c.text }}
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
      { text: 'Vodka', class: 'menu-categories__link--active' },
      { text: 'Liqueur' },
      { text: 'Beer' },
      { text: 'Cider' },
      { text: 'Gin' },
      { text: 'Whiskey' }
    ])

    return { userList, categoriesList }
  }
}
</script>

<style>

</style>

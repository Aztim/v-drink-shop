<template>
 <carousel :items-to-show="3"  :wrap-around="true">
    <slide v-for="(p) in productList" :key="p.img">
      <div class="product-slider__item" >
        <div class="product-item__wrapper" :class="{ 'product-item__not-available': p.sold }"></div>
        <div class="product-item__wrapper" >
          <!-- <button class="product-item__favourite" type="button" :class="{'product-item__favourite--active': test(p.id)}" @click="addToFavorite(p.id)"></button> -->
          <FavoriteButton :id="p.id" />
          <button class="product-item__basket" type="button">
            <img src="@/assets/img/icons/basket_white.svg" alt="basket">
          </button>
          <span class="product-item__notify-link" href="#">
            It will be available shortly...
          </span>
          <a class="product-item" :class="{'product-item__sale': p.sale, 'product-item__new': p.new }" href="#">
            <p class="product-item__hover-text">
              посмотреть товар
            </p>
            <img class="product-item__img" :src="require(`@/assets/img/products/sale/${p.img}`)" alt="popular">
            <h3 class="product-item__title">{{ p.title }}
            </h3>
            <p class="product-item__price">{{ p.price }} $</p>
            <p class="product-item__notify-text">
              Sold out
            </p>
          </a>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import FavoriteButton from './FavoritesButton.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  props: ['productList'],
  components: { Carousel, Slide, Navigation, FavoriteButton },
  setup () {
    return { }
  }
}
</script>

<style>

</style>

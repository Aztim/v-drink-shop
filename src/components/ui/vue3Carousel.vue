<template>
 <carousel :items-to-show="3"  :wrap-around="true">
    <slide v-for="p in productList" :key="p.img">
        <div class="product-slider__item">
        <div class="product-item__wrapper" :class="p.class">
          <button class="product-item__favourite" type="button"></button>
          <button class="product-item__basket" type="button">
            <img src="@/assets/img/icons/basket_white.svg" alt="basket">
          </button>
          <a class="product-item__notify-link" href="#">
            Сообщить о поступлении
          </a>
          <a class="product-item product-item__sale" href="#">
            <p class="product-item__hover-text">
              посмотреть товар
            </p>
            <img class="product-item__img" :src="require(`@/assets/img/${p.img}`)" alt="popular">
            <h3 class="product-item__title">{{ p.title }}
            </h3>
            <p class="product-item__price">{{ p.price }}</p>
            <p class="product-item__notify-text">
              нет в наличии
            </p>
          </a>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  props: ['productList'],
  components: { Carousel, Slide, Navigation }
  // setup () {}
}
</script>

<style>

</style>

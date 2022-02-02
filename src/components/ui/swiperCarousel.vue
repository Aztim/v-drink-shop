/* eslint-disable vue/no-unused-components */
<template>
  <swiper
    :slidesPerView='3'
    :spaceBetween='20'
    :slidesPerGroup='3'
    :loop='true'
    :loopFillGroupWithBlank='true'
    :pagination='{
      clickable: true,
    }'
    :navigation='true'
    class='mySwiper w-1/4'
  >
        <swiper-slide v-for="p in productList" :key="p.img">
          <div class="product-slider__item">
            <div class="product-item__wrapper" :class="p.class">
              <button class="product-item__favourite" type="button"></button>
              <button class="product-item__basket" type="button">
                <img src="@/assets/img/icons/basket_white.svg" alt="basket">
              </button>
              <span class="product-item__notify-link" href="#">
                It will be available shortly...
              </span>
              <a class="product-item product-item__sale" href="#">
                <p class="product-item__hover-text">
                  view product
                </p>
                <img class="product-item__img" :src="require(`@/assets/img/${p.img}`)" alt="popular">
                <h3 class="product-item__title">{{ p.title }}</h3>
                <p class="product-item__price">{{ p.price }}</p>
                <p class="product-item__notify-text">
                  нет в наличии
                </p>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.min.css'

import 'swiper/swiper-bundle.min.css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import required modules
import { navigation } from 'swiper/components/navigation'
import { pagination } from 'swiper/components/pagination'

export default {
  // props: ['productList'],
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const productList = [[
      { title: 'Vodka', price: 6900, img: 'empty.png' },
      { title: 'Vodka', price: 6900, img: 'empty.png' },
      { title: 'Vodka', price: 6900, img: 'empty.png' },
      { title: 'Vodka', price: 6900, img: 'empty.png' },
      { title: 'Vodka', price: 6900, img: 'empty.png' },
      { title: 'Vodka', price: 6900, img: 'empty.png' }
    ]
    ]
    return { modules: [pagination, navigation], productList }
  }
}
</script>

<style>

</style>

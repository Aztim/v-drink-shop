<template>
  <swiper
    :slidesPerView='4'
    :spaceBetween='25'
    :loop='true'
    :loopFillGroupWithBlank='true'
    :pagination='{
      clickable: true,
    }'
    :navigation='true'
  >
    <swiper-slide v-for='(p) in productList' :key='p.src'>
        <div class="product-slider__item" >
        <div class="product-item__wrapper " :class="{'product-item__not-available': p.sold }"></div>
        <div class="product-item__wrapper" >
          <FavoriteButton :id="p.id" />
          <button class="product-item__basket" type="button">
            <img src="@/assets/img/icons/basket_white.svg" alt="basket">
          </button>
          <span class="product-item__notify-link" href="#">
            It will be available shortly...
          </span>
          <router-link
            class="product-item"
            :class="{'product-item__sale': p.sale, 'product-item__new': p.new }"
            :to="{name: 'Catalogtem', params: {id: p.id, slug: p.slug }}"
            >
            <p class="product-item__hover-text">
              view the product
            </p>
            <img class="product-item__img" :src="require(`@/assets/img/products/${p.img}`)" alt="popular">
            <h3 class="product-item__title">{{ p.title }} {{ p.type }}</h3>
            <p class="product-item__price">{{ p.price }} {{ productList.price }}$</p>
            <p class="product-item__notify-text">
              Sold out
            </p>
          </router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import FavoriteButton from './FavoritesButton.vue'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper'
// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default {
  props: ['productList'],
  components: { Swiper, SwiperSlide, FavoriteButton },

  setup () {
    return { modules: [Pagination, Navigation] }
  }
}
</script>

<style>

</style>

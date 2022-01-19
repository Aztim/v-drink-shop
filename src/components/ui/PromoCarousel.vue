<template>
  <section class="promo">
  <div class="container">
    <div class="promo__wrapper">
      <div class="promo-slider" id="promo-slider">
        <Splide :options="{ rewind: true }">
          <SplideSlide v-for="p in promoSliderList" :key="p.src">
            <router-link class="promo-slider__item" to="/">
              <img class="promo-slider__img" :src="require(`@/assets/img/${p.src}`)" alt="promo banner">
            </router-link>
          </SplideSlide>
        </Splide>
      </div>

      <a class="promo-sale" href="#">
        <div class="promo-sale__top">
          <div class="promo-sale__badge">
            <span class="promo-sale__badge-text">sale</span>
          </div>
          <div class="promo-sale__price">
            <span class="promo-sale__price-new">£11.99</span>
            <span class="promo-sale__price-old">£15.99</span>
          </div>
        </div>
        <img class="promo-sale__img" src="@/assets/img/promo_sale_image.png" alt="promo sale">
        <h4 class="promo-sale__title">BUDWEISER LAGER BEER BOTTLES 12 X 300ML</h4>
        <p class="promo-sale__bottom">
          <span>Winter sale</span>
        </p>
      </a>
    </div>
  </div>
</section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  components: { Splide, SplideSlide },
  setup () {
    const promoSliderList = ([
      { src: 'main_banner.jpg', to: '/' },
      { src: 'main_banner.jpg', to: '/' },
      { src: 'main_banner.jpg', to: '/' },
      { src: 'main_banner.jpg', to: '/' }
    ])

    return { promoSliderList }
  }
}
</script>

<style>

</style>

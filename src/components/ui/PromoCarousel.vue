<template>
  <section class="promo">
  <div class="container">
    <div class="promo__wrapper" v-if="advert">
      <div class="promo-slider" id="promo-slider">
        <Splide :options="{ rewind: true }">
          <SplideSlide v-for="a in advert" :key="a.src">
            <!-- <router-link class="promo-slider__item" :to="{name: 'Catalogtem', params: {id: `${a.type}/${a.id}`}}"> -->
            <router-link class="promo-slider__item" :to="{name: 'Catalogtem', params: {id: a.id, slug: a.slug } }">
              <img class="promo-slider__img" :src="require(`@/assets/img/products/advert/${a.img}`)" alt="promo banner">
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
            <span class="promo-sale__price-new">7.99$</span>
            <span class="promo-sale__price-old">10.99$</span>
          </div>
        </div>
        <img class="promo-sale__img" src="@/assets/img/products/budweiser.png" alt="promo sale">
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
import { ref, watch } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  props: {
    advert_data: {
      type: Object,
      required: true
    }
  },
  components: { Splide, SplideSlide },
  setup (props) {
    const promoSliderList = ([
      { src: 'main_banner.jpg', to: '/' },
      { src: 'main_banner.jpg', to: '/' },
      { src: 'main_banner.jpg', to: '/' },
      { src: 'main_banner.jpg', to: '/' }
    ])

    const advert = ref()
    watch(props, val => {
      advert.value = Object.keys(props.advert_data).map(id => ({ ...props.advert_data[id], id }))
    })

    return { promoSliderList, advert }
  }
}
</script>

<style>

</style>

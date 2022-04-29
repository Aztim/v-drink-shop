<template>
<section class="promo">
  <div class="container" v-if="advert">
    <div class="promo__wrapper">
      <div class="promo-slider" id="promo-slider">
        <swiper
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        >
          <swiper-slide v-for='(a) in advert' :key='a.src'>
            <router-link class="promo-slider__item" :to="{name: 'Catalogtem', params: {id: a.id, slug: a.slug }}">
              <img class="promo-slider__img"  :src="require(`@/assets/img/products/advert/${a.img}`)" alt="promo banner">
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <PromoBanner />
    </div>
  </div>
</section>
</template>

<script>
import { ref, watch } from 'vue'
import PromoBanner from './ui/PromoBanner.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

export default {
  props: {
    promoProducts: {
      type: Object
      // required: true
    }
  },
  components: { Swiper, SwiperSlide, PromoBanner },
  setup (props) {
    const advert = ref()
    watch(props, val => {
      advert.value = Object.keys(props.promoProducts).map(id => ({ ...props.promoProducts[id], id }))
    })

    return { advert, modules: [Pagination, Navigation] }
  }
}
</script>

<style>

</style>

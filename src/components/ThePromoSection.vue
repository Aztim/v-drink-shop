<template>
<section class="promo">
  <div class="container" v-if="promoProducts">
    <div class="promo__wrapper">
      <div class="promo-slider" id="promo-slider">
        <swiper
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        >rops.
          <swiper-slide v-for='(p) in promoProducts' :key='p.src'>
            <router-link class="promo-slider__item" :to="{name: 'Catalogtem', params: {id: p.id, slug: p.slug }}">
              <img class="promo-slider__img"  :src="require(`@/assets/img/products/advert/${p.img}`)" alt="promo banner">
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <PromoBanner />
    </div>
  </div>
</section>
</template>

<script setup>
import { defineProps } from 'vue'
import PromoBanner from './ui/PromoBanner.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  promoProducts: {
    type: Object
  }
})

// watch(props, val => {
//   advert.value = Object.keys(props.promoProducts).map(id => ({ ...props.promoProducts[id], id }))
// })
</script>

<style>
</style>

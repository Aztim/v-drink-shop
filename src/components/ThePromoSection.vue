<template>
  <section class="promo">
  <div class="container" v-if="advert">
    <div class="promo__wrapper">
      <div class="promo-slider" id="promo-slider">
        <swiper
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        >
          <swiper-slide v-for='(a) in advert' :key='a.src'>
            <router-link class="promo-slider__item" :to="{name: 'Catalogtem', params: {id: a.id, slug: a.slug }}">
              <img class="promo-slider__img"  :src="require(`@/assets/img/products/advert/${a.img}`)" alt="promo banner">
            </router-link>
           </swiper-slide>
        </swiper>
      </div>
      <Banner />
    </div>
  </div>
</section>
</template>

<script>
import { ref, watch } from 'vue'
import Banner from './ui/PromoBanner.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

export default {
  props: {
    advert_data: {
      type: Object,
      required: true
    }
  },
  components: { Swiper, SwiperSlide, Banner },
  setup (props) {
    const advert = ref()
    watch(props, val => {
      advert.value = Object.keys(props.advert_data).map(id => ({ ...props.advert_data[id], id }))
    })

    return { advert, modules: [Pagination, Navigation] }
  }
}
</script>

<style>

</style>

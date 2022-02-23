<template>
<section class="products">
  <div class="container">
    <div class="products__inner">
      <h3 class="products__title">{{ title }}</h3>
      <div class="products-tabs">
        <div class="products-tabs__header popular-tabs__header">
          <div class="mobile-overflow">
            <div
              class="products-tabs__title popular-tabs__title"
              v-for="(p, index) in productsTabs"
              :key="p.title"
              :class="index === selectedIndex ? 'active' : null"
              @click="tabsToggle(index)"
              >
              {{ p.title }}
            </div>
          </div>
        </div>

        <div class="products-tabs__content-header">
          <div class="products-tabs__content-item popular-tabs__content-item active">
            <div class="product-slider">
              <!-- <vue3Carousel
                :productList="productList"
              /> -->
              <Swiper
                :productList="productList"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="products__link" >
        <slot />
      </div>
    </div>

</div>
</section>
</template>

<script>
import { ref, watch } from 'vue'
import Swiper from './ui/SwiperJs.vue'

export default {
  props: {
    salesRequest: {
      type: Object,
      required: true
    },
    salesAccessories: {
      type: Object,
      required: true
    },
    productsTabs: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: { Swiper },

  setup (props) {
    const productList = ref()
    const selectedIndex = ref(0)
    const modal = ref(false)
    const tmp = ref()
    watch(props, val => {
      tmp.value = Object.keys(props.salesRequest).map(id => ({ ...props.salesRequest[id] }))
      productList.value = tmp.value[selectedIndex.value]
    })

    const tabsToggle = (id) => {
      selectedIndex.value = id
      productList.value = tmp.value[selectedIndex.value]
    }

    return { selectedIndex, tabsToggle, productList, modal }
  }
}
</script>

<style>

</style>

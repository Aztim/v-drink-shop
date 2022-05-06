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

<script setup>
import { ref, watch, defineProps } from 'vue'
import Swiper from './ui/SwiperJs.vue'

const props = defineProps({
  salesProducts: {
    type: Object
  },
  productsTabs: {
    type: Array
  },
  title: {
    type: String
  }
})

const productList = ref()
const selectedIndex = ref(0)
const tmp = ref()
watch(props, val => {
  tmp.value = tmp.value = props.salesProducts

  productList.value = tmp.value[selectedIndex.value]
})

const tabsToggle = (id) => {
  selectedIndex.value = id
  productList.value = tmp.value[selectedIndex.value]
}

</script>

<style>

</style>

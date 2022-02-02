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
              v-for="(p, index) in productsTabsTitle"
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

              <vue3Carousel
                :productList="productList"
              />

            </div>
          </div>
        </div>
      </div>
      <div class="products__link" v-if="link">
        <a class="products__link-more" href="#">show more</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ref, watch } from 'vue'
import vue3Carousel from './ui/vue3Carousel.vue'
// import swiper from './ui/swiperCarousel.vue'
export default {
  props: {
    salesRequest: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: Boolean,
      default: true
    }
  },
  components: { vue3Carousel },
  setup (props) {
    const productsTabsTitle = ([
      { title: 'Beer' },
      { title: 'Cider' },
      { title: 'Gin' },
      { title: 'Liqueur' },
      { title: 'Vodka' },
      { title: 'Whiskey' }
    ])

    const productList = ref()
    const selectedIndex = ref(0)

    watch(props, val => {
      productList.value = props.salesRequest[selectedIndex.value]
    })

    const tabsToggle = (id) => {
      selectedIndex.value = id
      productList.value = props.salesRequest[selectedIndex.value]
    }

    return { productsTabsTitle, selectedIndex, tabsToggle, productList }
  }
}
</script>

<style>

</style>

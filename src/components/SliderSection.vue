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
              @click="classToggle(index)"
              >
              {{ p.title }}
            </div>

          </div>
        </div>

        <div class="products-tabs__content-header">
          <div class="products-tabs__content-item popular-tabs__content-item active">
            <div class="product-slider">

              <vue3Carousel
                :productList="productList[selectedIndex]"
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
import { ref } from 'vue'
import vue3Carousel from './ui/vue3Carousel.vue'
export default {
  props: {
    sale: {
      type: Object,
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
  setup () {
    const productsTabsTitle = ([
      { title: 'Vodka' },
      { title: 'Liqueur' },
      { title: 'Beer' },
      { title: 'Cider' },
      { title: 'Gin' },
      { title: 'Whiskey' }
    ])

    const productList = ([
      [
        { title: 'Vodka', price: 6900, img: 'empty.png' },
        { title: 'Vodka', price: 6900, img: 'empty.png' },
        { title: 'Vodka', price: 6900, img: 'empty.png' },
        { title: 'Vodka', price: 6900, img: 'empty.png' },
        { title: 'Vodka', price: 6900, img: 'empty.png' },
        { title: 'Vodka', price: 6900, img: 'empty.png' }
      ],
      [
        { title: 'Liqueur', price: 6900, img: 'empty.png' }
      ],
      [
        { title: 'Beer', price: 6900, img: 'empty.png' }
      ],
      [
        { title: 'Cider', price: 6900, img: 'empty.png' }
      ],
      [
        { title: 'Gin', price: 6900, img: 'empty.png' }
      ],
      [
        { title: 'Whiskey', price: 6900, img: 'empty.png' }
      ]
    ])

    const selectedIndex = ref(0)

    const classToggle = (id) => {
      selectedIndex.value = id
    }

    return { productsTabsTitle, selectedIndex, productList, classToggle }
  }
}
</script>

<style>

</style>

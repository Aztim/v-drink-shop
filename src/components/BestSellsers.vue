<template>
<section class="products">
  <div class="container">
    <div class="products__inner">
      <h3 class="products__title">BEST SELLERS</h3>
      <div class="products-tabs">
        <div class="products-tabs__header popular-tabs__header">
          <div class="mobile-overflow">

            <div
            class="products-tabs__title popular-tabs__title"
            v-for="(p, index) in productsTabsTitle"
            :key="p.title"
            :class="index === selectedIndex ? 'active' : null"
            @click="classToggle(index)">
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
          <div class="products-tabs__content-item popular-tabs__content-item">slider-2</div>
          <div class="products-tabs__content-item popular-tabs__content-item">slider-3</div>
          <div class="products-tabs__content-item popular-tabs__content-item">slider-4</div>
          <div class="products-tabs__content-item popular-tabs__content-item">slider-5</div>
          <div class="products-tabs__content-item popular-tabs__content-item">slider-6</div>
        </div>
      </div>
      <div class="products__link">
        <a class="products__link-more" href="#">показать еще</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ref } from 'vue'
import vue3Carousel from './ui/vue3Carousel.vue'
export default {
  components: { vue3Carousel },
  setup () {
    const productsTabsTitle = ([
      { title: 'Моторы' },
      { title: 'Моторы' },
      { title: 'Моторы' },
      { title: 'Моторы' },
      { title: 'Моторы' },
      { title: 'Моторы' }
    ])

    const productList = ([
      { title: 'Спасательное снаряжение', price: 6900, img: 'popular-1.png' },
      { title: 'Спасательное снаряжение', price: 6900, img: 'popular-2.png' },
      { title: 'Спасательное снаряжение', price: 6900, img: 'popular-3.png' },
      { title: 'Спасательное снаряжение', price: 6900, img: 'popular-4.png', class: 'product-item__not-available"' },
      { title: 'Спасательное снаряжение', price: 6900, img: 'popular-4.png', class: 'product-item__not-available"' },
      { title: 'Спасательное снаряжение', price: 6900, img: 'popular-4.png', class: 'product-item__not-available"' }
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

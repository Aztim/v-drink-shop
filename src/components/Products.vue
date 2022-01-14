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

              <div
              class="product-slider__item"
              v-for="(p) in productList"
              :key="p.img"
              >
                <div class="product-item__wrapper" :class="p.class">
                  <button class="product-item__favourite" type="button"></button>
                  <button class="product-item__basket" type="button">
                    <img src="@/assets/img/icons/basket_white.svg" alt="basket">
                  </button>
                  <a class="product-item__notify-link" href="#">
                    Сообщить о поступлении
                  </a>
                  <a class="product-item product-item__sale" href="#">
                    <p class="product-item__hover-text">
                      посмотреть товар
                    </p>
                    <img class="product-item__img" :src="require(`@/assets/img/${p.img}`)" alt="popular">
                    <h3 class="product-item__title">{{ p.title }}
                    </h3>
                    <p class="product-item__price">{{ p.price }}</p>
                    <p class="product-item__notify-text">
                      нет в наличии
                    </p>
                  </a>
                </div>
              </div>

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
export default {
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

<template>
<section class="breadcrumbs">
  <div class="container">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__list-item">
        <a href="#">home</a>
      </li>
      <li class="breadcrumbs__list-item">
        <a href="#">whiskey</a>
      </li>
      <li class="breadcrumbs__list-item">
        <span>Jameson Black Barrel Irish Whiskey 70cl</span>
      </li>
    </ul>
  </div>
</section>

<section class="product-card">
  <div class="container">
    <div class="product-card__wrapper">
      <!-- <div class="product-card__img-box" :class="{'product-item__sale': product.sale, 'product-item__new': product.new }"> -->
      <div class="product-card__img-box" >
        <!-- <img class="product-card__image" src="@/assets/img/products/list/whitley_blue.jpg" alt="product"> -->
        <img class="product-card__image" :src="productImage(product.img)"  alt="product">
        <!-- <p class="product-card__price-old">
          ${{productData.oldPrice}}
        </p> -->
        <p class="product-card__price-new">
          ${{product.price}}
        </p>
        <a class="product-card__price-link" href="#">
          Found cheaper? We will decrease the price
        </a>
      </div>
      <div class="product-card__content">
        <h1 class="product-card__title">
          {{ product.title }}
        </h1>
        <!-- <p class="product-card__vendor">
          SKU: {{ productData.sku }}
        </p> -->
        <div class="product-card__actions">
          <button class="product-card__actions-favorite" type="button">
            <img src="@/assets/img/icons/heart.svg" alt="favorite">
          </button>
          <button class="product-card__actions-compare" type="button">
            <img src="@/assets/img/icons/compare.svg" alt="compare">
          </button>
          <div class="product-card__actions-rating">
            <div data-rateyo-rating="4" id="rateYo"></div>
          </div>
        </div>

        <div class="product-card__tabs">
          <div class="product-card__tabs-header">
            <div class="product-card__tabs-title active">Details</div>
            <div class="product-card__tabs-title">Where to buy</div>
          </div>
          <div class="product-card__tabs-content-header">
            <div class="product-card__tabs-content-item active">
               <ul class="product-card__list" >
                <li class="product-card__item" v-for="(key, value ) in product.card_list" :key="value">
                  <div class="product-card__item-left">{{ value }}</div>
                  <div class="product-card__item-right">{{ key }}</div>
                </li>
              </ul>
            </div>
            <div class="product-card__tabs-content-item">Where to buy</div>
          </div>
          <a class="product-card__more" href="#"  @click="isOpen = !isOpen">Show more</a>
          <div class="product-card__buy">
            <button type="button">add to cart</button>
          </div>
        </div>
      </div>
      <div class="product-card__buy product-card__buy--mobile">
        <button type="button">add to cart</button>
      </div>
    </div>
  </div>
</section>

<section class="product-page__tabs">
  <div class="container">
    <div class="product-page__tabs-header">
      <div class="product-page__mobile-overflow">
        <div class="product-page__tabs-title" v-for="(key) in pageTabs" :key="key">{{ key }}</div>
      </div>
    </div>
    <div class="product-page__tabs-content-header">
      <div class="product-page__tabs-content-item active">
        <form class="card">
          <div class="card__top">
            <label class="card__top-search">
              Store
              <input class="card__top-text" type="text">
            </label>
            <label class="card__top-pickup">
              <input class="filter-style" name="radio" type="radio" checked>
              Pick up today
            </label>
            <label class="card__top-pickup">
              <input class="filter-style" name="radio" type="radio">
              Pick up 3-5 days
            </label>
          </div>

          <ul class="card__list">
            <li class="card__list-item-title">
              <div class="card__list-address card__list-address-title">Address</div>
              <div class="card__list-hours card__list-hours-title">Store Hours</div>
              <div class="card__list-available card__list-available-title">Availability</div>
              <div class="card__list-count card__list-count-title">Quantity</div>
              <div class="card__list-btn card__list-btn-title"></div>
            </li>
            <li class="card__list-item" v-for="(p) in addressList" :key="p.address">
              <div class="card__list-address">{{ p.address }}</div>
              <div class="card__list-hours">
                <div class="card__list-hours--wrapper">
                  <span>mon-sat:</span><span>{{ p.hours }}</span>
                </div>
                <div class="card__list-hours--wrapper">
                  <span>sun:</span><span>{{ p.sunHours }}</span>
                </div>
              </div>
              <div class="card__list-available">{{ p.availability }}</div>
              <div class="card__list-count">{{ p.quantity }}</div>
              <div class="card__list-btn">
                <button type="submit">add</button>
              </div>
            </li>
          </ul>
        </form>
      </div>

      <!-- <div class="product-page__tabs-content-item">Details</div>
      <div class="product-page__tabs-content-item">Reviews</div>
      <div class="product-page__tabs-content-item">Delivery</div>
      <div class="product-page__tabs-content-item">Service</div>
      <div class="product-page__tabs-content-item">Returns & Refunds</div> -->
    </div>
  </div>
</section>
</template>

<script>
// import Loader from '../components/ui/Loader.vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  components: {
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const isOpen = ref(false)

    const productData = (
      {
        img: require('@/assets/img/products/jameson.png'),
        oldPrice: 39.99,
        priceNew: 36.99,
        title: 'Jameson Black Barrel Irish Whiskey 70cl',
        sku: '0002190',
        card__list:
          {
            Country: 'Ireland',
            'Strength (ABV)': '40%',
            Size: ' 700ml',
            'Limited Edition': 'No',
            Brand: 'jameson'
          }
      }
    )
    const pageTabs = {
      tab1: 'Details',
      tab2: 'Reviews',
      tab3: 'Delivery',
      tab4: 'Service',
      tab5: 'Returns & Refunds'
    }
    const addressList = [
      {
        address: 'New York City, 8th Ave',
        hours: '7am – 6pm',
        sunHours: '8am – 1pm',
        availability: 'In-Stock',
        quantity: 1
      },
      {
        address: 'New York City, 9th Ave',
        hours: '7am – 6pm',
        sunHours: '8am – 1pm',
        availability: 'In-Stock',
        quantity: 2
      },
      {
        address: 'New York City, 10th Ave',
        hours: '7am – 6pm',
        sunHours: '8am – 1pm',
        availability: 'Out-Stock',
        quantity: 0
      }
    ]

    onMounted(async () => {
      // loading.value = true
      // const { type, id } = route.params
      await store.dispatch('request/loadItemById', route.params)
      // product.value = await store.dispatch('product/loadItem', `${type}/${id}`)
      // loading.value = false
    })

    const product = computed(() => store.getters['request/oneProduct'])
    console.log(product)
    const productImage = (img) => {
      if (!img) {
        return require('@/assets/img/empty.png')
      }
      return require('@/assets/img/products/' + img)
    }
    return { productData, pageTabs, addressList, product, productImage, isOpen }
  }
}
</script>

<style>
</style>

<template>
<section class="breadcrumbs">
  <div class="container">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__list-item">
        <a href="#">Home</a>
      </li>
      <li class="breadcrumbs__list-item">
        <span>{{ capitalLetter(slug) }}</span>
      </li>
    </ul>
  </div>
</section>

<section class="catalog">
  <div class="container">
    <h2 class="catalog__title">
      {{ capitalLetter(slug) }}
    </h2>

    <CatalogFilter
      v-model="filter.option"
      :sortOptions="sortOptions"
      @filterProducts="filterProducts"
    />

    <div class="catalog__wrapper">
      <div class="aside-filter__btn-mobile">
        Show filters
      </div>

      <AsideFilter  v-model="filter.featured"/>

      <Loader v-if="loading" />
      <div class="catalog__wrapper-list" v-else>
        <div
          class="product-item__wrapper"
          :class="{'product-item__not-available' : p.status == 'sold'}"
          v-for="p in productsList"
          :key= p.title
        >
          <button class="product-item__favourite" type="button"></button>
          <button class="product-item__basket" type="button">
            <img src="@/assets/img/icons/basket_white.svg" alt="basket">
          </button>
          <!-- <a class="product-item__notify-link" href="#">
            Сообщить о поступлении
          </a> -->
          <!-- <a class="product-item" href="#" :class="c.class"> -->
            <router-link
              class="product-item"
              :class="{'product-item__sale': p.status == 'sale', 'product-item__new': p.status == 'new' }"
              :to="{name: 'Catalogtem', params: {id: p.id, slug: slug }}"
            >
              <p class="product-item__hover-text">
                view the product
              </p>
                <!-- <PulseLoader
                v-if="loading"
                color="#1E90FF"
                :size="size"
                class="product-item__loader"
                /> -->

              <img class="product-item__img" :src="require(`@/assets/img/products/${p.img}`)" alt="popular">
              <h3 class="product-item__title">{{ p.title }}</h3>
              <p class="product-item__price">${{ p.price }}</p>
              <p class="product-item__notify-text">
                Out of stock
              </p>
            </router-link>
          <!-- </a> -->
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Loader from '@/components/ui/Loader1.vue'
import Pagination from '@/components/ThePagination.vue'
import CatalogFilter from '@/components/ui/CatalogFilter.vue'
import AsideFilter from '@/components/ui/AsideFilter.vue'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  components: { Loader, Pagination, CatalogFilter, AsideFilter },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  setup () {
    const loading = ref(true)
    const request = ref({})
    const route = useRoute()
    const store = useStore()
    const filter = ref({
      option: '',
      featured: ''
    })

    const sortOptions = ref([
      { id: 0, key: 'title', section: 'By default' },
      { id: 2, key: 'price:asc', section: 'Price low to high' },
      { id: 3, key: 'price:desc', section: 'Price high to low' }
    ])

    const initDate = async () => {
      await store.dispatch('request/loadProductsByType', route.params.slug)
    }

    const capitalLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

    onMounted(async () => {
      loading.value = true
      await initDate()
      loading.value = false
    })

    watch(() => route.params, values => {
      initDate(values.slug)
    })
    watch(() => _cloneDeep(filter.value), () => {
      changeOption()
    })

    const productsList = computed(() => store.getters['request/getProducts'])
    const changeOption = () => store.dispatch('request/filterProducts', filter.value)

    return { loading, request, capitalLetter, sortOptions, productsList, filter }
  }
}
</script>

<style>
/* .product-item__loader {
  position: absolute;
  right: 40%;
  top: 50%;
} */
</style>

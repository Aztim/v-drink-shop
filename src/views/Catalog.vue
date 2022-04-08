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
    <div class="catalog__filter">
      <div class="catalog__filter--left">
        <button type="button">Clear All</button>
        <!-- <button type="button">BRP</button>
        <button type="button">more</button> -->
      </div>

      <div class="catalog__filter--right">
        <select class="catalog__filter-select filter-style">
          <option value="">By popularity</option>
          <option value="">By price</option>
          <option value="">By rating</option>
        </select>

        <button class="catalog__filter-grid active" type="button">
          <img src="@/assets/img/icons/filter_grid.svg" alt="grid">
        </button>

        <button class="catalog__filter-line" type="button">
          <img src="@/assets/img/icons/filter_line.svg" alt="line">
        </button>
      </div>
    </div>

    <div class="catalog__wrapper">
      <div class="aside-filter__btn-mobile">
        Show filters
      </div>

      <div class="catalog__wrapper-aside aside-filter">
        <aside class="aside-filter aside-filter-tabs">
          <div class="aside-filter-tabs__header">
            <div class="aside-filter-tabs__title active">Category</div>
            <div class="aside-filter-tabs__title">By brand</div>
          </div>
          <div class="aside-filter-tabs__content-header">
            <div class="aside-filter-tabs__content-item active">

              <form class="aside-filter">
                <ul class="aside-filter__list">
                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title filter__item-drop">Availability</p>
                    <div class="aside-filter__content">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          In stock
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          Out of Stock
                        </label>
                      </div>
                    </div>
                  </li>
                  <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title filter__item-drop">New</p>
                    <div class="aside-filter__content aside-filter__content-radio">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" name="radio" type="radio">
                          All
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" name="radio" type="radio">
                          New
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" name="radio" type="radio">
                          Sale
                        </label>
                      </div>
                    </div>
                  </li>
                  <!-- <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title filter__item-drop">Price</p>
                    <div class="aside-filter__content aside-filter__content--slider">
                      <input type="text" class="js-range-slider" value="" />
                      <div class="js-range-inputs">
                        <span class="js-input-span">10</span>
                        <input type="text" class="js-input-from" value="0" />
                        <span class="js-input-span">100</span>
                        <input type="text" class="js-input-to" value="0" />
                      </div>
                    </div>
                  </li> -->
                  <!-- <li class="aside-filter__item-list">
                    <div class="aside-filter__item-list-content">
                      <p class="aside-filter__item-title">
                        VOLUME
                      </p>
                      <select class="filter-style">
                        <option value="90">50Cl</option>
                        <option value="130">70Cl</option>
                        <option value="154">1L</option>
                      </select>
                    </div>
                  </li> -->
                  <!-- <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title filter__item-drop">Brand</p>
                    <div class="aside-filter__content">
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox" checked>
                          Jameson
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox" checked>
                          Oban
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          Jack Daniel's
                        </label>
                      </div>
                      <div class="aside-filter__item-more" href="#">
                        <button class="aside-filter__item-btn" type="button">Show more</button>
                      </div>
                    </div>
                  </li> -->
                  <!-- <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title filter__item-drop">Модель</p>
                    <div class="aside-filter__content">
                      <div class="aside-filter__content-text">
                        <input class="aside-filter__content-input" type="text" placeholder="Введите модель">
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox" checked>
                          Sea-doo Spark 2
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox" checked>
                          SeaDoo Spark 90
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          SeaDoo GTI 155
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          SeaDoo GTR 230
                        </label>
                      </div>
                      <div class="aside-filter__item-more" href="#">
                        <button class="aside-filter__item-btn" type="button">Show more</button>
                      </div>
                    </div>
                  </li> -->

                  <!-- <li class="aside-filter__item-drop">
                    <p class="aside-filter__item-title filter__item-drop">Country</p>
                    <div class="aside-filter__content">
                      <div
                        class="aside-filter__content-box"
                        >
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox" checked>
                          USA
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox" checked>
                          Ireland
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          United Kingdom
                        </label>
                      </div>
                      <div class="aside-filter__content-box">
                        <label class="aside-filter__content-label">
                          <input class="filter-style" type="checkbox">
                          Japan
                        </label>
                      </div>
                      <div class="aside-filter__item-more" href="#">
                        <button class="aside-filter__item-btn" type="button">Show more</button>
                      </div>
                    </div>
                  </li> -->
                  <li class="aside-filter__item-drop aside-filter__item-submit">
                    <button class="filter-btn__send filter-btn__send--active">Sort</button>
                    <!-- <p class="filter-btn__extra">Дополнительные параметры</p>
                    <div class="filter-btn__extra-content">more</div>
                    <button class="filter-btn__reset">Сбросить фильтр</button> -->
                  </li>
                </ul>
              </form>

            </div>
            <!-- <div class="aside-filter-tabs__content-item">filters 2</div> -->
          </div>
        </aside>
      </div>

      <Loader v-if="loading" />
      <div class="catalog__wrapper-list" v-else>
        <div
          class="product-item__wrapper"
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
              :class="p.class"
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
                нет в наличии
              </p>
            </router-link>
          <!-- </a> -->
        </div>

        <div class="pagination">
          <ul class="pagination__list">
            <li class="pagination__list-item active"><a href="#">1</a></li>
            <li class="pagination__list-item"><a href="#">2</a></li>
            <li class="pagination__list-item"><a href="#">3</a></li>
            <li class="pagination__list-item"><a href="#">4</a></li>
            <li class="pagination__list-item"><a href="#">5</a></li>
            <li class="pagination__list-item pagination__list-item--dots"><a href="#">...</a></li>
            <li class="pagination__list-item"><a href="#">11</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ref, watch, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Loader from '@/components/ui/Loader1.vue'

export default {
  components: { Loader },
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

    const initDate = async () => {
      await store.dispatch('request/loadProductsByType', route.params.slug)
    }

    const capitalLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

    onMounted(async () => {
      loading.value = true
      await initDate()
      loading.value = false
    })

    watch(() => {
      initDate()
    })
    const productsList = computed(() => store.getters['request/products'])

    return { loading, request, productsList, capitalLetter }
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

<template>
  <div class="catalog__wrapper-aside aside-filter">
    <aside class="aside-filter aside-filter-tabs">
      <div class="aside-filter-tabs__header">
        <div class="aside-filter-tabs__title active">Category</div>
        <div class="aside-filter-tabs__title">By brand</div>
      </div>

      <div class="aside-filter-tabs__content-header">
        <div class="aside-filter-tabs__content-item active">
          <form class="aside-filter" @submit.prevent="changeOption">
            <ul class="aside-filter__list">
              <!-- <li class="aside-filter__item-drop">
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
              </li> -->
              <li class="aside-filter__item-drop">
                <p class="aside-filter__item-title filter__item-drop">Featured</p>
                <div class="aside-filter__content aside-filter__content-radio">
                  <div class="aside-filter__content-box" v-for="f in featured" :key="f.key">
                    <label class="aside-filter__content-label">
                      <input
                      class="filter-style"
                      name="radio"
                      type="radio"
                      :value="f.key"
                      v-model="option"
                      >
                      {{ f.option }}
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
                <button class="filter-btn__send filter-btn__send--active" type="submit">Sort</button>
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
</template>

<script>
import { ref, watch } from 'vue'

export default {
  emits: ['update:modelValue'],

  setup (_, { emit }) {
    const option = ref('all')
    const featured = ref([
      { id: 0, key: 'all', option: 'All' },
      { id: 2, key: 'new', option: 'New' },
      { id: 3, key: 'sale', option: 'Sale' }
    ])

    watch((option), values => {
      if (values === 'all') {
        values = ''
      }
      emit('update:modelValue', values)
    })

    return { featured, option }
  }
}
</script>

<style>

</style>

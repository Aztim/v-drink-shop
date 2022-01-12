<template>
<section class="search">
  <div class="container">
    <div class="search-tabs">
      <div class="search-tabs__header">
        <div class="mobile-overflow">
          <div
          class="search-tabs__title"
          v-for="(s, index) in searchTabsTitle"
          :key="s.text"
          :class="index === selectedIndex ? 'active' : null"
          @click="tabClassToggle (index)"
          >
            {{ s.text }}
          </div>
        </div>
      </div>

      <div class="search-tabs__content-header">
        <div
          class="search-tabs__content-item active"  >
          <form class="search-tabs__content-form" action="get">
            <input class="search-tabs__content-input" type="text" :placeholder="searchForm[selectedIndex].placeholder">
            <button class="search-tabs__content-btn" type="submit">Искать</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const searchForm = ([
      { placeholder: 'Введите номер' },
      { placeholder: 'Введите марку' },
      { placeholder: 'Введите название' }

    ])
    const searchTabsTitle = ([
      { text: 'Поиск по номеру' },
      { text: 'Поиск по марке' },
      { text: 'Поиск по названию товара' }
    ])
    const selectedIndex = ref(0)

    const tabClassToggle = (id) => {
      selectedIndex.value = id
    }

    return { searchForm, searchTabsTitle, selectedIndex, tabClassToggle }
  }
}
</script>

<style>

</style>

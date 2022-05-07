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
            <button class="search-tabs__content-btn" type="submit">Find</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { ref } from 'vue'

const searchForm = ([
  { placeholder: 'Enter the brand' },
  { placeholder: 'Enter a name' }

])
const searchTabsTitle = ([
  { text: 'Find by brand' },
  { text: 'Find by product name' }
])
const selectedIndex = ref(0)

const tabClassToggle = (id) => {
  selectedIndex.value = id
}

</script>

<style>

</style>

<template>
    <div class="catalog__filter">
      <div class="catalog__filter--left">
        <button type="button">Clear All</button>
        <!-- <button type="button">BRP</button>
        <button type="button">more</button> -->
      </div>

      <div class="catalog__filter--right">
        <select class="catalog__filter-select filter-style" v-model="option">
        <!-- <select class="catalog__filter-select filter-style"  @change="changeOption"> -->
          <option v-for="option in sortOptions" :key="option.key" :value="option.key">{{ option.section }}</option>
          <!-- <option value="popularity">A-Z</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option> -->
        </select>

        <button class="catalog__filter-grid active" type="button">
          <img src="@/assets/img/icons/filter_grid.svg" alt="grid">
        </button>

        <button class="catalog__filter-line" type="button">
          <img src="@/assets/img/icons/filter_line.svg" alt="line">
        </button>
      </div>
    </div>
</template>

<script>
import { watch, ref } from 'vue'

export default {
  name: 'select',
  emits: ['update:modelValue'],
  props: ['modelValue', 'sortOptions'],

  setup (props, { emit }) {
    const option = ref('title')

    // const changeOption = (e) => emit('filterProducts', { option: e.target.value })
    // const changeOption = () => store.dispatch('request/filterProducts', filter.value)

    watch((option), values => {
      emit('update:modelValue', values)
    })
    return { option }
  }
}
</script>

<style>
</style>

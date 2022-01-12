<template>
  <div>
    <PromoCarousel />
    <SearchFilter />
    <Categories />
  </div>
</template>

<script lang="ts">
import PromoCarousel from '@/components/ui/PromoCarousel.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'Home',
  components: {
    PromoCarousel,
    SearchFilter,
    Categories
  }
}
</script>

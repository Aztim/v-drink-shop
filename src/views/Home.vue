<template>
  <div>
    <PromoCarousel />
    <SearchFilter />
    <Categories />
    <Products />
    <Banner />
  </div>
</template>

<script lang="ts">
import PromoCarousel from '@/components/ui/PromoCarousel.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import Categories from '@/components/Categories.vue'
import Products from '@/components/Products.vue'
import Banner from '@/components/ui/Banner.vue'

export default {
  name: 'Home',
  components: {
    PromoCarousel,
    SearchFilter,
    Categories,
    Products,
    Banner
  }
}
</script>

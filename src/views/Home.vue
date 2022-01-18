<template>
  <div>
    <PromoCarousel />
    <SearchFilter />
    <Categories />
    <BestSellsers />
    <Banner />
  </div>
</template>

<script lang="ts">
import PromoCarousel from '@/components/ui/PromoCarousel.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import Categories from '@/components/Categories.vue'
import BestSellsers from '@/components/BestSellsers.vue'
import Banner from '@/components/ui/Banner.vue'

export default {
  name: 'Home',
  components: {
    PromoCarousel,
    SearchFilter,
    Categories,
    BestSellsers,
    Banner
  }
}
</script>

<template>
  <div>
    <PromoCarousel />
    <SearchFilter />
    <Categories />
    <SliderSection title="BEST SELLERS" />
    <Banner />
    <SliderSection  title="RELATED PRODUCTS" :link="false" />
  </div>
</template>

<script lang="ts">
import PromoCarousel from '@/components/ui/PromoCarousel.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import Categories from '@/components/Categories.vue'
import SliderSection from '@/components/SliderSection.vue'
import Banner from '@/components/ui/Banner.vue'

export default {
  name: 'Home',
  components: {
    PromoCarousel,
    SearchFilter,
    Categories,
    SliderSection,
    Banner
  }
}
</script>

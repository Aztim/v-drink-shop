<template>
  <div>
    <PromoCarousel />
    <SearchFilter />

  </div>
</template>

<script lang="ts">
import PromoCarousel from '@/components/ui/PromoCarousel.vue'
import SearchFilter from '@/components/SearchFilter.vue'

export default {
  name: 'Home',
  components: {
    PromoCarousel,
    SearchFilter
  }
}
</script>

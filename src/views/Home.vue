<template>
  <div>
    <PromoCarousel />
    <SearchFilter />
    <Categories />
    <SliderSection :sale="requests" title="BEST SELLERS" />
    <Banner />
    <SliderSection  title="RELATED PRODUCTS" :link="false" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
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
  },

  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('request/load')
    })
    const requests = computed(() => store.getters['request/requests'])
    return {
      requests
    }
  }

}
</script>

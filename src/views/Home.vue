<template>
  <div>
    <PromoCarousel />
    <SearchFilter />
    <Categories />
    <SliderSection
    :salesRequest="salesRequest"
    :productsTabs="productsTabs"
    title="BEST SELLERS">
      <!-- <template #show> -->
        <button class="products__link-more">show more</button>
      <!-- </template> -->
    </SliderSection>
    <Banner />
    <SliderSection
    title="RELATED PRODUCTS"
    :productsTabs="accessoriesTabs"
    :link="false" />
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
    const salesRequest = computed(() => store.getters['request/requests'])
    // const test = Object.keys(salesRequest.value).map(id => ({ ...salesRequest.value[id], id }))

    const productsTabs = ([
      { title: 'Beer' },
      { title: 'Cider' },
      { title: 'Gin' },
      { title: 'Liqueur' },
      { title: 'Vodka' },
      { title: 'Whiskey' }
    ])

    const accessoriesTabs = ([
      { title: 'Glasses' },
      { title: 'Shakers' },
      { title: 'Barrels' },
      { title: 'Stones' }
    ])
    return { salesRequest, productsTabs, accessoriesTabs }
  }

}
</script>

<template>
  <div>
    <PromoCarousel :advert_data="salesRequest.advert" />
    <SearchFilter />
    <Categories />
    <SliderSection
      :salesRequest="salesRequest.sale"
      :productsTabs="productsTabs"
      title="BEST SELLERS">
        <button class="products__link-more">show more</button>
    </SliderSection>
    <Banner />
    <SliderSection
      :salesRequest="salesRequest.accessories"
      title="RELATED PRODUCTS"
      :productsTabs="accessoriesTabs"
    />
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

    const productsTabs = ([
      { title: 'Beer' },
      { title: 'Cider' },
      { title: 'Gin' },
      { title: 'Liqueur' },
      { title: 'Vodka' },
      { title: 'Whiskey' }
    ])

    const accessoriesTabs = ([
      { title: 'Barrels' },
      { title: 'Glasses' },
      { title: 'Shakers' },
      { title: 'Stones' }
    ])
    return { productsTabs, accessoriesTabs, salesRequest }
  }

}
</script>

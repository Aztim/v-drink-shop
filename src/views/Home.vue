<template>
  <div >
    <Loader v-if="loading" />
    <PopUpWindow
      v-if="modal"
      @close="modal = false"
    />
    <Promo :advert_data="salesRequest.advert" />
    <SearchFilter />
    <Categories />
    <SliderSection
      :salesRequest="salesRequest.sale"
      :productsTabs="productsTabs"
      title="BEST SELLERS">
      <button class="products__link-more">show more</button>
    </SliderSection>
    <Banner />
    <Brands />
    <SliderSection
      :salesRequest="salesRequest.accessories"
      title="RELATED PRODUCTS"
      :productsTabs="accessoriesTabs"
    />
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import Promo from '@/components/ThePromoSection.vue'
import SearchFilter from '@/components/TheSearchFilter.vue'
import Categories from '@/components/TheCategories.vue'
import SliderSection from '@/components/SliderSection.vue'
import Banner from '@/components/ui/Banner.vue'
import Loader from '@/components/ui/Loader1.vue'
import PopUpWindow from '@/components/ui/PopUpWindow.vue'
import Brands from '@/components/ui/Brands.vue'

export default {
  name: 'Home',
  components: {
    Promo,
    SearchFilter,
    Categories,
    SliderSection,
    Banner,
    Loader,
    Brands,
    PopUpWindow
  },

  setup () {
    const store = useStore()
    const loading = ref(false)
    const modal = ref(false)

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false

      setTimeout(() => {
        modal.value = true
      }, 1000)
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
      { title: 'Shakers' }
      // { title: 'Barrels' },
      // { title: 'Flask' },
      // { title: 'Stones' }
    ])
    return { productsTabs, accessoriesTabs, salesRequest, loading, modal }
  }

}
</script>

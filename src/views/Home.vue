<template>
  <div >
    <Loader v-if="loading" />
    <!-- <PopUpWindow
      v-if="modal"
      @close="modal = false"
    /> -->
    <PromoSection :promoProducts="promoProducts[1]" />
    <SearchFilter />
    <Categories />
    <SliderSection
      :salesProducts="promoProducts[2]"
      :productsTabs="productsTabs"
      title="BEST SELLERS">
      <button class="products__link-more">show more</button>
    </SliderSection>
    <Banner />
    <!-- <Brands /> -->
    <SliderSection
      :salesProducts="promoProducts[0]"
      title="RELATED PRODUCTS"
      :productsTabs="accessoriesTabs"
    />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import PromoSection from '@/components/ThePromoSection.vue'
import SearchFilter from '@/components/TheSearchFilter.vue'
import Categories from '@/components/TheCategories.vue'
import SliderSection from '@/components/SliderSection.vue'
import Banner from '@/components/ui/Banner.vue'
import Loader from '@/components/ui/Loader1.vue'
// import PopUpWindow from '@/components/ui/PopUpWindow.vue'
// import Brands from '@/components/ui/Brands.vue'

const store = useStore()
const loading = ref(false)
const modal = ref(false)

onMounted(async () => {
  loading.value = true
  await store.dispatch('request/loadPromoProducts')
  loading.value = false

  setTimeout(() => {
    modal.value = true
  }, 1000)
})
const promoProducts = computed(() => store.getters['request/getPromoProducts'])

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
])
</script>

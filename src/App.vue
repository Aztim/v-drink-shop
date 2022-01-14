<template>
  <Navbar />
  <component :is="layout + '-layout'" v-if="layout" />
  <Footer />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layout/MainLayout.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  setup () {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: { MainLayout, Navbar, Footer }
}
</script>

<style lang="scss">

</style>

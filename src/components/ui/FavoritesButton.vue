<template>
  <button
    class="product-item__favourite"
    type="button"
    :class="{'product-item__favourite--active': isFavorite}"
    @click="addToFavorite">
  </button>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: ['id'],
  setup (props) {
    const store = useStore()
    const isFavorite = computed(() => store.getters.hasProduct(props.id))

    const addToFavorite = () => {
      store.dispatch('addToFavoriteList', props.id)
    }

    return { addToFavorite, isFavorite }
  }
}
</script>

<style>

</style>

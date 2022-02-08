<template>
  <div>
    <teleport to="body">
      <!-- <PopUpWindow  :hidePopup="hidePopup" @close="hidePopup = true"/> -->
    </teleport>
    <router-view />
  </div>
</template>

<script>
// import PopUpWindow from '../components/ui/ PopUpWindow.vue'
import { onMounted, ref } from 'vue'
export default {
  // components: { PopUpWindow },
  setup () {
    const hidePopup = ref(true)
    onMounted(() => {
      setTimeout(() => {
        hidePopup.value = false
      }, 1000)
    })

    return { hidePopup }
  }
}
</script>

<style>
</style>

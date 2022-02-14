<template>
  <div class="bokal">
    <div class="beer-empty"></div>
    <div class="beer-full">
      <span class="counter">{{ counter }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const counter = ref(0)
    // const beer = ref(0)
    onMounted(() => {
      const inter = setInterval(() => {
        counter.value++
        if (counter.value === 100) clearInterval(inter)
      }, 10)
    })

    return { counter }
  }
}
</script>

<style>
body {
  background: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .bokal {
  width: 150px;
  height: 379px;
  position: relative;
 }
 .beer-empty {
  width: 150px;
  height: 346px;
  background: url(https://res.cloudinary.com/dspfsamgq/image/upload/v1585732878/beer_mywq6t.png);
  position:absolute;
  bottom:0;
  left:0;
 }
 .beer-full {
  background: url(https://res.cloudinary.com/dspfsamgq/image/upload/v1585732878/beer2_pasq8i.png) center bottom;
  width: 150px;
  height: 0;
  position:absolute;
  bottom:0;
  left:0;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  padding-top: 20px;
  font-size: 0;
  animation: beer 1s linear forwards;
 }
 @keyframes beer {
  20% {
   font-size: 0;
  }
  30% {
   font-size: 26px;
  }
  100% {
   height: 379px;
   font-size: 26px;
   padding-top: 80px;
  }
 }
</style>

<template>
<div class="popup">
  <div class="popup__content">
    <div class="popup__close" @click="$emit('close')">
      <svg>
        <use xlink:href="@/assets/img/sprite.svg#icon-cross"></use>
      </svg>
    </div>
    <div class="popup__left">
      <div class="popup-img__container">
        <img class="popup__img" src="@/assets/img/popup.jpg" alt="popup">
      </div>
    </div>
    <div class="popup__right">
      <div class="right__content">
        <h1>Get <span>10$</span> Off your FIRST order!</h1>
        <p>Save on your first order and get exclusive emails with coupons and new items weekly.</p>
        <form action="#">
          <input type="email" placeholder="Enter your email..." class="popup__form">
          <a href="#">Subscribe</a>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style>

</style>

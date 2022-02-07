<template>
<div class="popup" :class="{'hide__popup': hidePopup}">
  <div class="popup__content">
    <!-- <div class="popup__close" @click="$emit('close')">
      <svg>
        <use xlink:href="@/assets/img/sprite.svg#icon-cross"></use>
      </svg>
    </div> -->
    <div class="popup__left">
      <div class="popup-img__container">
        <img class="popup__img" src="@/assets/img/popup.jpg" alt="popup">
      </div>
    </div>
    <div class="popup__right">
      <div class="right__content">
        <!-- <h1>Get Discount <span>30%</span> Off</h1> -->
        <!-- <h1>Are you over 21 years of age?</h1> -->

        <p>Are you over 21 years of age?</p>
        <button>Yes</button>
        <button>No</button>
          <!-- <div class="popup__close" @click="$emit('close')">
            <svg>
              <use xlink:href="@/assets/img/sprite.svg#icon-cross"></use>
            </svg>
          </div> -->
        <!-- <form action="#">
          <input type="email" placeholder="Enter your email..." class="popup__form">
          <a href="#">Subscribe</a>
        </form> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    hidePopup: {
      type: Boolean
    }
  }
}
</script>

<style>

</style>

<template>
<footer class="footer">
  <div class="container">
    <div class="footer__wrapper">
      <div class="footer__subscribe">
        <p class="footer__subscribe-text">
          <span>
            Be the first to know about:
            sales, promotions,new products, events and more!
          </span>
        </p>

        <form class="footer__subscribe-form" action="#">
          <input class="footer__subscribe-input" type="text" placeholder="Email*">
          <button class="footer__subscribe-btn" type="submit">subscribe</button>
        </form>
      </div>

      <div class="footer__info">
        <div class="footer__info-title"><span>General</span></div>
        <div class="footer__info-wrapper">
          <a
          v-for="f in footerInfo"
          :key="f.text"
          class="footer__info-link"
          href="#">
            {{ f.text }}
          </a>
        </div>
      </div>

      <div class="footer__shop">
        <div class="footer__shop-title"><span>Contact Us</span></div>
        <div class="footer__shop-wrapper">
          <a
          v-for="f in footerShop"
          :key="f.text"
          class="footer__shop-link"
          href="#">
            {{ f.text }}
          </a>
        </div>
      </div>

      <div class="footer__social">
        <a
        v-for="f in footerIcon"
        :key="f.src"
        class="footer__social-icon"
        href="#">
          <img class="footer__social-icon" :src="require(`@/assets/img/icons/${f.src}.svg`)" :alt="f.src">
        </a>
      </div>
    </div>

    <div class="footer__policy">
      <a class="footer__policy-link" href="#">Privacy Policies</a>
      <a class="footer__policy-link" href="#">© 2022 BLACK SHIP. ALL RIGHTS RESERVED</a>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  setup () {
    const footerInfo = ([
      { text: 'About Us' },
      { text: 'Terms & Conditions' },
      { text: 'News' },
      { text: 'Careers' }
    ])

    const footerShop = ([
      { text: 'Delivery Information' },
      { text: 'Order Tracking' },
      { text: 'Returns Policy' },
      { text: 'Store Locator' }
    ])

    const footerIcon = ([
      { src: 'instagram' },
      { src: 'vk' },
      { src: 'facebook' },
      { src: 'youtube' }
    ])
    return { footerInfo, footerShop, footerIcon }
  }
}
</script>

<style>

</style>

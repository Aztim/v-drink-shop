<template>
  <button class="menu__hamburger-btn" type="button">
    <div class="menu__hamburger-line"></div>
    <div class="menu__hamburger-line"></div>
    <div class="menu__hamburger-line"></div>
  </button>

  <ul class="menu-mobile__list">
    <li class="menu-mobile__item" v-for="m in menuMobile" :key="m.text">
      <a class="menu-mobile__link" href="#">
        <img v-if="m.src" class="menu-mobile__icon" :src="require(`@/assets/img/icons/${m.src}`)" alt="img">
        <span class="menu-mobile__text">Войти</span>
      </a>
    </li>

    <!-- <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/user.svg" alt="img">
        <span class="menu-mobile__text">Войти</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/user.svg" alt="img">
        <span class="menu-mobile__text">Регистрация</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/heart.svg" alt="img">
        <span class="menu-mobile__text">Избранное</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/basket.svg" alt="img">
        <span class="menu-mobile__text">Корзина</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/house.svg" alt="img">
        <span class="menu-mobile__text">Магазины</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/discount.svg" alt="img">
        <span class="menu-mobile__text">Акции</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <img class="menu-mobile__icon" src="img/icons/payment.svg" alt="img">
        <span class="menu-mobile__text">Доставка и оплата</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Квадроциклы</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Катера</span>
      </a>
    </li>
    <li class="menu-mobile__item menu-mobile__item--active">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Гидроциклы</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Лодки</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Вездеходы</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Снегоходы</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Двигатели</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__text">Запчасти</span>
      </a>
    </li>
    <li class="menu-mobile__item">
      <a class="menu-mobile__link" href="#">
        <span class="menu-mobile__address">Москва, <br>ул. Науки 25</span>
      </a>
    </li> -->
  </ul>
</template>

<script>
export default {
  setup () {
    const menuMobile = ([
      { src: 'user.svg', text: 'Sign in' },
      { src: 'user.svg', text: 'Register' },
      { src: 'heart.svg', text: 'Favourites' },
      { src: 'basket.svg', text: 'Cart' },
      { src: 'house.svg', text: 'Shops' },
      { src: 'discount.svg', text: 'Sale' },
      { text: 'Гидроциклы' }
    ])

    return { menuMobile }
  }
}
</script>
</script>

<style>

</style>
<template>
<section class="categories">
  <div class="container">
    <div class="categories-wrapper">

      <a class="categories-item" href="#" v-for="c in categoriesTitle" :key="c.title">
        <div class="categories-item__text">
          <h4 class="categories-item__title">{{ c.title }}</h4>
          <p class="categories-item__subtitle">More</p>
        </div>
        <div class="categories-item__img">
          <img :src="require(`@/assets/img/categories/${c.img}`)" alt="categories">
        </div>
      </a>

    </div>
  </div>
</section>
</template>

<script>
export default {
  setup () {
    const categoriesTitle = ([
      { title: 'Vodka', img: 'categories-1.png' },
      { title: 'Liqueur', img: 'categories-2.png' },
      { title: 'Beer', img: 'categories-3.png' },
      { title: 'Cider', img: 'categories-4.png' },
      { title: 'Gin', img: 'categories-5.png' },
      { title: 'Whiskey', img: 'categories-6.png' }
    ])

    return { categoriesTitle }
  }
}
</script>

<style>

</style>

<template>
<section class="categories">
  <div class="container">
    <div class="categories-wrapper">

      <router-link
        class="categories-item"
        v-for="c in categoriesTitle"
        :key="c.title"
        :to="{name: 'Catalog', params: {slug: c.slug }}"
        >
        <div class="categories-item__text">
          <h4 class="categories-item__title">{{ c.title }}</h4>
          <p class="categories-item__subtitle">More</p>
        </div>
        <div class="categories-item__img">
          <img :src="require(`@/assets/img/categories/${c.img}`)" alt="categories">
        </div>
      </router-link>

    </div>
  </div>
</section>
</template>

<script setup >
const categoriesTitle = ([
  { title: 'Vodka', img: 'categories-1.png', slug: 'vodka' },
  { title: 'Liqueur', img: 'categories-2.png', slug: 'liqueur' },
  { title: 'Beer', img: 'categories-3.png', slug: 'beer' },
  { title: 'Cider', img: 'categories-4.png', slug: 'cider' },
  { title: 'Gin', img: 'categories-5.png', slug: 'gin' },
  { title: 'Whiskey', img: 'categories-6.png', slug: 'whiskey' }
])
</script>

<style>

</style>

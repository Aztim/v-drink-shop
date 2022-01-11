<template>
<section class="search">
  <div class="container">
    <div class="search-tabs">
      <div class="search-tabs__header">
        <div class="mobile-overflow">
          <div class="search-tabs__title active">Поиск по номеру</div>
          <div class="search-tabs__title">Поиск по марке</div>
          <div class="search-tabs__title">Поиск по названию товара</div>
        </div>
      </div>

      <div class="search-tabs__content-header">
        <div
        v-for="s in searchForm"
        :key="s.placeholder"  class="search-tabs__content-item" :class="s.class" >
          <form class="search-tabs__content-form" action="get">
            <input class="search-tabs__content-input" type="text" placeholder="Введите номер">
            <button class="search-tabs__content-btn" type="submit">Искать</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  setup () {
    const searchForm = ([
      { placeholder: 'Введите номер', class: 'active' },
      { placeholder: 'Введите марку' },
      { placeholder: 'Введите название' }

    ])

    return { searchForm }
  }
}
</script>

<style>

</style>

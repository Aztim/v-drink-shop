<template>
<section class="breadcrumbs">
  <div class="container">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__list-item">
        <a href="#">home</a>
      </li>
      <li class="breadcrumbs__list-item">
        <a href="#">whiskey</a>
      </li>
      <li class="breadcrumbs__list-item">
        <span>Jameson Black Barrel Irish Whiskey 70cl</span>
      </li>
    </ul>
  </div>
</section>

<section class="product-card">
  <div class="container">
    <div class="product-card__wrapper">
      <div class="product-card__img-box product-card__sale">
        <img class="product-card__image" src="@/assets/img/products/jameson.png" alt="product">
        <p class="product-card__price-old">
          £39.99
        </p>
        <p class="product-card__price-new">
          £36.99
        </p>
        <a class="product-card__price-link" href="#">
          Found cheaper? We will decrease the price
        </a>
      </div>
      <div class="product-card__content">
        <h1 class="product-card__title">
          Jameson Black Barrel Irish Whiskey 70cl
        </h1>
        <p class="product-card__vendor">
          SKU: 0002190
        </p>
        <div class="product-card__actions">
          <button class="product-card__actions-favorite" type="button">
            <img src="@/assets/img/icons/heart.svg" alt="favorite">
          </button>
          <button class="product-card__actions-compare" type="button">
            <img src="@/assets/img/icons/compare.svg" alt="compare">
          </button>
          <div class="product-card__actions-rating">
            <div data-rateyo-rating="4" id="rateYo"></div>
          </div>
        </div>
        <div class="product-card__tabs">
          <div class="product-card__tabs-header">
            <div class="product-card__tabs-title active">Details</div>
            <div class="product-card__tabs-title">Available in 1 Stores</div>
          </div>
          <div class="product-card__tabs-content-header">
            <div class="product-card__tabs-content-item active">
              <ul class="product-card__list">
                <li class="product-card__item">
                  <div class="product-card__item-left">Country</div>
                  <div class="product-card__item-right">Ireland</div>
                </li>
                <li class="product-card__item">
                  <div class="product-card__item-left">Strength (ABV)</div>
                  <div class="product-card__item-right">40%</div>
                </li>
                <li class="product-card__item">
                  <div class="product-card__item-left">Size</div>
                  <div class="product-card__item-right">700ml</div>
                </li>
                <li class="product-card__item">
                  <div class="product-card__item-left">Limited Edition</div>
                  <div class="product-card__item-right">No</div>
                </li>
                <li class="product-card__item">
                  <div class="product-card__item-left">Brand</div>
                  <div class="product-card__item-right">jameson</div>
                </li>
              </ul>
            </div>
            <div class="product-card__tabs-content-item">available in 1 stores</div>
          </div>
          <a class="product-card__more" href="#">Show more</a>
          <div class="product-card__buy">
            <button type="button">add to cart</button>
          </div>
        </div>
      </div>
      <div class="product-card__buy product-card__buy--mobile">
        <button type="button">add to cart</button>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {

}
</script>

<style>
</style>

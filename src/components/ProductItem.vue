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
            <div class="product-card__tabs-title">Where to buy</div>
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
            <div class="product-card__tabs-content-item">Where to buy</div>
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

<section class="product-page__tabs">
  <div class="container">
    <div class="product-page__tabs-header">
      <div class="product-page__mobile-overflow">
        <div class="product-page__tabs-title">Details</div>
        <div class="product-page__tabs-title">Reviews</div>
        <div class="product-page__tabs-title">Delivery</div>
        <div class="product-page__tabs-title">Service</div>
        <div class="product-page__tabs-title">Returns & Refunds</div>
      </div>
    </div>
    <div class="product-page__tabs-content-header">
      <div class="product-page__tabs-content-item active">
        <form class="card">
          <div class="card__top">
            <label class="card__top-search">
              Store
              <input class="card__top-text" type="text">
            </label>
            <label class="card__top-pickup">
              <input class="filter-style" name="radio" type="radio" checked>
              Pick up today
            </label>
            <label class="card__top-pickup">
              <input class="filter-style" name="radio" type="radio">
              Pick up 3-5 days
            </label>
          </div>
          <ul class="card__list">
            <li class="card__list-item-title">
              <div class="card__list-address card__list-address-title">Address</div>
              <div class="card__list-hours card__list-hours-title">Store Hours</div>
              <div class="card__list-available card__list-available-title">Availability</div>
              <div class="card__list-count card__list-count-title">Quantity</div>
              <div class="card__list-btn card__list-btn-title"></div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">London, Lewisham St. 35</div>
              <div class="card__list-hours">
                <div class="card__list-hours--wrapper">
                  <span>mon-sat:</span><span>7am – 6pm</span>
                </div>
                <div class="card__list-hours--wrapper">
                  <span>sun:</span><span>8am – 1pm</span>
                </div>
              </div>
              <div class="card__list-available">In-Stock</div>
              <div class="card__list-count">1</div>
              <div class="card__list-btn">
                <button type="submit">add</button>
              </div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">London, Lewisham St. 40</div>
              <div class="card__list-hours">
                <div class="card__list-hours--wrapper">
                  <span>mon-sat:</span><span>7am – 6pm</span>
                </div>
                <div class="card__list-hours--wrapper">
                  <span>sun:</span><span>8am – 1pm</span>
                </div>
              </div>
              <div class="card__list-available">In-Stock</div>
              <div class="card__list-count">2</div>
              <div class="card__list-btn">
                <button type="submit">add</button>
              </div>
            </li>
            <li class="card__list-item">
              <div class="card__list-address">London, <br>Lewisham St. 50</div>
              <div class="card__list-hours">
                <div class="card__list-hours--wrapper">
                  <span>mon-sat:</span><span>7am – 6pm</span>
                </div>
                <div class="card__list-hours--wrapper">
                  <span>sun:</span><span>8am – 1pm</span>
                </div>
              </div>
              <div class="card__list-available">Out-Stock</div>
              <div class="card__list-count">0</div>
              <div class="card__list-btn">
                <button type="submit">add</button>
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div class="product-page__tabs-content-item">Details</div>
      <div class="product-page__tabs-content-item">Reviews</div>
      <div class="product-page__tabs-content-item">Delivery</div>
      <div class="product-page__tabs-content-item">Service</div>
      <div class="product-page__tabs-content-item">Returns & Refunds</div>
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

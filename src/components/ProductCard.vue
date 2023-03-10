<template>
  <div class="product-card">
    <figure
      class="position-relative d-block overflow-hidden mb-0 product-card__media"
    >
      <span
        class="position-absolute d-flex justify-content-center align-items-center product-card__media-label"
      >
        New
      </span>
      <img :src="product.images.main_image" class="card-img-top" alt="..." />
    </figure>
    <div class="product-card__body">
      <div class="product-card__body-cat">
        <a href="#">TV & Home Theater</a>
      </div>
      <h3 class="product-card__body-title">
        <a href="#">Samsung - 55" Class LED 2160p Smart</a>
      </h3>
      <div class="d-flex align-items-center product-card__body-price">
        $ 1,999.00
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

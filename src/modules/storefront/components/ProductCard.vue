<template>
  <div
    class="product-card"
    @mouseenter="showAddCart = true"
    @mouseleave="showAddCart = false"
  >
    <figure
      class="position-relative d-block overflow-hidden mb-0 product-card__media"
    >
      <span
        class="position-absolute d-flex justify-content-center align-items-center product-card__media-label"
      >
        New
      </span>
      <img
        :src="product.images.main_image"
        class="card-img-top"
        alt="..."
        @click="showProductDetail(product.handle)"
      />
      <div
        v-if="showAddCart"
        class="position-absolute w-100 p-3 product-card__media-action"
      >
        <button
          class="p-2 w-100 d-flex justify-content-center align-items-center btn btn-outline-primary"
        >
          <i class="bi bi-cart-plus me-2"></i>
          <span class="text-uppercase">Add to cart</span>
        </button>
      </div>
    </figure>
    <div class="product-card__body">
      <div class="product-card__body-cat">
        <a href="#" @click="goToCollection(product.collection)">
          {{ product.collection }}
        </a>
      </div>
      <h3 class="product-card__body-title">
        <a href="#" @click="showProductDetail(product.handle)">
          {{ product.title }}
        </a>
      </h3>
      <div class="d-flex align-items-center product-card__body-price">
        $ {{ product.price }}
      </div>
      <div class="ratings-container">
        <span class="ratings-text">( 4 Reviews )</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "ProductCard",
  props: {
    cardStyle: {
      type: String,
      default: "small",
    },
    product: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const showAddCart = ref(false);

    const itemsLabel = computed(() => {
      return {
        new: props.product.created_at < 5,
      };
    });

    const goToCollection = (handle) => {
      router.push({ name: "collection", params: { handle: handle } });
    };

    const showProductDetail = (handle) => {
      router.push({ name: "product", params: { handle: handle } });
    };

    return {
      showAddCart,
      itemsLabel,
      showProductDetail,
      goToCollection,
    };
  },
};
</script>

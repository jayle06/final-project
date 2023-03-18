<template>
  <div class="mb-4 px-4 pt-3 summary">
    <h3 class="pb-3 mb-4 summary__title">Your Order</h3>
    <div class="d-flex flex-column">
      <template v-for="(product, index) in cartItems" :key="index">
        <product-cart class="mb-2" :product="product" :settings="settings" />
      </template>
    </div>
    <div class="accordion-summary"></div>

    <button
      type="submit"
      class="btn btn-outline-primary-2 btn-order btn-lg btn-block w-100"
      @mouseenter="hoverCheckout = true"
      @mouseleave="hoverCheckout = false"
    >
      <span v-if="!hoverCheckout" class="btn-text"> Place Order </span>
      <span v-else class="btn-hover-text"> Proceed to Checkout </span>
    </button>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import ProductCart from "@/modules/storefront/components/ProductCart";

export default {
  name: "OrderSummary",
  components: {
    ProductCart,
  },
  setup() {
    const hoverCheckout = ref(false);
    const cartItems = reactive([
      {
        id: 1,
        title: "Product Sample",
        handle: "product-sample",
        image: "https://www.linkpicture.com/q/product-2_3.jpg",
        price: 99,
        compare_price: 99,
      },
      {
        id: 2,
        title: "Product Sample 2",
        handle: "product-sample-2",
        image: "https://www.linkpicture.com/q/product-2_3.jpg",
        price: 99,
        compare_price: 99,
      },
      {
        id: 3,
        title: "Product Sample 2",
        handle: "product-sample-3",
        image: "https://www.linkpicture.com/q/product-2_3.jpg",
        price: 99,
        compare_price: 99,
      },
    ]);
    const settings = computed(() => {
      return {
        layout: "vertical",
        img_size: "small",
        enable_action: false,
      };
    });

    return {
      hoverCheckout,
      settings,
      cartItems,
    };
  },
};
</script>

<style scoped></style>

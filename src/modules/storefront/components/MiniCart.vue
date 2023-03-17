<template>
  <div class="position-relative mini-cart">
    <i
      class="bi bi-x position-absolute mini-cart__close"
      @click="closeMiniCart"
    ></i>
    <div
      v-if="cartItems.length === 0"
      class="p-4 d-flex justify-content-center align-items-center"
    >
      Your shopping has no item
    </div>
    <div v-else class="mini-cart__wrapper">
      <div class="px-4 mini-cart__wrapper-item">
        <template v-for="(product, index) in cartItems" :key="index">
          <product-cart :product="product" :settings="settings" />
        </template>
      </div>
      <div
        class="px-4 d-flex justify-content-between align-items-center mb-3 pt-3 mini-cart__wrapper-summary"
      >
        <span class="text-uppercase">Total</span>
        <span class="fw-bold mini-cart__wrapper-summary-price"> $999.000 </span>
      </div>
      <div
        class="px-4 pb-4 d-flex justify-content-between mini-cart__wrapper-action"
      >
        <a
          class="d-inline-flex justify-content-center align-items-center px-3 py-2 w-100 btn btn-primary me-2"
          @click.prevent="goToCartPage"
        >
          <span>View Cart</span>
        </a>
        <a
          class="d-inline-flex justify-content-center align-items-center px-3 py-2 w-100 btn btn-outline-primary-2"
          @click.prevent="goToCheckout"
        >
          <span class="me-2">Checkout</span>
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, nextTick } from "vue";
import { useRouter } from "vue-router";
import ProductCart from "@/modules/storefront/components/ProductCart";

export default {
  name: "MiniCart",
  components: {
    ProductCart,
  },
  props: {
    cartItems: {
      type: Array,
      default: () => [],
    },
    isShowMiniCart: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(_, ctx) {
    const router = useRouter();

    const settings = computed(() => {
      return {
        layout: "vertical",
        img_size: "small",
      };
    });

    const closeMiniCart = () => {
      ctx.emit("close");
    };
    const goToCartPage = () => {
      nextTick(() => {
        closeMiniCart();
        router.push("/cart");
      });
    };
    const goToCheckout = () => {
      nextTick(() => {
        closeMiniCart();
        router.push("/checkout");
      });
    };

    return {
      settings,
      closeMiniCart,
      goToCartPage,
      goToCheckout,
    };
  },
};
</script>

<style scoped></style>

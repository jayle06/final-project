<template>
  <div class="p-4 position-relative mini-cart">
    <i
      class="bi bi-x position-absolute mini-cart__close"
      @click="closeMiniCart"
    ></i>
    <div class="mini-cart__wrapper">
      <product-cart />
      <div
        class="d-flex justify-content-between align-items-center mb-3 pt-3 mini-cart__wrapper-summary"
      >
        <span class="text-uppercase">Total</span>
        <span class="fw-bold mini-cart__wrapper-summary-price"> $999.000 </span>
      </div>
      <div class="d-flex justify-content-between mini-cart__wrapper-action">
        <a
          class="d-inline-flex justify-content-center align-items-center px-3 py-2 w-100 btn btn-primary me-2"
          @click.prevent="goToCartPage"
        >
          <span>View Cart</span>
        </a>
        <a
          href="#"
          class="d-inline-flex justify-content-center align-items-center px-3 py-2 w-100 btn btn-outline-primary-2"
        >
          <span class="me-2">Checkout</span>
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import ProductCart from "@/modules/storefront/components/ProductCart";

export default {
  name: "MiniCart",
  components: {
    ProductCart,
  },
  props: {
    isShowMiniCart: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(_, ctx) {
    const router = useRouter();

    const closeMiniCart = () => {
      ctx.emit("close");
    };
    const goToCartPage = () => {
      nextTick(() => {
        closeMiniCart();
        router.push("/cart");
      });
    };

    return {
      closeMiniCart,
      goToCartPage,
    };
  },
};
</script>

<style scoped></style>

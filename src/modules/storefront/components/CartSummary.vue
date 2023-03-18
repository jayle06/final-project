<template>
  <div class="cart-summary">
    <div
      v-if="cart.offer"
      class="d-flex justify-content-between opacity-50 mb-1"
    >
      <span>
        <i class="bi bi-tag"></i>
        Offer
      </span>
      <span class="cart-summary__offer-price"> - ${{ cart.offer }} </span>
    </div>
    <div
      class="d-flex justify-content-between align-items-center mb-1 cart-summary__total"
    >
      <span class="text-uppercase">subtotal</span>
      <span class="fw-bold cart-summary__total-price">
        ${{ cart.sub_total }}
      </span>
    </div>
    <span class="opacity-50 cart-summary__note"
      >Shipping fee is calculated at checkout</span
    >
  </div>
</template>

<script>
export default {
  name: "CartSummary",
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>

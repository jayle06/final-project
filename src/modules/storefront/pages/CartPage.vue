<template>
  <div class="py-4">
    <BreadCrumb page="cart" />
    <div class="container my-5">
      <h2>Your cart</h2>
      <div class="pt-5 d-flex">
        <ProductCart class="me-5" />
        <div class="d-flex flex-column w-100">
          <div class="d-flex justify-content-between mb-3">
            <span>sub total</span>
            <span>$999</span>
          </div>
          <button class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductCart from "@/modules/storefront/components/ProductCart";

export default {
  name: "CartPage",
  components: {
    BreadCrumb,
    ProductCart,
  },
};
</script>

<style scoped></style>

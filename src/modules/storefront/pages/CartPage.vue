<template>
  <div class="py-4 cart">
    <BreadCrumb page="cart" />
    <div class="container my-5">
      <h2>Your cart</h2>
      <div class="pt-5 row">
        <div class="col-lg-8 pe-5 d-flex flex-column cart__item">
          <template v-for="(product, index) in cartItems" :key="index">
            <product-cart
              class="mb-2"
              :product="product"
              :settings="settings"
            />
          </template>
        </div>
        <div class="col-lg-4">
          <div class="d-flex justify-content-between mb-3">
            <span>sub total</span>
            <span>$999</span>
          </div>
          <router-link class="btn btn-primary btn-lg w-100" to="checkout">
            Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductCart from "@/modules/storefront/components/ProductCart";
import { computed, reactive } from "vue";

export default {
  name: "CartPage",
  components: {
    BreadCrumb,
    ProductCart,
  },
  setup() {
    const cartItems = reactive([
      {
        id: 1,
        title: "Product Sample",
        image: "https://www.linkpicture.com/q/product-2_3.jpg",
      },
      {
        id: 2,
        title: "Product Sample 2",
        image: "https://www.linkpicture.com/q/product-2_3.jpg",
      },
      {
        id: 3,
        title: "Product Sample 2",
        image: "https://www.linkpicture.com/q/product-2_3.jpg",
      },
    ]);

    const settings = computed(() => {
      return {
        layout: "horizontal",
        img_size: "large",
      };
    });

    return {
      cartItems,
      settings,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="py-4 cart">
    <BreadCrumb page="cart" />
    <div class="container my-5">
      <h2>Your cart</h2>
      <div class="pt-5 row">
        <div
          :class="[
            'col-lg-8 d-flex flex-column cart__item',
            { 'pe-5': !mobileDevice },
          ]"
        >
          <template v-for="(product, index) in cartItems" :key="index">
            <product-cart
              class="mb-2"
              :product="product"
              :settings="settings"
            />
          </template>
        </div>
        <div class="col-lg-4">
          <CartSummary
            class="mb-3"
            :cart="{
              sub_total: 999,
              offer: 10,
            }"
          />
          <a
            href="#"
            class="btn btn-primary btn-lg w-100"
            @click="goToCheckout"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useMobileDetection } from "vue3-mobile-detection";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductCart from "@/modules/storefront/components/ProductCart";
import CartSummary from "@/modules/storefront/components/CartSummary";

export default {
  name: "CartPage",
  components: {
    BreadCrumb,
    ProductCart,
    CartSummary,
  },
  setup() {
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
    const router = useRouter();
    const { isMobile } = useMobileDetection();
    const mobileDevice = computed(() => isMobile());
    const layout = computed(() =>
      mobileDevice.value ? "vertical" : "horizontal"
    );

    const settings = computed(() => {
      return {
        layout: layout.value,
        img_size: "large",
        enable_action: true,
      };
    });

    const goToCheckout = () => {
      router.push({ name: "checkout" });
    };

    return {
      cartItems,
      settings,
      mobileDevice,
      goToCheckout,
    };
  },
};
</script>

<style scoped></style>

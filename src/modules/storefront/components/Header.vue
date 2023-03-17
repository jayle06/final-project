<template>
  <div class="header">
    <div class="header-top">
      <div class="container py-2 d-flex align-items-center">
        <a href="tel:#">
          <i class="bi bi-telephone me-1"></i>Call: +0123 456 789
        </a>
        <div class="header-top__right">
          <ul class="p-0 m-0">
            <li class="d-flex align-items-center">
              <a
                href="#loginModal"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Sign in / Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="header-middle d-flex align-items-center justify-content-between"
    >
      <div class="container d-flex align-items-center justify-content-between">
        <router-link class="header-middle__logo" to="/">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
        <div class="header-middle__search input-group">
          <button class="btn btn-outline-secondary px-3 ps-4" type="button">
            <i class="bi bi-search"></i>
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="Search product..."
          />
        </div>
        <div class="header-middle__cart position-relative">
          <div class="position-relative" @click="showMiniCart">
            <i class="bi bi-cart2"></i>
            <div
              class="d-flex justify-content-center position-absolute header-middle__cart-badge"
            >
              <span>1</span>
            </div>
          </div>
          <div
            class="position-absolute header-middle__cart-mini-cart"
            :class="{ 'header-middle__cart-mini-cart--active': isShowMiniCart }"
          >
            <mini-cart
              :is-show-mini-cart="isShowMiniCart"
              @close="closeMiniCart"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center py-3 ms-4">
          <div class="me-4">
            <router-link to="products"> Products </router-link>
          </div>
          <div class="me-4">
            <router-link to="collections"> Collections </router-link>
          </div>
          <div class="me-4">
            <router-link to="about"> About </router-link>
          </div>
          <div class="me-4">
            <router-link to="contact"> Contact </router-link>
          </div>
        </div>
      </div>
      <div class="border-bottom"></div>
    </div>
    <Login
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import MiniCart from "@/modules/storefront/components/MiniCart";
import Login from "@/modules/storefront/components/Login";

export default {
  name: "MainHeader",
  components: {
    MiniCart,
    Login,
  },
  setup() {
    const isShowMiniCart = ref(false);

    const showMiniCart = () => {
      isShowMiniCart.value = !isShowMiniCart.value;
    };

    const closeMiniCart = () => {
      isShowMiniCart.value = false;
    };

    return {
      isShowMiniCart,
      closeMiniCart,
      showMiniCart,
    };
  },
};
</script>

<style scoped></style>

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
              <span>{{ cartItems.length }}</span>
            </div>
          </div>
          <div
            class="position-absolute header-middle__cart-mini-cart"
            :class="{ 'header-middle__cart-mini-cart--active': isShowMiniCart }"
          >
            <mini-cart
              :cart-items="cartItems"
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
          <template v-for="(menu, index) in menus" :key="index">
            <div
              v-if="menu.visible"
              class="me-4"
              @click="goToPage(menu.handle)"
            >
              <span class="text-capitalize"> {{ menu.title }} </span>
            </div>
          </template>
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
import { reactive, ref } from "vue";
import MiniCart from "@/modules/storefront/components/MiniCart";
import Login from "@/modules/storefront/components/Login";
import { useRouter } from "vue-router";

export default {
  name: "MainHeader",
  components: {
    MiniCart,
    Login,
  },
  setup() {
    const router = useRouter();
    const isShowMiniCart = ref(false);
    const menus = reactive([
      {
        id: 1,
        title: "products",
        handle: "products",
        visible: true,
      },
      {
        id: 2,
        title: "collections",
        handle: "collections",
        visible: true,
      },
      {
        id: 3,
        title: "about",
        handle: "about",
        visible: true,
      },
      {
        id: 4,
        title: "contact",
        handle: "contact",
        visible: true,
      },
      {
        id: 4,
        title: "tracking",
        handle: "tracking",
        visible: false,
      },
    ]);
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
    ]);

    const showMiniCart = () => {
      isShowMiniCart.value = !isShowMiniCart.value;
    };

    const closeMiniCart = () => {
      isShowMiniCart.value = false;
    };

    const goToPage = (page) => {
      router.push({ name: page });
    };

    return {
      menus,
      cartItems,
      isShowMiniCart,
      closeMiniCart,
      showMiniCart,
      goToPage,
    };
  },
};
</script>

<style scoped></style>

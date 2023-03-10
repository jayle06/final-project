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
              <a href="#signin-modal" data-toggle="modal">
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
        <a class="header-middle__logo">
          <img src="@/assets/logo.png" alt="logo" />
        </a>
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
        <div class="header-middle__cart">
          <i class="bi bi-cart2 position-absolute"></i>
          <div
            class="header-middle__cart-badge position-relative d-flex justify-content-center"
          >
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="header-bottom__right">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              :class="{ show: isShowCat }"
              type="button"
              data-bs-toggle="dropdown"
              :aria-expanded="isShowCat"
              @mouseenter="isShowCat = true"
              @mouseleave="isShowCat = false"
              @click="isShowCat = !isShowCat"
            >
              <i v-if="isShowCat" class="bi bi-x-lg me-3"></i>
              <i v-else class="bi bi-list me-3"></i>
              <span class="dt">Browse Categories</span>
            </button>
            <ul
              class="dropdown-menu"
              :class="{ show: isShowCat }"
              @mouseenter="isShowCat = true"
              @mouseleave="isShowCat = false"
            >
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center py-3 ms-3">
          <div class="me-3">Product</div>
          <div class="me-3">Collection</div>
          <div class="me-3">New</div>
          <div class="me-3">About</div>
          <div class="me-3">Contact</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HeaderTop",
  components: {},
  setup() {
    const isShowCat = ref(false);

    return {
      isShowCat,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="position-fixed start-0 h-100 side-bar">
    <div class="h-100 position-relative">
      <div class="py-5 ps-3 w-100 border-bottom side-bar__logo">
        <img src="@/assets/logo.png" alt="logo" @click="goToOnlineStore" />
      </div>
      <div class="mt-2 side-bar__menu">
        <router-link to="/admin" href="#" class="d-flex align-items-center p-3">
          <i class="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </router-link>
        <router-link
          to="/admin/orders"
          href="#"
          class="d-flex align-items-center p-3"
        >
          <i class="bi bi-bag-check fs-5 me-3"></i>
          <span>Orders</span>
        </router-link>
        <router-link
          to="/admin/products"
          href="#"
          class="d-flex align-items-center p-3"
        >
          <i class="bi bi-tags fs-5 me-3"></i>
          <span>Products</span>
        </router-link>
        <router-link
          to="/admin/customers"
          href="#"
          class="d-flex align-items-center p-3"
        >
          <i class="bi bi-people fs-5 me-3"></i>
          <span>Customers</span>
        </router-link>
        <a
          href="#"
          class="d-flex align-items-center justify-content-between p-3"
          @click="goToOnlineStore"
        >
          <div>
            <i class="bi bi-shop fs-5 me-3"></i>
            <span>Online store</span>
          </div>
          <i class="bi bi-box-arrow-in-up-right fs-5"></i>
        </a>
      </div>
      <div class="position-absolute p-3 w-100 border-top side-bar__user">
        <a href="#" class="d-flex align-items-center justify-content-center">
          <i class="bi bi-person-circle fs-1 me-3"></i>
          <span>Hello, Hoang</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "SideBar",
  setup() {
    const router = useRouter();

    const goToOnlineStore = () => {
      const routeData = router.resolve("/");
      window.open(routeData.href, "_blank");
    };

    return {
      goToOnlineStore,
    };
  },
};
</script>

<style scoped></style>

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
        <div
          href="#"
          class="position-relative d-flex align-items-center justify-content-center"
          @click="showProfile"
        >
          <i class="bi bi-person-circle fs-2 me-2"></i>
          <span>Hello, Hoang</span>
          <i v-if="isShowProfile" class="bi bi-arrows-collapse ms-2"></i>
          <i v-else class="bi bi-arrows-expand ms-2"></i>
          <div
            v-if="isShowProfile"
            class="position-absolute py-3 w-100 border side-bar__user-action"
            :class="{ 'side-bar__user-action--active': isShowProfile }"
          >
            <ul class="px-3 m-0">
              <li>
                <a href="#" class="d-flex align-items-center p-1">
                  <i class="bi bi-person-bounding-box fs-5 me-3"></i>
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" class="d-flex align-items-center p-1">
                  <i class="bi bi-box-arrow-left fs-5 me-3"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "SideBar",
  setup() {
    const router = useRouter();

    const isShowProfile = ref(false);

    const goToOnlineStore = () => {
      const routeData = router.resolve("/");
      window.open(routeData.href, "_blank");
    };

    const showProfile = () => {
      isShowProfile.value = !isShowProfile.value;
    };

    return {
      isShowProfile,
      goToOnlineStore,
      showProfile,
    };
  },
};
</script>

<style scoped></style>

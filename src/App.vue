<template>
  <div id="app">
    <main-header v-if="!isDashboard" />
    <div :class="{ 'row m-0 justify-content-end': isDashboard }">
      <dashboard-side-bar v-if="isDashboard" class="col-lg-2" />
      <router-view v-slot="{ Component }" :class="{ 'col-lg-10': isDashboard }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <main-footer v-if="!isDashboard" />
  </div>
</template>
<script>
import MainHeader from "@/modules/storefront/components/Header";
import MainFooter from "@/modules/storefront/components/Footer";
import DashboardSideBar from "@/modules/dashboard/components/SideBar";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
    DashboardSideBar,
  },
  setup() {
    const isDashboard = computed(() => {
      const path = window.location.pathname.trim().slice(1);
      const pathArr = path.split("/");
      return pathArr[0] === "admin";
    });
    return {
      isDashboard,
    };
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Poppins", sans-serif;
}
</style>

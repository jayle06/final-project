<template>
  <div id="app">
    <sf-header v-if="!isDashboard" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <sf-footer v-if="!isDashboard" />
  </div>
</template>
<script>
import SfHeader from "@/modules/storefront/components/Header";
import SfFooter from "@/modules/storefront/components/Footer";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    SfHeader,
    SfFooter,
  },
  setup() {
    const isDashboard = computed(() =>
      window.location.pathname.includes("admin")
    );
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

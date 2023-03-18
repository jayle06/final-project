<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/modules/storefront/components/Header";
import Footer from "@/modules/storefront/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="css">
#app {
  font-family: "Poppins", sans-serif;
}
</style>

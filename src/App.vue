<template>
  <Header />
  <router-view />
  <Footer />
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

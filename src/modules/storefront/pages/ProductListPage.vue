<template>
  <div class="py-4">
    <BreadCrumb page="products" />
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
export default {
  name: "ProductListPage",
  components: {
    BreadCrumb,
  },
};
</script>

<style scoped></style>

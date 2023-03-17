<template>
  <div class="collection my-4">
    <bread-crumb :pages="['collections']" page="collection" />
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";

export default {
  name: "CollectionPage",
  components: {
    BreadCrumb,
  },
};
</script>

<style scoped></style>

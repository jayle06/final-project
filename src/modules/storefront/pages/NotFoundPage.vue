<template>
  <div class="container">
    <div
      class="d-flex flex-column align-items-center justify-content-center not-found"
    >
      <NotFound />
      <router-link
        href="#"
        to="/"
        class="mb-5 btn btn-primary btn-lg text-uppercase"
      >
        continue shopping
      </router-link>
    </div>
  </div>
</template>

<script>
import NotFound from "@/components/NotFound";
export default {
  name: "NotFoundPage",
  components: {
    NotFound,
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 500px;
}
</style>

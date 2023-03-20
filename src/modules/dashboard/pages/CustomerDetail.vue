<template>
  <div class="py-5">
    <div class="container">
      <h3 class="mb-4 fw-semibold">Customer {{ customer.name }}</h3>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "OrderDetail",
  setup() {
    const customer = reactive({
      id: 1000,
      name: "Hoang",
    });
    return {
      customer,
    };
  },
};
</script>

<style scoped></style>

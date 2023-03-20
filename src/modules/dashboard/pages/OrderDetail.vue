<template>
  <div class="py-5">
    <div class="container">
      <h3 class="mb-4 fw-semibold">Order #{{ order.id }}</h3>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "OrderDetail",
  setup() {
    const order = reactive({
      id: 1000,
    });
    return {
      order,
    };
  },
};
</script>

<style scoped></style>

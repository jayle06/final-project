<template>
  <div class="py-5 dashboard-home">
    <div class="container">
      <h3>Chart 1: Total orders in 30 days</h3>
      <BarChart
        class="mb-5"
        :labels="['1', '2', '3', '4', '5']"
        :data="[12, 23, 34, 45, 56]"
      />
      <h3>Chart 2: Total orders in 12 months</h3>
      <BarChart
        class="mb-5"
        :labels="['1', '2', '3', '4', '5']"
        :data="[12, 23, 34, 45, 56]"
      />
      <h3>Chart 3: Total orders by years</h3>
      <BarChart
        class="mb-5"
        :labels="['1', '2', '3', '4', '5']"
        :data="[12, 23, 34, 45, 56]"
      />
    </div>
  </div>
</template>

<script>
import BarChart from "@/modules/dashboard/components/BarChart";
export default {
  name: "HomePage",
  components: {
    BarChart,
  },
};
</script>

<style scoped></style>

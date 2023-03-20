<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { reactive } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    labels: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const chartOptions = reactive({
      responsive: true,
    });

    const chartData = reactive({
      labels: props.labels,
      datasets: [
        { label: "Orders", backgroundColor: "#39f", data: props.data },
      ],
    });

    return {
      chartOptions,
      chartData,
    };
  },
};
</script>

<style scoped></style>

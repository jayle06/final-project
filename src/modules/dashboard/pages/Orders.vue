<template>
  <div class="py-5">
    <div class="container">
      <h3 class="mb-4 fw-semibold">Orders</h3>
      <div class="table-responsive p-5 border">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <th scope="row" class="align-middle">
                <a href="#">#{{ order.id }}</a>
              </th>
              <td class="align-middle py-4">{{ order.customer_email }}</td>
              <td class="align-middle py-4">{{ order.created_at }}</td>
              <td class="align-middle py-4">{{ order.status }}</td>
              <td class="align-middle py-4">{{ order.payment }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination v-if="orders.length > 10" class="mt-3" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Pagination from "@/components/Pagination";

export default {
  name: "OrdersPage",
  components: { Pagination },
  setup() {
    const orders = ref([
      {
        id: 1000,
        customer_email: "mhoang0611@gmail.com",
        created_at: "12-3-2023",
        status: "done",
        payment: "paid",
      },
      {
        id: 1001,
        customer_email: "mhoang0611@gmail.com",
        created_at: "12-3-2023",
        status: "done",
        payment: "paid",
      },
      {
        id: 1002,
        customer_email: "mhoang0611@gmail.com",
        created_at: "12-3-2023",
        status: "done",
        payment: "paid",
      },
    ]);
    return {
      orders,
    };
  },
};
</script>

<style scoped></style>

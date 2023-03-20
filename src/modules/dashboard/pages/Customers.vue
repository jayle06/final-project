<template>
  <div class="py-5">
    <div class="container">
      <h3 class="mb-4 fw-semibold">Customers</h3>
      <div class="table-responsive p-5 border">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in customers" :key="index">
              <th scope="row" class="align-middle">
                <router-link href="#" :to="`/admin/customers/${customer.id}`">
                  #{{ customer.id }}
                </router-link>
              </th>
              <td class="align-middle py-4">{{ customer.name }}</td>
              <td class="align-middle py-4">{{ customer.customer_email }}</td>
              <td class="align-middle py-4">{{ customer.created_at }}</td>
              <td class="align-middle py-4">{{ customer.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination v-if="customers.length > 10" class="mt-3" />
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
    const customers = ref([
      {
        id: 1000,
        customer_email: "mhoang0611@gmail.com",
        created_at: "12-3-2023",
        status: "active",
        name: "Hoang",
      },
      {
        id: 1001,
        customer_email: "mhoang0611@gmail.com",
        created_at: "12-3-2023",
        status: "active",
        name: "Hoang",
      },
      {
        id: 1002,
        customer_email: "mhoang0611@gmail.com",
        created_at: "12-3-2023",
        status: "active",
        name: "Hoang",
      },
    ]);
    return {
      customers,
    };
  },
};
</script>

<style scoped></style>

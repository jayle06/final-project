<template>
  <div class="py-5">
    <div class="container">
      <div class="mb-4 d-flex justify-content-between">
        <h3 class="fw-semibold">Products</h3>
        <div class="d-flex">
          <button type="button" class="btn btn-primary me-3">Import</button>
          <button
            type="button"
            class="btn btn-outline-primary-2"
            @click="printQuotation"
          >
            Export
          </button>
        </div>
      </div>
      <div ref="productsRef" class="table-responsive p-5 border">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <th scope="row" class="align-middle">
                <router-link href="#" :to="`/admin/products/${product.id}`">
                  #{{ product.id }}
                </router-link>
              </th>
              <td class="align-middle py-4">{{ product.title }}</td>
              <td class="align-middle py-4">${{ product.price }}</td>
              <td class="align-middle py-4">{{ product.created_at }}</td>
              <td class="align-middle py-4">{{ product.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination v-if="products.length > 10" class="mt-3" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Pagination from "@/components/Pagination";

export default {
  name: "ProductsPage",
  components: {
    Pagination,
  },
  setup() {
    const productsRef = ref();
    const products = ref([
      {
        id: 1000,
        created_at: "12-3-2023",
        status: "active",
        title: "Macbook pro 2022 M2 RAM 16GB 500GB",
        price: 999,
      },
      {
        id: 1001,
        created_at: "12-3-2023",
        status: "active",
        title: "Macbook pro 2022 M2 RAM 16GB 500GB",
        price: 999,
      },
      {
        id: 1002,
        created_at: "12-3-2023",
        status: "active",
        title: "Macbook pro 2022 M2 RAM 16GB 500GB",
        price: 999,
      },
    ]);

    const printQuotation = () => {
      const productsWindow = window.open(
        "",
        "",
        `height=${window.innerHeight}, width=${window.innerWidth}`
      );
      productsWindow.document.write("<html><body>");
      productsWindow.document.write(productsRef.value.innerHTML);
      productsWindow.document.write("</body></html>");
      productsWindow.document.close();
      productsWindow.print();
    };
    return {
      products,
      productsRef,
      printQuotation,
    };
  },
};
</script>

<style scoped></style>

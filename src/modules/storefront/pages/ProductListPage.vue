<template>
  <div class="py-4 products">
    <BreadCrumb page="products" />
    <div class="container my-4 d-flex flex-wrap justify-content-center">
      <div
        class="me-3 mb-4 products__card"
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductCard :product="product" />
      </div>
    </div>
    <Pagination v-if="products.length > 10" />
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductCard from "@/modules/storefront/components/ProductCard";
import Pagination from "@/components/Pagination";
import api from "@/modules/storefront/api/productService";

export default {
  name: "ProductListPage",
  components: {
    BreadCrumb,
    ProductCard,
    Pagination,
  },
  setup() {
    const router = useRouter();
    const products = ref([]);
    onBeforeMount(async () => {
      products.value = await api.getProducts({
        limit: 10,
        page: 1,
      });

      if (!products.value.length) {
        await router.push({ name: "not-found" });
      }
    });

    return {
      products,
    };
  },
};
</script>

<style scoped></style>

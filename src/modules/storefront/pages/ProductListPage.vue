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
  </div>
</template>

<script>
import { reactive } from "vue";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductCard from "@/modules/storefront/components/ProductCard";

export default {
  name: "ProductListPage",
  components: {
    BreadCrumb,
    ProductCard,
  },
  setup() {
    const products = reactive([
      {
        id: 1,
        handle: "product-1",
        title: "Product A",
        price: 999,
        collection: "Phone",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-1.jpg",
        },
      },
      {
        id: 2,
        handle: "product-2",
        title: "Product B",
        price: 999,
        collection: "Phone",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-2_3.jpg",
        },
      },
      {
        id: 3,
        handle: "product-3",
        title: "Product A",
        price: 999,
        collection: "Phone",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-3_3.jpg",
        },
      },
      {
        id: 4,
        handle: "product-4",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-4_2.jpg",
        },
      },
      {
        id: 5,
        handle: "product-5",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },
      {
        id: 6,
        handle: "product-6",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },
      {
        id: 7,
        handle: "product-5",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },
      {
        id: 8,
        handle: "product-5",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },
      {
        id: 9,
        handle: "product-5",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },

      {
        id: 10,
        handle: "product-5",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },
    ]);

    return {
      products,
    };
  },
};
</script>

<style scoped></style>

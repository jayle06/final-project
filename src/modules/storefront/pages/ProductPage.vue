<template>
  <div class="py-4 product-page">
    <div class="container">
      <BreadCrumb :pages="['products']" :page="product.title" />
      <div class="d-flex flex-column">
        <div class="d-flex">
          <div class="w-100 product-page__media">
            <ProductImages :images="slides" />
          </div>
          <div class="ms-4 w-100 product-page__info">
            <div class="mb-4">
              <h3>{{ product.title }}</h3>
            </div>
            <div
              class="d-flex align-items-center mb-4 product-page__info-color"
            >
              <span class="me-3">Color:</span>
              <div class="d-flex widget-color">
                <span class="me-3">White</span>
                <span class="me-3">Grey</span>
              </div>
            </div>
            <div class="mb-4 product-page__info-price">
              ${{ product.price }}
            </div>
            <div
              class="d-flex align-items-center mb-4 product-page__info-quantity"
            >
              <span class="me-3">Quantity:</span>
              <ProductQuantity
                v-model.number="quantity"
                class="flex"
                :min="0"
                @input="changeQuantity(...arguments)"
                @blur="changeQuantity(...arguments)"
                style="width: 120px"
              />
            </div>
            <button class="px-3 py-2 w-50 btn btn-primary text-uppercase">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="title text-center py-4">You May Also Like</h2>
        <ProductsCarousel :products="productsRecommend" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import ProductImages from "@/modules/storefront/components/ProductImages";
import ProductQuantity from "@/modules/storefront/components/ProductQuantity";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductsCarousel from "@/modules/storefront/components/ProductsCarousel";
import debounce from "@popperjs/core/lib/utils/debounce";

export default {
  name: "ProductPage",
  components: {
    ProductImages,
    ProductQuantity,
    BreadCrumb,
    ProductsCarousel,
  },
  props: {},
  emits: ["quantity"],
  setup(props, ctx) {
    const slides = ref([
      "https://www.maccenter.vn/App_images/MacBookPro-M2-SpaceGray-A.jpg",
      "https://www.maccenter.vn/App_images/MacBookPro-M2-SpaceGray-B.jpg",
      "https://www.maccenter.vn/App_images/MacBookPro-M2-SpaceGray-C.jpg",
      "https://www.maccenter.vn/App_images/MacBookPro-M2-SpaceGray-D.jpg",
      "https://www.maccenter.vn/App_images/MacBookPro-M2-SpaceGray-E.jpg",
    ]);

    const productsRecommend = reactive([
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
        title: "Product A",
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
    ]);

    const product = reactive({
      id: 2,
      handle: "product-2",
      title: "Product A",
      price: 999,
      collection: "Phone",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      images: {
        main_image: "https://www.linkpicture.com/q/product-2_3.jpg",
      },
    });
    const quantity = ref(1);

    const changeQuantity = debounce(function () {
      if (product.value.quantity !== quantity.value) {
        ctx.emit("quantity", {
          id: product.value.id,
          quantity: quantity.value,
          properties: product.value.properties,
          variant_id: product.value.variant_id,
          index: product.value.index,
        });
      }
    });

    return {
      slides,
      quantity,
      changeQuantity,
      productsRecommend,
      product,
    };
  },
};
</script>

<style scoped></style>

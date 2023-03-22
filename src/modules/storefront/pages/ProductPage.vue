<template>
  <div class="py-4 product-page">
    <div class="container">
      <BreadCrumb :pages="['products']" :page="product.title" />
      <div class="d-flex flex-column">
        <div class="row justify-content-center">
          <div class="col-lg-6 product-page__media">
            <ProductImages :images="slides" />
          </div>
          <div
            :class="['col-lg-5 product-page__info', { 'ms-4': !mobileDevice }]"
          >
            <div class="mb-3">
              <h3 class="fw-bold">{{ product.title }}</h3>
            </div>
            <div class="mb-3 fs-3 fw-semibold product-page__info-price">
              <span class="me-3 new-price">${{ product.price }}</span>
              <span
                v-if="product.compare_price"
                class="text-decoration-line-through opacity-50 old-price"
              >
                ${{ product.compare_price }}
              </span>
            </div>
            <div
              class="d-flex align-items-center mb-3 product-page__info-color"
            >
              <span class="me-3">Color:</span>
              <div class="d-flex widget-color"></div>
            </div>
            <div
              class="d-flex align-items-center mb-3 product-page__info-quantity"
            >
              <span class="me-3">Qty:</span>
              <ProductQuantity
                v-model.number="quantity"
                class="flex"
                :min="0"
                @input="changeQuantity(...arguments)"
                @blur="changeQuantity(...arguments)"
                style="width: 120px"
              />
            </div>
            <button
              class="px-3 py-2 btn btn-primary text-uppercase"
              :class="mobileDevice ? 'w-100' : 'w-50'"
            >
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
import { computed, reactive, ref, onBeforeMount, nextTick } from "vue";
import { useMobileDetection } from "vue3-mobile-detection";
import ProductImages from "@/modules/storefront/components/ProductImages";
import ProductQuantity from "@/modules/storefront/components/ProductQuantity";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import ProductsCarousel from "@/modules/storefront/components/ProductsCarousel";
import debounce from "@popperjs/core/lib/utils/debounce";
import api from "@/modules/storefront/api/productService";
import { useRoute, useRouter } from "vue-router";

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
    const route = useRoute();
    const router = useRouter();
    const { isMobile } = useMobileDetection();
    const mobileDevice = computed(() => isMobile());
    const slides = computed(() => product.value.images || []);

    const quantity = ref(1);
    const product = ref({});

    onBeforeMount(() => {
      nextTick(async () => {
        product.value = await api.getProductByHandle(route.params.handle);
        if (!product.value.id) {
          await router.push({ name: "not-found" });
        }
      });
    });

    const productsRecommend = reactive([
      {
        id: 1,
        handle: "product-1",
        title: "Product A",
        price: 999,
        collection: "Phone",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: [
          {
            url: "https://www.linkpicture.com/q/product-1.jpg",
          },
        ],
      },
      {
        id: 2,
        handle: "product-2",
        title: "Product A",
        price: 999,
        collection: "Phone",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: [
          {
            url: "https://www.linkpicture.com/q/product-2_3.jpg",
          },
        ],
      },
      {
        id: 3,
        handle: "product-3",
        title: "Product A",
        price: 999,
        collection: "Phone",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: [
          {
            url: "https://www.linkpicture.com/q/product-3_3.jpg",
          },
        ],
      },
      {
        id: 4,
        handle: "product-4",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: [
          {
            url: "https://www.linkpicture.com/q/product-4_2.jpg",
          },
        ],
      },
      {
        id: 5,
        handle: "product-5",
        title: "Product A",
        collection: "Phone",
        price: 999,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: [
          {
            url: "https://www.linkpicture.com/q/product-5_1.jpg",
          },
        ],
      },
    ]);

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
      mobileDevice,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="py-4">
    <BreadCrumb
      :pages="['products']"
      :page="`MacBook Pro M2 8GB + 256GB 13.3-inch (Space Gray)`"
    />
    <div class="container d-flex flex-column product-page">
      <div class="d-flex">
        <div class="product-page__media">
          <ProductImages :images="slides" />
        </div>
        <div class="ms-4 product-page__info">
          <div class="mb-4">
            <h3>MacBook Pro M2 8GB + 256GB 13.3-inch (Space Gray)</h3>
          </div>
          <div class="d-flex align-items-center mb-4 product-page__info-color">
            <span class="me-3">Color:</span>
            <div class="d-flex widget-color">
              <span class="me-3">White</span>
              <span class="me-3">Grey</span>
            </div>
          </div>
          <div class="mb-4 product-page__info-price">$1,500.00</div>
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
          <button class="px-3 py-2 w-50 btn btn-primary">Add to cart</button>
        </div>
      </div>
      <div>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Description
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Additional information
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Shipping & Returns
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef } from "vue";
import ProductImages from "@/modules/storefront/components/ProductImages";
import ProductQuantity from "@/modules/storefront/components/ProductQuantity";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import debounce from "@popperjs/core/lib/utils/debounce";

export default {
  name: "ProductPage",
  components: {
    ProductImages,
    ProductQuantity,
    BreadCrumb,
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

    const product = toRef(props, "product");
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
    };
  },
};
</script>

<style scoped></style>

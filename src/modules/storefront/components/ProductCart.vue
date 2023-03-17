<template>
  <div class="d-flex mb-3 product-cart">
    <div class="me-3" :class="`product-cart__img-${settings.img_size}`">
      <img :src="product.image" alt="product image" />
    </div>
    <div
      class="d-flex product-card__info"
      :class="[
        isVerticalLayout ? 'flex-column' : 'justify-content-between w-100',
      ]"
    >
      <div class="d-flex flex-column">
        <span class="mb-1">{{ product.title }}</span>
        <span class="mb-1 product-cart__info-option">product option</span>
      </div>
      <span class="mb-1 fw-bold">$999.000</span>
      <div
        class="d-flex product-cart__info-action"
        :class="[
          isVerticalLayout
            ? 'flex-wrap align-items-center'
            : 'flex-column justify-content-start',
        ]"
      >
        <ProductQuantity
          v-model.number="quantity"
          class="mb-2"
          :class="{ 'me-2': isVerticalLayout }"
          :min="0"
          @input="changeQuantity(...arguments)"
          @blur="changeQuantity(...arguments)"
        />
        <a href="#" :class="{ 'align-self-end': !isVerticalLayout }">
          Remove item
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRef } from "vue";
import ProductQuantity from "@/modules/storefront/components/ProductQuantity";
import debounce from "@popperjs/core/lib/utils/debounce";

export default {
  name: "ProductCart",
  components: {
    ProductQuantity,
  },
  props: {
    settings: {
      type: Object,
      default: () => {},
    },
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["click", "quantity", "remove"],
  setup(props, ctx) {
    const isVerticalLayout = computed(
      () => props.settings.layout === "vertical"
    );

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
      quantity,
      changeQuantity,
      isVerticalLayout,
    };
  },
};
</script>

<style scoped></style>

<template>
  <div class="d-flex mb-3 product-cart">
    <figure class="me-3">
      <img
        src="https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="product image"
      />
    </figure>
    <div class="d-flex flex-column product-card__info">
      <span class="mb-1">product title</span>
      <span class="mb-1 product-cart__info-option">product option</span>
      <span class="mb-1 fw-bold">$999.000</span>
      <div class="">
        <ProductQuantity
          v-model.number="quantity"
          class="flex"
          :min="0"
          @input="changeQuantity(...arguments)"
          @blur="changeQuantity(...arguments)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef } from "vue";
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
    };
  },
};
</script>

<style scoped></style>

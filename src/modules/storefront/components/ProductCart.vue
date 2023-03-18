<template>
  <div class="d-flex mb-3 product-cart">
    <div :class="['me-3', `product-cart__img-${settings.img_size}`]">
      <a href="#" @click="goToProduct(product.handle)">
        <img :src="product.image" :alt="product.title" />
      </a>
    </div>
    <div
      :class="[
        'd-flex product-cart__info',
        isVerticalLayout ? 'flex-column' : 'justify-content-between w-100',
      ]"
    >
      <div class="d-flex flex-column me-4 product-cart__info-title">
        <a class="mb-1" href="#" @click="goToProduct(product.handle)">
          {{ product.title }}
        </a>
        <span class="mb-1 product-cart__info-option">product option</span>
      </div>
      <div :class="['d-flex', { 'flex-column': !isVerticalLayout }]">
        <span class="mb-1 me-2 fw-bold">${{ product.price }}</span>
        <span
          v-if="product.compare_price"
          class="mb-1 opacity-50 text-decoration-line-through"
        >
          ${{ product.compare_price }}
        </span>
      </div>
      <div
        v-if="settings.enable_action"
        :class="[
          'd-flex product-cart__info-action',
          isVerticalLayout
            ? 'flex-wrap align-items-center'
            : 'flex-column justify-content-start',
        ]"
      >
        <ProductQuantity
          v-model.number="quantity"
          :class="['mb-2', { 'me-2': isVerticalLayout }]"
          :min="0"
          @input="changeQuantity(...arguments)"
          @blur="changeQuantity(...arguments)"
        />
        <a href="#" :class="['mb-2', { 'align-self-end': !isVerticalLayout }]">
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
import { useRouter } from "vue-router";

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
    const router = useRouter();

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

    const goToProduct = (handle) => {
      router.push({ name: "product", params: { handle: handle } });
    };

    return {
      quantity,
      changeQuantity,
      isVerticalLayout,
      goToProduct,
    };
  },
};
</script>

<style scoped></style>

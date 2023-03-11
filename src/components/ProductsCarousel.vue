<template>
  <div class="product-carousel">
    <carousel class="mb-lg-4" :options="options">
      <div
        class="slide"
        v-for="(product, index) in products"
        :key="index"
        :class="`slide--${index}`"
        @click="$refs.thumbnails.goTo(index)"
      >
        <div>
          <ProductCard :product="product" />
        </div>
      </div>
      <template v-slot:prevButton>
        <i class="bi bi-chevron-left"></i>
      </template>
      <template v-slot:nextButton>
        <i class="bi bi-chevron-right"></i>
      </template>
    </carousel>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import ProductCard from "@/modules/storefront/components/ProductCard";
import { computed } from "vue";
export default {
  name: "ProductsCarousel",
  components: {
    carousel: VueAgile,
    ProductCard,
  },
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    const options = computed(() => {
      return {
        centerMode: true,
        dots: false,
        navButtons: true,
        slidesToShow: 5,
      };
    });

    return {
      options,
    };
  },
};
</script>

<style scoped>
.product-carousel {
  max-width: 100%;
}
.slide {
  height: auto;
}
</style>

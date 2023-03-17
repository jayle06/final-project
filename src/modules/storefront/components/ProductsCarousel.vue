<template>
  <div class="product-carousel">
    <carousel class="mb-lg-4" :options="options">
      <div
        class="slide me-5"
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
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 7,
            },
          },
        ],
      };
    });

    return {
      options,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-carousel {
  width: 100%;
  &::v-deep {
    .agile {
      &__list {
        padding: 30px 0 30px 30px;
      }
      &__nav-button {
        top: 195px;
        &--prev {
          left: -50px;
        }

        &--next {
          right: -50px;
        }
      }
    }
  }
}

.slide {
  height: auto;
}
</style>

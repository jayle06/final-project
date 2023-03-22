<template>
  <div class="product-images">
    <carousel
      class="product-images__main-image"
      ref="mainImage"
      :options="options1"
      :as-nav-for="asNavFor1"
    >
      <div class="p-4 border" v-for="(image, index) in images" :key="index">
        <img class="slide" :src="image.url" />
      </div>
    </carousel>
    <carousel
      class="product-images__thumbnails"
      ref="thumbnails"
      :options="options2"
      :as-nav-for="asNavFor2"
    >
      <div
        class="slide slide--thumbnail"
        v-for="(image, index) in images"
        :key="index"
        :class="`slide--${index}`"
        @click="$refs.thumbnails.goTo(index)"
      >
        <img class="slide" :src="image.url" />
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
import { ref, onMounted } from "vue";
import { VueAgile } from "vue-agile";

export default {
  name: "ProductImages",
  components: {
    carousel: VueAgile,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const asNavFor1 = ref([]);
    const asNavFor2 = ref([]);
    const thumbnails = ref(null);
    const mainImage = ref(null);
    const options1 = ref({
      dots: false,
      fade: true,
      navButtons: false,
      slidesToShow: 1,
    });

    const options2 = ref({
      centerMode: true,
      dots: false,
      navButtons: true,
      slidesToShow: 5,
    });

    onMounted(() => {
      asNavFor1.value.push(thumbnails.value);
      asNavFor2.value.push(mainImage.value);
    });

    return {
      asNavFor1,
      asNavFor2,
      thumbnails,
      mainImage,
      options1,
      options2,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-images {
  &::v-deep {
    .agile {
      &__nav-button {
        top: 25px;
        &--prev {
          left: -20px;
        }

        &--next {
          right: -20px;
        }
      }
    }
  }
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 450px;
  justify-content: center;
  &--thumbnail {
    cursor: pointer;
    height: 100px;
    padding: 0 5px;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.75;
    }
  }
  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
}
</style>

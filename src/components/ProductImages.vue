<template>
  <div class="product-images">
    <carousel
      class="main-image"
      ref="mainImage"
      :options="options1"
      :as-nav-for="asNavFor1"
    >
      <div v-for="(image, index) in images" :key="index">
        <img class="slide" :src="image" />
      </div>
    </carousel>
    <carousel
      class="thumbnails"
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
        <img class="slide" :src="image" />
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
import { ref, onMounted, computed } from "vue";
import { VueAgile } from "vue-agile";

export default {
  name: "ProductImages",
  components: {
    carousel: VueAgile,
  },
  props: {
    images: {
      type: Array,
    },
  },
  setup(props) {
    const asNavFor1 = ref([]);
    const asNavFor2 = ref([]);
    const thumbnails = ref(null);
    const mainImage = ref(null);
    const options1 = ref({
      dots: false,
      fade: true,
      navButtons: false,
    });

    const slidesToShow = computed(() =>
      props.images.length < 5 ? props.images.length : 5
    );
    const options2 = computed(() => {
      return {
        centerMode: true,
        dots: false,
        navButtons: true,
        slidesToShow: slidesToShow.value,
      };
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
  max-width: 700px;
  padding: 80px;
}

.main-image {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
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

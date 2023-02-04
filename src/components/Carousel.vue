<template>
  <carousel :options="options1">
    <div v-for="(image, index) in banners" :key="index">
      <img class="slide" :src="image.src" />
    </div>
    <template v-slot:prevButton>
      <i class="bi bi-chevron-left"></i>
    </template>
    <template v-slot:nextButton>
      <i class="bi bi-chevron-right"></i>
    </template>
  </carousel>
</template>

<script>
import { computed, ref } from "vue";
import { VueAgile } from "vue-agile";

export default {
  name: "BaseCarousel",
  components: {
    carousel: VueAgile,
  },
  props: {
    images: {
      type: Array,
    },
  },
  setup(props) {
    const options1 = ref({
      dots: true,
      fade: false,
      navButtons: true,
    });

    const banners = computed(() =>
      props.images.length > 0 ? props.images : []
    );

    return {
      banners,
      options1,
    };
  },
};
</script>

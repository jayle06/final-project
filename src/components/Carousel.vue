<template>
  <carousel v-if="types === 'slider'" class="agile">
    <div v-for="(image, index) in defaultBanner" :key="index">
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
import { computed, reactive, ref } from "vue";
import { VueAgile } from "vue-agile";

export default {
  name: "BaseCarousel",
  components: {
    carousel: VueAgile,
  },
  props: {
    types: {
      type: String,
      default: "slider",
    },
    images: {
      type: Array,
    },
  },
  setup(props) {
    const asNavFor1 = ref([]);
    const asNavFor2 = ref([]);
    const options1 = reactive({ dots: false, fade: true, navButtons: false });
    const options2 = reactive({
      autoplay: false,
      centerMode: true,
      dots: false,
      navButtons: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
          },
        },

        {
          breakpoint: 1000,
          settings: {
            navButtons: true,
          },
        },
      ],
    });
    const defaultBanner = reactive([
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
    ]);
    const banners = computed(() =>
      props.images.length > 0 ? props.images : []
    );

    return {
      asNavFor1,
      asNavFor2,
      options1,
      options2,
      banners,
      defaultBanner,
    };
  },
};
</script>

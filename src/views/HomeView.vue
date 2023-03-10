<template>
  <div class="home">
    <HeaderTop />
    <HelloWorld :images="defaultBanner" />
    <ProductImages :images="slides" />
    <ProductsCarousel :products="products" />
    <Editor />
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";
import HeaderTop from "@/modules/storefront/Header";
import HelloWorld from "@/components/Carousel";
import ProductImages from "@/components/ProductImages";
import ProductsCarousel from "@/components/ProductsCarousel";
import Editor from "@/components/TinyEditor";

export default {
  name: "HomeView",
  components: {
    HeaderTop,
    HelloWorld,
    ProductImages,
    ProductsCarousel,
    Editor,
  },
  setup() {
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
    const slides = ref([
      "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    ]);
    const products = ref([
      {
        id: 1,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image:
            "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
      },
      {
        id: 2,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image:
            "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
      },
      {
        id: 3,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image:
            "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
      },
      {
        id: 4,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image:
            "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
      },
      {
        id: 5,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        },
      },
    ]);
    return {
      defaultBanner,
      slides,
      products,
    };
  },
};
</script>

<template>
  <div class="home">
    <HeaderTop />
    <SliderBanner class="mb-5" :images="defaultBanner" />
    <CategoryItems />
    <div class="bg-light">
      <div class="container">
        <h2 class="title text-center py-4">New Arrivals</h2>
        <ProductsCarousel :products="products" />
      </div>
    </div>
    <div class="container">
      <div
        class="cta cta-border mb-5"
        :style="{
          'background-image': 'url(' + require('@/assets/demo/bg-1.jpg') + ')',
        }"
      >
        <img src="@/assets/demo/camera.png" alt="camera" class="cta-img" />
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div
              class="d-flex justify-content-end align-items-center cta-content"
            >
              <div class="cta-text text-right text-white">
                <p class="m-0">
                  Shop Today’s Deals <br />
                  <strong>Awesome Made Easy. HERO7 Black</strong>
                </p>
              </div>
              <a href="#" class="btn btn-primary btn-round">
                <span>Shop Now - $429.99</span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";
import HeaderTop from "@/modules/storefront/components/Header";
import SliderBanner from "@/components/Carousel";
import ProductsCarousel from "@/components/ProductsCarousel";
import Footer from "@/modules/storefront/components/Footer";
import CategoryItems from "@/modules/storefront/components/ListCategory";

export default {
  name: "HomeView",
  components: {
    HeaderTop,
    SliderBanner,
    ProductsCarousel,
    Footer,
    CategoryItems,
  },
  setup() {
    const defaultBanner = reactive([
      {
        id: 1,
        src: "https://www.linkpicture.com/q/slide-2.png",
      },
      {
        id: 2,
        src: "https://www.linkpicture.com/q/slide-1.png",
      },
    ]);
    const products = ref([
      {
        id: 1,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-1.jpg",
        },
      },
      {
        id: 2,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-2_3.jpg",
        },
      },
      {
        id: 3,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-3_3.jpg",
        },
      },
      {
        id: 4,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-4_2.jpg",
        },
      },
      {
        id: 5,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        images: {
          main_image: "https://www.linkpicture.com/q/product-5_1.jpg",
        },
      },
    ]);
    return {
      defaultBanner,
      products,
    };
  },
};
</script>
<style lang="scss" scoped>
.cta-border {
  position: relative;
  border: none;
  background-color: #666666;
  background-size: cover;
  font-size: 20px;
  margin-left: 70px;
  padding-top: 49px;
  padding-bottom: 49px;
  height: 150px;
}

.cta-border .cta-img {
  position: absolute;
  left: -70px;
  top: -5px;
}

.cta-border .cta-text {
  margin-right: 0;
}

.cta-border .cta-text p {
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #fff;
}

.cta-border .cta-text::before {
  display: none;
}

.cta-border p {
  max-width: none;
}

.cta-border p strong {
  font-weight: 600;
}

.cta-border .btn:not(.btn-block) {
  min-width: 230px;
}

.cta-border .btn {
  margin-right: 70px;
  margin-left: 70px;
}

.cta-border .btn i:last-child {
  margin-left: 25px;
}

.cta-heading {
  margin-bottom: 22px;
}

.cta-heading .cta-title {
  margin-bottom: 2px;
}

.cta-title {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.025em;
}

.cta-desc {
  font-size: 16px;
}

.cta .btn:not(.btn-block) {
  min-width: 178px;
}
</style>

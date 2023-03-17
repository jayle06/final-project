<template>
  <div class="home">
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

    <div class="container bg-transparent">
      <div class="py-4 footer__top">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div
              class="d-flex align-items-center py-4 footer__top-icon-box footer__top-icon-box-side"
            >
              <span class="footer__top-icon-box-icon text-dark">
                <i class="bi bi-rocket-takeoff"></i>
              </span>
              <div class="footer__top-icon-box-content">
                <h3 class="footer__top-icon-box-title">Free Shipping</h3>
                <p class="mb-0">Orders $50 or more</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="d-flex align-items-center py-4 footer__top-icon-box footer__top-icon-box-side"
            >
              <span class="footer__top-icon-box-icon text-dark">
                <i class="bi bi-arrow-counterclockwise"></i>
              </span>
              <div class="footer__top-icon-box-content">
                <h3 class="footer__top-icon-box-title">Free Returns</h3>
                <p class="mb-0">Within 30 days</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="d-flex align-items-center py-4 footer__top-icon-box footer__top-icon-box-side"
            >
              <span class="footer__top-icon-box-icon text-dark">
                <i class="bi bi-info-circle"></i>
              </span>
              <div class="footer__top-icon-box-content">
                <h3 class="footer__top-icon-box-title">Get 20% Off 1 Item</h3>
                <p class="mb-0">when you sign up</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div
              class="d-flex align-items-center py-4 footer__top-icon-box footer__top-icon-box-side"
            >
              <span class="footer__top-icon-box-icon text-dark">
                <i class="bi bi-life-preserver"></i>
              </span>
              <div class="footer__top-icon-box-content">
                <h3 class="footer__top-icon-box-title">We Support</h3>
                <p class="mb-0">24/7 amazing services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="cta bg-image bg-dark pt-4 pb-5 mb-0"
        :style="{
          'background-image': 'url(' + require('@/assets/demo/bg-5.jpg') + ')',
        }"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-10 col-md-8 col-lg-6">
              <div class="cta-heading text-center">
                <h3 class="cta-title text-white">Get The Latest Deals</h3>
                <p class="cta-desc text-white">
                  and receive
                  <span class="font-weight-normal">$20 coupon</span> for first
                  shopping
                </p>
              </div>

              <form action="#">
                <div class="input-group input-group-round">
                  <input
                    type="email"
                    class="form-control form-control-white"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    required=""
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <span>Subscribe</span
                      ><i class="icon-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from "vue";
import SliderBanner from "@/components/Carousel";
import ProductsCarousel from "@/modules/storefront/components/ProductsCarousel";
import CategoryItems from "@/modules/storefront/components/ListCategory";

export default {
  name: "HomePage",
  components: {
    SliderBanner,
    ProductsCarousel,
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

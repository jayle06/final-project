<template>
  <div class="py-4 collections">
    <BreadCrumb page="collections" />
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <div class="position-relative banner">
            <img
              src="https://www.nettoimports.com/wp-content/uploads/2022/04/macbook13.jpg"
              alt="Banner"
            />
            <a
              class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
              href="#"
            >
              <span class="fw-semibold fs-3">Computer & Laptop</span>
            </a>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="position-relative banner">
                <img src="@/assets/demo/cats/11.jpg" alt="Banner" />
                <a
                  class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <span class="fw-semibold fs-3">Audio</span>
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="position-relative banner">
                <img src="@/assets/demo/cats/7.jpg" alt="Banner" />
                <a
                  class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <span class="fw-semibold fs-3">Smart phones</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-sm-6">
              <div class="position-relative banner">
                <img src="@/assets/demo/cats/8.jpg" alt="Banner" />
                <a
                  class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <span class="fw-semibold fs-3">Digital Cameras</span>
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="position-relative banner">
                <img src="@/assets/demo/cats/10.jpg" alt="Banner" />
                <a
                  class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <span class="fw-semibold fs-3">Smart watches</span>
                </a>
              </div>
            </div>
          </div>
          <div class="position-relative banner">
            <img src="@/assets/demo/cats/9.jpg" alt="Banner" />
            <a
              class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
              href="#"
            >
              <span class="fw-semibold fs-3">Televisions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
export default {
  name: "CollectionListPage",
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: block;
  margin-bottom: 20px;
  background-color: #ccc;
  img {
    max-width: none;
    width: 100%;
    height: auto;
  }

  a {
    top: 0;
    left: 0;
    text-decoration: none;
    color: #ccc;
    background-color: rgba(#000, 0.7);
    opacity: 0;
    transition: ease-in all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
}
</style>

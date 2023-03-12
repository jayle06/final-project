<template>
  <div class="container">
    <h2 class="title text-center mb-4">Explore Popular Categories</h2>
    <div class="pt-2">
      <div class="row">
        <div class="col-6 col-sm-4 col-lg-2">
          <a
            href="#"
            class="d-flex flex-column justify-content-end align-items-center cat-block"
          >
            <div class="d-flex align-items-center cat-block-media">
              <figure>
                <span>
                  <img src="@/assets/demo/cats/1.png" alt="Category image" />
                </span>
              </figure>
            </div>
            <h3 class="cat-block-title mt-4">Computer &amp; Laptop</h3>
          </a>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <a
            href="#"
            class="d-flex flex-column justify-content-end align-items-center cat-block"
          >
            <div class="d-flex align-items-center cat-block-media">
              <figure>
                <span>
                  <img src="@/assets/demo/cats/2.png" alt="Category image" />
                </span>
              </figure>
            </div>

            <h3 class="cat-block-title mt-4">Digital Cameras</h3>
          </a>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <a
            href="#"
            class="d-flex flex-column justify-content-end align-items-center cat-block"
          >
            <div class="d-flex align-items-center cat-block-media">
              <figure>
                <span>
                  <img src="@/assets/demo/cats/3.png" alt="Category image" />
                </span>
              </figure>
            </div>

            <h3 class="cat-block-title mt-4">Smart Phones</h3>
          </a>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <a
            href="#"
            class="d-flex flex-column justify-content-end align-items-center cat-block"
          >
            <div class="d-flex align-items-center cat-block-media">
              <figure>
                <span>
                  <img src="@/assets/demo/cats/4.png" alt="Category image" />
                </span>
              </figure>
            </div>
            <h3 class="cat-block-title mt-4">Televisions</h3>
          </a>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <a
            href="#"
            class="d-flex flex-column justify-content-end align-items-center cat-block"
          >
            <div class="d-flex align-items-center cat-block-media">
              <figure>
                <span>
                  <img src="@/assets/demo/cats/5.png" alt="Category image" />
                </span>
              </figure>
            </div>
            <h3 class="cat-block-title mt-4">Audio</h3>
          </a>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <a
            href="#"
            class="d-flex flex-column justify-content-end align-items-center cat-block"
          >
            <div class="d-flex align-items-center cat-block-media">
              <figure>
                <span>
                  <img src="@/assets/demo/cats/6.png" alt="Category image" />
                </span>
              </figure>
            </div>
            <h3 class="cat-block-title mt-4">Smart Watches</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCategory",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.cat-blocks-container [class*="col-"] {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.cat-block {
  text-align: center;
  margin-bottom: 30px;
  &-media {
    height: 86px;
  }
}

.cat-block figure {
  display: inline-flex;
  align-items: center;
  position: relative;
  flex: 1;
  margin: 0;
}

.cat-block figure span {
  position: relative;
}

.cat-block figure span:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 45%;
  width: 105%;
  margin-left: -45%;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.35s ease;
  filter: blur(3px);
  opacity: 0.5;
}

.cat-block img {
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.35s ease;
}

.cat-block:hover img {
  transform: translateY(-14px);
}

.cat-block:hover figure span:after {
  opacity: 1;
}

.cat-block-title {
  color: #333;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.01em;
  margin-bottom: 0;
}
</style>

<template>
  <div class="py-4">
    <BreadCrumb page="about" />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="about-text text-center mt-3">
            <h2 class="title text-center mb-2 fs-4">Who We Are</h2>
            <p class="mb-0">
              Tại đây, chúng tôi cung cấp cho bạn đầy đủ về thế giới Mac từ
              những chiếc máy tính Apple tuyệt vời cho đến những món phụ kiện
              chất lượng như ổ cứng, cáp sạc...Tất cả đều sẵn sàng cho bạn lựa
              chọn! Hơn thế nữa, các thương hiệu Âm thanh hàng đầu như Bose,
              JBL, Harman Kardon, Marshall... cũng đều được trưng bày sẵn sàng
              giúp bạn nghe thử một cách tuyệt vời nhất cho thế giới âm thanh
              của riêng bạn.
            </p>
            <img
              src="@/assets/signature.png"
              alt="signature"
              class="mx-auto mb-5"
            />
            <img
              src="https://qmacstore.com/media/banner-macbook-air-2022-chip-M2.jpg"
              alt="image"
              class="mx-auto mb-5"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-sm-6">
          <div class="icon-box icon-box-sm text-center">
            <span class="icon-box-icon">
              <i class="bi bi-puzzle"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Design Quality</h3>
              <p class="mb-0">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero <br />eu augue.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="icon-box icon-box-sm text-center">
            <span class="icon-box-icon">
              <i class="bi bi-life-preserver"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Professional Support</h3>
              <p class="mb-0">
                Praesent dapibus, neque id cursus faucibus, <br />tortor neque
                egestas augue, eu vulputate <br />magna eros eu erat.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="icon-box icon-box-sm text-center">
            <span class="icon-box-icon">
              <i class="bi bi-suit-heart"></i>
            </span>
            <div class="icon-box-content">
              <h3 class="icon-box-title">Made With Love</h3>
              <p class="mb-0">
                Pellentesque a diam sit amet mi ullamcorper <br />vehicula.
                Nullam quis massa sit amet <br />nibh viverra malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
export default {
  name: "AboutPage",
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.icon-box-icon {
  font-size: 30px;
}
.icon-box-title {
  color: #333333;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.025em;
  margin-bottom: 9px;
}
p {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  color: #777;
}
</style>

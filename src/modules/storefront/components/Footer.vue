<template>
  <div class="container footer">
    <div class="icon-boxes-container bg-transparent">
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
    <div class="row footer__info">
      <div class="col-sm-6 col-lg-3">
        <div class="widget widget-about">
          <img src="@/assets/logo.png" alt="logo" />
          <p>
            Praesent dapibus, neque id cursus ucibus, tortor neque egestas
            augue, eu vulputate magna eros eu erat.
          </p>

          <div class="position-relative widget-call">
            <i
              class="bi bi-telephone position-absolute d-inline-block widget-call__icon"
            ></i>
            Got Question? Call us 24/7
            <a class="d-block" href="tel:#">+0123 456 789</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="widget">
          <h4 class="widget-title">Useful Links</h4>

          <ul class="widget-list">
            <li><a href="about.html">About Molla</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">How to shop on Molla</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact us</a></li>
          </ul>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3">
        <div class="widget">
          <h4 class="widget-title">Customer Service</h4>
          <ul class="widget-list">
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Money-back guarantee!</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="widget">
          <h4 class="widget-title">My Account</h4>
          <ul class="widget-list">
            <li><a href="#">Sign In</a></li>
            <li><a href="cart.html">View Cart</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom py-3">
      <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0">Copyright © 2019 Molla Store. All Rights Reserved.</p>
        <figure class="mb-0">
          <img src="@/assets/payments.png" alt="Payment methods" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped></style>

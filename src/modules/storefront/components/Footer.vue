<template>
  <div class="footer">
    <div class="container">
      <div class="row mt-5 footer__info">
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
              <li>
                <router-link to="cart">View Cart </router-link>
              </li>
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
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped></style>

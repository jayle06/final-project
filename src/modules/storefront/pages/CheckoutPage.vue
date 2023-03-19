<template>
  <div class="py-4">
    <BreadCrumb :pages="['cart']" page="checkout" />
    <div class="checkout my-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h2 class="my-3 checkout__title">Billing Details</h2>
            <label>Email address *</label>
            <input type="email" class="form-control" required="" />
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input me-2"
                id="checkout-create-acc"
              />
              <label class="custom-control-label" for="checkout-create-acc">
                Create an account?
              </label>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label>First Name *</label>
                <input type="text" class="form-control" required="" />
              </div>
              <div class="col-sm-6">
                <label>Last Name *</label>
                <input type="text" class="form-control" required="" />
              </div>
            </div>
            <label>Street address *</label>
            <input
              type="text"
              class="form-control"
              placeholder="House number and Street name"
              required=""
            />
            <div class="row">
              <div class="col-sm-6">
                <label>City *</label>
                <input type="text" class="form-control" required="" />
              </div>
              <div class="col-sm-6">
                <label>Postcode *</label>
                <input type="text" class="form-control" required="" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label>State *</label>
                <input type="text" class="form-control" required="" />
              </div>
              <div class="col-sm-6">
                <label>Country *</label>
                <input type="text" class="form-control" required="" />
              </div>
            </div>
            <label>Phone *</label>
            <input type="tel" class="form-control" required="" />
            <label>Order notes (optional)</label>
            <textarea
              class="form-control"
              cols="30"
              rows="4"
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
          </div>
          <div class="col-lg-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
import OrderSummary from "@/modules/storefront/components/OrderSummary";
export default {
  name: "CheckoutPage",
  components: {
    BreadCrumb,
    OrderSummary,
  },
};
</script>

<style lang="css" scoped>
.form-control {
  border: 1px solid #ebebeb;
  margin-bottom: 20px;
}

p {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  color: #777;
}
</style>

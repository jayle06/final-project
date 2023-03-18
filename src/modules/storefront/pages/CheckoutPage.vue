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
  height: 40px;
  padding: 8.5px 20px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  color: #777;
  background-color: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 0;
  margin-bottom: 20px;
  transition: all 0.3s;
  box-shadow: none;
}
select.form-control:not([size]):not([multiple]) {
  height: 40px;
}
.form-control-white {
  border-color: #fff;
}
.form-control:focus {
  color: #777;
  background-color: #fff;
  border-color: #39f;
  box-shadow: none;
  outline: none !important;
}
.form-control::placeholder {
  color: #777;
}
textarea.form-control {
  min-height: 130px;
  padding-top: 11px;
  padding-bottom: 11px;
}
.form-control-rounded {
  border-radius: 2px;
}
.input-group-round .form-control {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.input-group-round > .input-group-append > .btn {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
label {
  color: #666;
  font-weight: 300;
  font-size: 14px;
  margin: 0 0 11px;
}
.form-text {
  color: #999;
  line-height: 1.5;
  margin-top: 0;
}
.form-control + .form-text {
  margin-top: -5px;
  margin-bottom: 6px;
}
small.form-text {
  font-size: 85%;
}
.required-field > label::after {
  content: "*";
  color: #e02b27;
  font-size: 12px;
  margin: 0 0 0 4.5px;
}
.required {
  color: #e02b27;
  font-size: 12px;
}
.required + .form-footer {
  margin-top: 8px;
}
.form-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 6px;
}

p {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  color: #777;
}
</style>

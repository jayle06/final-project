<template>
  <div class="mb-4 px-4 pt-3 summary">
    <h3 class="pb-3 mb-4 summary__title">Your Order</h3>
    <table class="table table-summary">
      <thead>
        <tr>
          <th>Product</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><a href="#">Beige knitted elastic runner shoes</a></td>
          <td>$84.00</td>
        </tr>

        <tr>
          <td><a href="#">Blue utility pinafore denimdress</a></td>
          <td>$76,00</td>
        </tr>
        <tr class="summary-subtotal">
          <td>Subtotal:</td>
          <td>$160.00</td>
        </tr>
        <tr>
          <td>Shipping:</td>
          <td>Free shipping</td>
        </tr>
        <tr class="summary-total">
          <td>Total:</td>
          <td>$160.00</td>
        </tr>
      </tbody>
    </table>

    <div class="accordion-summary" id="accordion-payment">
      <div class="card">
        <div class="card-header" id="heading-1">
          <h2 class="card-title">
            <a
              role="button"
              data-toggle="collapse"
              href="#collapse-1"
              aria-expanded="false"
              aria-controls="collapse-1"
              class="collapsed"
            >
              Direct bank transfer
            </a>
          </h2>
        </div>
        <div
          id="collapse-1"
          class="collapse"
          aria-labelledby="heading-1"
          data-parent="#accordion-payment"
          style=""
        >
          <div class="card-body">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="heading-3">
          <h2 class="card-title">
            <a
              class="collapsed"
              role="button"
              data-toggle="collapse"
              href="#collapse-3"
              aria-expanded="false"
              aria-controls="collapse-3"
            >
              Cash on delivery
            </a>
          </h2>
        </div>
        <div
          id="collapse-3"
          class="collapse"
          aria-labelledby="heading-3"
          data-parent="#accordion-payment"
          style=""
        >
          <div class="card-body">
            Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
            eros.
          </div>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="btn btn-outline-primary-2 btn-order btn-block w-100"
      @mouseenter="hoverCheckout = true"
      @mouseleave="hoverCheckout = false"
    >
      <span v-if="!hoverCheckout" class="btn-text"> Place Order </span>
      <span v-else class="btn-hover-text"> Proceed to Checkout </span>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "OrderSummary",
  setup() {
    const hoverCheckout = ref(false);
    return {
      hoverCheckout,
    };
  },
};
</script>

<style scoped></style>

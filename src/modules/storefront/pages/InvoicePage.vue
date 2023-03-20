<template>
  <div class="pt-4">
    <BreadCrumb :pages="['profile', 'orders']" page="invoice" />
    <div class="container my-5">
      <div ref="invoiceRef" class="mb-5">
        <div class="w-100 p-5 invoice">
          <h2 class="mb-2 fw-bold">invoice</h2>
          <p>order #{{ order.id }}</p>
          <div class="row border-top pt-3 pb-5">
            <div class="col-lg-6 d-flex flex-column">
              <span class="fw-semibold">Billed To:</span>
              <span>
                Twitter, Inc. 795 Folsom Ave, Suite 600 San Francisco, CA 94107
              </span>
              <span>
                <a href="tel:#">P: 0123456</a>
              </span>
            </div>
            <div class="col-lg-6 d-flex flex-column align-items-end">
              <span class="fw-semibold">Shipped To:</span>
              <span> Hoang Le </span>
              <span>
                Twitter, Inc. 795 Folsom Ave, Suite 600 San Francisco, CA 94107
              </span>
              <span>
                <a href="tel:#">P: 0123456</a>
              </span>
            </div>
          </div>
          <h4 class="mb-2 text-uppercase">Order summary</h4>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Products</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in order.products" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.title }}</td>
                  <td>${{ item.price }}</td>
                  <td>{{ item.qty }}</td>
                  <td>${{ item.subtotal }}</td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                  <th scope="row" class="text-uppercase">subtotal:</th>
                  <td>${{ order.subtotal }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-outline-primary-2"
        @click="printInvoice"
      >
        <span class="fs-6"> Print invoice </span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";

export default {
  name: "InvoicePage",
  components: {
    BreadCrumb,
  },
  setup() {
    const invoiceRef = ref();
    const order = ref({
      id: 1001,
      products: [
        {
          id: 1,
          title: "Macbook pro 2022 M2 RAM 16GB 500GB",
          price: 999,
          qty: 1,
          subtotal: 999,
        },
        {
          id: 2,
          title: "Macbook pro 2020 M1 RAM 16GB 500GB",
          price: 899,
          qty: 1,
          subtotal: 899,
        },
      ],
      subtotal: 1898,
      created_at: "19-03-2023",
      status: "done",
    });
    const printInvoice = () => {
      const invoiceWindow = window.open(
        "",
        "",
        `height=${window.innerHeight}, width=${window.innerWidth}`
      );
      invoiceWindow.document.write("<html><body>");
      invoiceWindow.document.write(invoiceRef.value.innerHTML);
      invoiceWindow.document.write("</body></html>");
      invoiceWindow.document.close();
      invoiceWindow.print();
    };
    return {
      order,
      invoiceRef,
      printInvoice,
    };
  },
};
</script>

<style lang="scss" scoped>
.invoice {
  border: 1px solid #ebebeb;
}
</style>

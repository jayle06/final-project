<template>
  <div class="pt-4">
    <BreadCrumb :pages="['profile']" page="orders" />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-3">
          <div class="p-4 d-flex flex-column summary">
            <router-link
              href="#"
              to="/users/my-profile"
              class="pb-4 mb-4 text-center fw-bold border-bottom opacity-50"
            >
              My Profile
            </router-link>
            <span href="#" class="text-center fw-bold">My Orders</span>
          </div>
        </div>
        <div class="col-lg-9">
          <h2 class="mb-3 text-center">My orders</h2>
          <div class="table-responsive p-5 orders-table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Products</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" class="align-middle">
                    <a href="#">#00001</a>
                  </th>
                  <td class="align-middle">
                    Macbook pro 2022 M2 RAM 16GB 500GB
                  </td>
                  <td class="align-middle">19-03-2023</td>
                  <td class="align-middle">done</td>
                  <td class="align-middle">
                    <router-link
                      :to="`/users/invoice/1`"
                      class="btn btn-outline-primary-2 btn-order"
                    >
                      <span class="fs-6"> Invoice </span>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
export default {
  name: "OrdersPage",
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.orders-table {
  min-height: 500px;
  border: 1px solid #ebebeb;
}
</style>

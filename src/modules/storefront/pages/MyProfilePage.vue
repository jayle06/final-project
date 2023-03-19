<template>
  <div class="pt-4">
    <BreadCrumb page="profile" />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-3">
          <div class="p-4 d-flex flex-column summary">
            <span href="#" class="pb-4 mb-4 text-center fw-bold border-bottom">
              My Profile
            </span>
            <router-link
              to="/users/order-history"
              href="#"
              class="text-center fw-bold opacity-50"
            >
              My Orders
            </router-link>
          </div>
        </div>
        <div class="col-lg-9">
          <h2 class="mb-3 text-center">My profile</h2>
          <div class="p-5 profile-content">
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
            <label>Email address *</label>
            <input type="email" class="form-control" required="" />
            <label>Phone *</label>
            <input type="tel" class="form-control" required="" />
            <label>Address *</label>
            <input type="text" class="form-control" required="" />
            <button
              type="submit"
              class="btn btn-outline-primary-2 btn-order btn-lg btn-block"
            >
              <span class="fs-6"> Save changes </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/modules/storefront/components/BreadCrumb";
export default {
  name: "MyProfilePage",
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  border: 1px solid #ebebeb;
  margin-bottom: 20px;
}
.profile-content {
  border: 1px solid #ebebeb;
}
</style>

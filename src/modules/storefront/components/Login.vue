<template>
  <div class="login">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-4 position-relative login__content">
        <i
          class="bi bi-x position-absolute login__content-close"
          data-bs-dismiss="modal"
        ></i>
        <div class="modal-header justify-content-center border-0 py-0">
          <h1 class="modal-title fs-4" id="modalLabel">Sign In</h1>
        </div>
        <div class="modal-body">
          <form action="#">
            <div class="form-group">
              <label for="singin-email">Username or email address *</label>
              <input
                type="text"
                class="form-control"
                id="singin-email"
                name="singin-email"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="singin-password">Password *</label>
              <input
                type="password"
                class="form-control"
                id="singin-password"
                name="singin-password"
                required=""
              />
            </div>
            <div class="d-flex justify-content-between form-footer">
              <button type="submit" class="btn btn-outline-primary-2">
                <span class="me-2">LOG IN</span>
                <i class="bi bi-arrow-right"></i>
              </button>
              <a href="#" class="forgot-link"
                >Don't have an account? Sign up here</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalLogin",
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
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

.required-field > label::after {
  content: "*";
  color: #e02b27;
  font-size: 12px;
  margin: 0 0 0 4.5px;
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
</style>

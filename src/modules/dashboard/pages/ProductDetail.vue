<template>
  <div class="py-5">
    <div class="container">
      <h3 class="mb-4 fw-semibold">{{ product.title }}</h3>
      <label>Title *</label>
      <input
        v-model="product.title"
        type="text"
        class="form-control mb-3"
        required=""
      />
      <label>Images *</label>
      <UploadImage class="mb-3" />
      <label>Description *</label>
      <TinyEditor class="mb-3" />
      <div class="row">
        <div class="col-sm-6">
          <label>Price *</label>
          <input type="text" class="form-control mb-3" required="" />
        </div>
        <div class="col-sm-6">
          <label>Compare Price</label>
          <input type="text" class="form-control mb-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import TinyEditor from "@/components/TinyEditor";
import UploadImage from "@/modules/dashboard/components/UploadImage";

export default {
  name: "ProductDetail",
  components: {
    TinyEditor,
    UploadImage,
  },
  setup() {
    const product = reactive({
      id: 1002,
      created_at: "12-3-2023",
      status: "active",
      title: "Macbook pro 2022 M2 RAM 16GB 500GB",
      price: 999,
    });

    return {
      product,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  color: #000;
}
</style>

<template>
  <div class="d-flex align-items-center input-file">
    <div v-for="(img, index) in images" :key="index">
      <img :src="img" class="me-3" />
    </div>
    <input type="file" id="file" ref="fileRef" @change="handleFileUpload()" />
    <button @click="$refs.fileRef.click()">+</button>
    <button @click="submitFile()">Upload</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import api from "@/modules/dashboard/api/uploadService";

export default {
  name: "UploadImage",
  setup() {
    const fileRef = ref();
    const file = ref("");
    const images = reactive([]);

    const submitFile = () => {
      let formData = new FormData();
      if (file.value !== "") {
        formData.append("file", file.value);
        api
          .uploadImages(formData)
          .then((response) => {
            images.push(response);
            console.log("SUCCESS!!");
          })
          .catch(function () {
            console.log("FAILURE!!");
          });
      }
    };

    const handleFileUpload = () => {
      file.value = fileRef.value.files[0];
    };

    return {
      file,
      fileRef,
      images,
      submitFile,
      handleFileUpload,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-file {
  img {
    height: 100px;
    width: 100px;
    border: 1px solid #d7d7d7;
  }

  input {
    display: none;
  }

  button {
    height: 100px;
    width: 100px;
    background-color: #fff;
    border: 1px dashed #d7d7d7;
    cursor: pointer;
  }
}
</style>

<template>
  <div>
    <editor
      :api-key="tinyAPIKey"
      :value="value"
      @input="onInput"
      :init="tinyMCEOptions"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { computed } from "vue";

export default {
  name: "TinyEditor",
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      default: "Le Minh Hoang",
    },
    height: {
      type: Number,
      default: 500,
    },
  },
  setup(props, ctx) {
    const tinyAPIKey = computed(() => process.env.VUE_TINYMCU_EDITOR_API_KEY);
    const tinyMCEOptions = computed(() => {
      return {
        height: props.height || 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help",
      };
    });

    const onInput = (val) => {
      console.log(val, props.value);
      ctx.emit("input", val);
    };

    return {
      tinyAPIKey,
      tinyMCEOptions,
      onInput,
    };
  },
};
</script>

<style scoped></style>

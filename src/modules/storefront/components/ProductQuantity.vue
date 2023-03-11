<template>
  <div class="quantity">
    <div class="d-flex quantity__layout">
      <div
        class="d-flex align-items-center justify-content-center quantity__layout-decrease"
        :disabled="disable"
        @click="changeQuantity(-1)"
      >
        <i class="bi bi-dash"></i>
      </div>
      <input
        type="number"
        :value="internalValue"
        :disabled="disable"
        :min="min"
        :max="max"
        @input="inputValue"
        @blur="blurValue"
      />
      <div
        class="d-flex align-items-center justify-content-center quantity__layout-increase"
        :disabled="disable"
        @click="changeQuantity(1)"
      >
        <i class="bi bi-plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef, watch } from "vue";

export default {
  name: "ProductQuantity",
  props: {
    modelValue: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "input", "blur"],
  setup(props, ctx) {
    const modelValue = toRef(props, "modelValue");
    const internalValue = ref(0);

    const validateMinMax = (value) => {
      if (value < props.min) {
        value = props.min;
      }

      if (value > props.max) {
        value = props.max;
      }

      return value;
    };
    const changeQuantity = (change) => {
      const quantity = internalValue.value + change;
      if (quantity >= props.min && quantity <= props.max) {
        ctx.emit("update:modelValue", quantity);
        ctx.emit("input", quantity);
      }
    };
    const updateValue = (e) => {
      let qty = e.target.value;
      if (typeof qty === "string" && (qty === "" || Number(qty) < 0)) {
        qty = 1;
      }

      qty = validateMinMax(Number(qty));

      return qty;
    };
    const inputValue = (e) => {
      internalValue.value = updateValue(e);
      ctx.emit("update:modelValue", internalValue.value);
      ctx.emit("input", internalValue.value);
    };
    const blurValue = (e) => {
      internalValue.value = updateValue(e);
      ctx.emit("update:modelValue", internalValue.value);
      ctx.emit("input", internalValue.value);
      ctx.emit("blur", internalValue.value);
    };

    watch(
      modelValue,
      (val) => {
        internalValue.value = val;
      },
      { immediate: true }
    );

    return {
      internalValue,
      changeQuantity,
      updateValue,
      inputValue,
      blurValue,
    };
  },
};
</script>

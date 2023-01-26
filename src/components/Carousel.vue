<template>
  <carousel class="agile">
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <img
      class="slide"
      src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    />
    <template v-slot:prevButton>
      <img src="@/assets/icons/svg/chevron-left.svg" />
    </template>
    <template v-slot:nextButton>
      <img src="@/assets/icons/svg/chevron-right.svg" />
    </template>
  </carousel>
</template>

<script>
import { VueAgile } from "vue-agile";
// import LeftIcon from "@/assets/icons/svg/chevron-left.svg";
// import RightIcon from "@/assets/icons/svg/chevron-right.svg";

export default {
  name: "BaseCarousel",
  components: {
    carousel: VueAgile,
    // LeftIcon,
    // RightIcon,
  },
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="pagination">
    <a
      href="#"
      class="item-pagination"
      @click="changePage(pageIndex - 1, $event)"
      :class="{ disabled: pageIndex === 1 }"
    >
      <i class="bi bi-arrow-left"></i>
    </a>
    <a
      href="#"
      class="item-pagination"
      @click="changePage(page, $event)"
      :class="{
        'active-pagination': pageIndex ? page === pageIndex : page === 1,
      }"
      v-for="page in displayPages"
      :key="page"
      >{{ page }}</a
    >
    <a
      href="#"
      class="item-pagination"
      @click="changePage(pageIndex + 1, $event)"
      :class="{ disabled: pageIndex === numberOfPages }"
    >
      <i class="bi bi-arrow-right"></i>
    </a>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "BasePagination",
  props: {
    length: {
      type: Number,
    },
    pageSize: {
      type: Number,
    },
    pageIndex: {
      type: Number,
    },
    numberOfDisplayPages: {
      type: Number,
    },
  },
  emits: ["change"],
  setup(props, ctx) {
    const numberOfPages = computed(() =>
      Math.ceil(props.length / props.pageSize)
    );
    const displayPages = computed(() => {
      let numberOfDisplay = props.numberOfDisplayPages || 5;
      const halfNumberOfDisplayPages = Math.floor(numberOfDisplay / 2);
      let display = [];
      let startDisplay = props.pageIndex - halfNumberOfDisplayPages;
      if (startDisplay < 0) startDisplay = 0;
      numberOfDisplay--;
      let endDisplay = startDisplay + numberOfDisplay;
      if (endDisplay > numberOfPages.value - 1) {
        endDisplay = numberOfPages.value - 1;
        startDisplay = endDisplay - numberOfDisplay;
        if (startDisplay < 0) startDisplay = 0;
      }
      for (let i = startDisplay + 1; i <= endDisplay + 1; i++) {
        display.push(i);
      }
      return display;
    });

    const changePage = (page, event) => {
      event.preventDefault();
      ctx.emit("change", page);
    };

    return {
      numberOfPages,
      displayPages,
      changePage,
    };
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.pagination a {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  cursor: pointer;
  color: #39f;
  width: 40px;
  height: 40px;
  text-decoration: none;
  margin-right: 10px;
}
.pagination a:hover {
  background-color: #39f;
  border: 1px solid #39f;
  color: #fff;
}
.pagination a:active {
  background-color: #39f;
  border: 1px solid #39f;
  color: #fff;
}
.item-pagination {
  user-select: none;
}
.item-pagination.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>

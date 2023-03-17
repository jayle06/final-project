<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">home</router-link>
        </li>
        <template v-if="pages">
          <li
            v-for="(page, index) in pages"
            :key="index"
            class="breadcrumb-item"
            aria-current="page"
          >
            <router-link :to="page">
              {{ page }}
            </router-link>
          </li>
        </template>
        <li v-if="page" class="breadcrumb-item active" aria-current="page">
          {{ page }}
        </li>
      </ol>
    </div>
  </nav>
</template>

<script>
import { ref, toRef } from "vue";

export default {
  name: "BreadCrumb",
  props: {
    page: {
      type: String,
    },
    pages: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const pages = toRef(props, "pages");
    const lastItem = ref(pages.value.slice(-1));

    return {
      lastItem,
    };
  },
};
</script>

<style lang="css" scoped>
.breadcrumb-nav {
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(235, 235, 235, 0.55);
}
.breadcrumb-nav .container,
.breadcrumb-nav .container-fluid {
  padding-top: 14px;
  padding-bottom: 14px;
}
.breadcrumb-with-filter .container,
.breadcrumb-with-filter .container-fluid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.breadcrumb-with-filter .container-fluid {
  width: 100%;
}
.breadcrumb {
  background-color: transparent;
  border-radius: 0;
  margin: 0;
  padding: 0;
}
.breadcrumb-item {
  font-weight: 300;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0;
  text-transform: capitalize;
}
.breadcrumb-item i {
  font-size: 13px;
  vertical-align: top;
  margin-top: -2px;
}
.breadcrumb-item i::before {
  margin: 0;
}
.breadcrumb-item a {
  text-decoration: none;
  color: #777;
}
.breadcrumb-item a:hover,
.breadcrumb-item a:focus {
  color: #39f;
}
.breadcrumb-item.active {
  color: #333333;
}
.breadcrumb-item + .breadcrumb-item {
  padding-left: 10px;
}
</style>

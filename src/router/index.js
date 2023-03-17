import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/modules/storefront/pages/HomePage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(
        /* webpackChunkName: "products" */ "../modules/storefront/pages/ProductListPage.vue"
      ),
  },
  {
    path: "/collections",
    name: "collections",
    component: () =>
      import(
        /* webpackChunkName: "collections" */ "../modules/storefront/pages/CollectionListPage.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../modules/storefront/pages/AboutPage.vue"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../modules/storefront/pages/ContactPage.vue"
      ),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(
        /* webpackChunkName: "cart" */ "../modules/storefront/pages/CartPage.vue"
      ),
  },
  {
    path: "/product",
    name: "product",
    component: () =>
      import(
        /* webpackChunkName: "product" */ "../modules/storefront/pages/ProductPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

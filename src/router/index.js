import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/modules/storefront/pages/HomePage";
import CartPage from "@/modules/storefront/pages/CartPage";
import CheckoutPage from "@/modules/storefront/pages/CheckoutPage";
import ProductPage from "@/modules/storefront/pages/ProductPage";
import CollectionListPage from "@/modules/storefront/pages/CollectionListPage";
import ProductListPage from "@/modules/storefront/pages/ProductListPage";
import CollectionPage from "@/modules/storefront/pages/CollectionPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "products",
    component: ProductListPage,
  },
  {
    path: "/collections",
    name: "collections",
    component: CollectionListPage,
  },
  {
    path: "/collections/:handle",
    name: "collection",
    component: CollectionPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/products/:handle",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/modules/storefront/pages/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/modules/storefront/pages/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

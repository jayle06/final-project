import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/modules/storefront/pages/HomePage";
import CartPage from "@/modules/storefront/pages/CartPage";
import CheckoutPage from "@/modules/storefront/pages/CheckoutPage";
import ProductPage from "@/modules/storefront/pages/ProductPage";
import CollectionListPage from "@/modules/storefront/pages/CollectionListPage";
import ProductListPage from "@/modules/storefront/pages/ProductListPage";
import CollectionPage from "@/modules/storefront/pages/CollectionPage";

const routes = [
  // Storefront router
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
  {
    path: "/users/my-profile",
    name: "profile",
    component: () => import("@/modules/storefront/pages/MyProfilePage.vue"),
  },
  {
    path: "/users/order-history",
    name: "orders",
    component: () => import("@/modules/storefront/pages/OrdersPage.vue"),
  },
  {
    path: "/users/invoice/:id",
    name: "invoices",
    component: () => import("@/modules/storefront/pages/InvoicePage.vue"),
  },

  // Dashboard router
  {
    path: "/admin",
    name: "dashboard-home",
    component: () => import("@/modules/dashboard/pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

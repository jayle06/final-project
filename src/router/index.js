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
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/modules/storefront/pages/NotFoundPage.vue"),
  },

  // Dashboard router
  {
    path: "/admin",
    name: "db-home",
    component: () => import("@/modules/dashboard/pages/HomePage.vue"),
  },
  {
    path: "/admin/orders",
    name: "db-orders",
    component: () => import("@/modules/dashboard/pages/Orders.vue"),
  },
  {
    path: "/admin/orders/:id",
    name: "db-order-detail",
    component: () => import("@/modules/dashboard/pages/OrderDetail.vue"),
  },
  {
    path: "/admin/products",
    name: "db-products",
    component: () => import("@/modules/dashboard/pages/Products.vue"),
  },
  {
    path: "/admin/products/:id",
    name: "db-product-detail",
    component: () => import("@/modules/dashboard/pages/ProductDetail.vue"),
  },
  {
    path: "/admin/customers",
    name: "db-customers",
    component: () => import("@/modules/dashboard/pages/Customers.vue"),
  },
  {
    path: "/admin/customers/:id",
    name: "db-customer-detail",
    component: () => import("@/modules/dashboard/pages/CustomerDetail.vue"),
  },
  {
    path: "/admin/:pathMatch(.*)*",
    name: "db-not-found",
    component: () => import("@/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

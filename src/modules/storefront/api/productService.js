import axios from "axios";
import { buildQueryString } from "@/shared/utils/url";

export default {
  async getProductByHandle(handle) {
    return await axios.get(`${process.env.DEV_DOMAIN}/products/${handle}`);
  },

  async getNewProducts() {
    return await axios.get(`${process.env.DEV_DOMAIN}/products/new`);
  },

  async getRandomProducts() {
    return await axios.get(`${process.env.DEV_DOMAIN}/products/random`);
  },

  async getProductsByCollection(collectionHandle) {
    return await axios.get(
      `${process.env.DEV_DOMAIN}/products/collection/${collectionHandle}`
    );
  },

  async getProducts(payload) {
    let params = {
      page: payload.page || 1,
      limit: payload.limit || 50,
      title: payload.search || "",
      query: payload.search || "",
      ...payload,
    };

    const url = `${process.env.DEV_DOMAIN}/products/${buildQueryString(
      params,
      true
    )}`;

    return await axios.get(url);
  },
};

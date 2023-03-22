import axios from "axios";
import { API_DOMAIN } from "@/config";
import { buildQueryString } from "@/shared/utils/url";

export default {
  async getProductByHandle(handle) {
    const url = `${API_DOMAIN}/api/products/${handle}`;
    return await axios.get(url).then((response) => {
      return response.data;
    });
  },

  async getNewProducts() {
    return await axios.get(`${API_DOMAIN}/api/products/new`);
  },

  async getRandomProducts() {
    return await axios.get(`${API_DOMAIN}/api/products/random`);
  },

  async getProductsByCollection(collectionHandle) {
    return await axios.get(
      `${API_DOMAIN}/api/products/collection/${collectionHandle}`
    );
  },

  async getProducts(payload) {
    let params = {
      page: payload.page || 1,
      limit: payload.limit || 10,
      search: payload.search || "",
    };

    const url = `${API_DOMAIN}/api/products?${buildQueryString(params, true)}`;

    return await axios.get(url).then((response) => {
      return response.data;
    });
  },
};

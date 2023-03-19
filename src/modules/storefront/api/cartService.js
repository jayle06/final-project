import axios from "axios";

export default {
  async createCart(payload) {
    return await axios
      .post(`${process.env.DEV_DOMAIN}/cart`, payload, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },

  async getCart(token) {
    return await axios.get(`${process.env.DEV_DOMAIN}/cart/${token}`);
  },

  async updateCart(payload) {
    return await axios
      .put(`${process.env.DEV_DOMAIN}/cart`, payload, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
};

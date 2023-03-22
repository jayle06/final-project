import axios from "axios";

export default {
  async getOrderById(id) {
    return await axios.get(`${process.env.DEV_DOMAIN}/api/orders/${id}`);
  },
  async getOrdersByUserId(id) {
    return await axios.get(`${process.env.DEV_DOMAIN}/api/orders/user/${id}`);
  },
};

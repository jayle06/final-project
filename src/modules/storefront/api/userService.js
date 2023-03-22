import axios from "axios";

export default {
  async login(payload) {
    return await axios
      .post(`${process.env.DEV_DOMAIN}/login`, payload, {
        withCredentials: true,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  },

  async logout() {
    return await axios
      .post(`${process.env.DEV_DOMAIN}/logout`, null, { withCredentials: true })
      .then((response) => {
        localStorage.removeItem("user");
        return response.data;
      });
  },

  async createNewUser(payload) {
    return await axios
      .post(`${process.env.DEV_DOMAIN}/api/users`, payload, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },

  async getMyProfile(id) {
    return await axios
      .get(`${process.env.DEV_DOMAIN}/api/my-profile/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },

  async updateMyProfile(payload) {
    return await axios
      .put(`${process.env.DEV_DOMAIN}/api/my-profile`, payload, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },

  async updatePassword(payload) {
    return await axios
      .put(`${process.env.DEV_DOMAIN}/api/change-password`, payload, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
};

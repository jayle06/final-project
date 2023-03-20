import axios from "axios";

export default {
  async uploadImages(file) {
    return await axios
      .post(`${process.env.DEV_DOMAIN}/admin/images`, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        return response.data.image_url;
      });
  },
  async uploadCSV(file) {
    return await axios.post(`${process.env.DEV_DOMAIN}/admin/csv`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
  },
  async importCSVToDB() {
    return await axios.post(
      `${process.env.DEV_DOMAIN}/admin/products/import`,
      null,
      {
        withCredentials: true,
      }
    );
  },
};

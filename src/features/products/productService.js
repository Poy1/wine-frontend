import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
import "react-toastify/dist/ReactToastify.css";

const getProducts = async () => {
  try {
    const response = await axios.get(`${base_url}product`); // Use GET method
    if (response.data.success) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const productService = {
  getProducts,
};

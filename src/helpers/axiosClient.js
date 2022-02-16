import axios from "axios";

const apiUrl = "https://fakestoreapi.com";

const axiosClient = axios.create({ baseURL: apiUrl });

export default axiosClient;

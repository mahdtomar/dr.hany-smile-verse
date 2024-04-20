import axios from "axios";

const Axios = () => {
  return axios.create({
    baseURL: "",
  });
};

export default Axios;
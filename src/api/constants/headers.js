import axios from "axios";

export const headers = () => {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${security.token}`;
  axios.defaults.headers.common["Accept"] = "application/json";
};

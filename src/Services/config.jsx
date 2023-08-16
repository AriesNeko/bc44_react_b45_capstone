import axios from "axios";
import { TOKEN_CYPERSOFT, CYPERMOVIE_URL } from "../Constant";
import { store } from "../main";
import { batLoading, tatLoading } from "../redux/spinnerSlice";
import { localStorageServices } from "./localStorageServices";

export let https = axios.create({
  baseURL: CYPERMOVIE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYPERSOFT,
    Authorization: `Bearer ${
      localStorageServices.getUser("USER_LOGIN")?.accessToken
    }`,
  },
});
// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    console.log("đi");
    store.dispatch(batLoading());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    console.log("zề");
    setTimeout(() => {
      store.dispatch(tatLoading());
    }, 1000);
    return response;
  },
  function (error) {
    console.log("zề");
    store.dispatch(tatLoading());
    return Promise.reject(error);
  }
);

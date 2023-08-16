import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userStateSlice from "./redux/userStateSlice.js";
import spinnerSlice from "./redux/spinnerSlice.js";
import QuanLyDatVeSlice from "./redux/quanLyDatVe.jsx";
import "./index.css";
export let store = configureStore({
  reducer: {
    userSlice: userStateSlice,
    spinnerSlice,
    QuanLyDatVeSlice,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

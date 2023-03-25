import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import store from "./state";

const Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

setupListeners(store.dispatch);

Root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

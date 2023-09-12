import React from "react";
import { createRoot } from "react-dom/client";
//import { Provider } from "react-redux";
//import { store } from "../src/app/store";
import App from "../src/App";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";
import "typeface-lobster";
import "typeface-open-sans";
import { BrowserRouter } from "react-router-dom";
//import { productsFetch } from "../src/features/productsSlice";
//import { getTotals } from "./features/cartSlice";
import { StoreProvider } from "./contexts/Store";
//import { fetchProductById } from "../src/features/productsSlice";

//store.dispatch(productsFetch());
//store.dispatch(getTotals());

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

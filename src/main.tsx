import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-range-slider-input/dist/style.css';
import 'react-medium-image-zoom/dist/styles.css'
import "./app.scss";
import "react-quill/dist/quill.snow.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);

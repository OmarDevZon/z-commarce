import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.scss";
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AddProduct } from "../pages/Seller/AddProduct";
import { MyProducts } from "../pages/Seller/MyProducts";
import { SealsHistory } from "../pages/Seller/SealsHistory";
import { UpdateProduct } from "../pages/Seller/UpdateProduct";
import { TRoutsPaths } from "../utils/type/routerType";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { MakeSeanBoxSeller } from "../pages/Admin/MakeSeanBoxSeller";

export const adminPaths: TRoutsPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: MdOutlineDashboardCustomize,
    element: <AdminDashboard />,
  },
  {
    name: "Add Product",
    path: "add-product",
    icon: MdOutlineDashboardCustomize,
    element: <AddProduct />,
  },
  {
    name: "Management",
    icon: MdOutlineDashboardCustomize,
    children: [
      {
        name: "Make Seller for Sean",
        path: "create-seller",
        icon: MdOutlineDashboardCustomize,
        element: <MakeSeanBoxSeller />,
      },
      {
        name: "My Products",
        path: "my-products",
        icon: MdOutlineDashboardCustomize,
        element: <MyProducts />,
      },
      {
        name: "Seals Historic",
        path: "seals-historic",
        icon: MdOutlineDashboardCustomize,
        element: <SealsHistory />,
      },
      {
        name: "Update Product",
        path: "update-product",
        icon: MdOutlineDashboardCustomize,
        element: <UpdateProduct />,
      },
    ],
  },
];

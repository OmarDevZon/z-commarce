/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AddProduct } from "../pages/Seller/AddProduct";
import { MyProducts } from "../pages/Seller/MyProducts";
import { SealsHistory } from "../pages/Seller/SealsHistory";
import { SellerDashboard } from "../pages/Seller/SellerDashboard";
import { UpdateProduct } from "../pages/Seller/UpdateProduct";
import { TRoutsPaths } from "../utils/type/routerType";


export const sellerPaths: TRoutsPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: MdOutlineDashboardCustomize,
    element: <SellerDashboard />,
  },
  {
    name: "Add Product",
    path: "add-product",
    icon: MdOutlineDashboardCustomize,
    element: <AddProduct />,
  },
  {
    name: "Academic Management",
    icon: MdOutlineDashboardCustomize,
    children: [
      {
        name: "Add Product",
        path: "create-product",
        icon: MdOutlineDashboardCustomize,
        element: <AddProduct />,
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

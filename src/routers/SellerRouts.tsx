import { AddProduct } from "../pages/seller/AddProduct";
import { MyProducts } from "../pages/seller/MyProducts";
import { SealsHistory } from "../pages/seller/SealsHistory";
import { SellerDashboard } from "../pages/seller/SellerDashboard";
import { UpdateProduct } from "../pages/seller/UpdateProduct";

export const sellerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SellerDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Add Product",
        path: "create product",
        element: <AddProduct />,
      },
      {
        name: "My Products",
        path: "my-products",
        element: <MyProducts />,
      },
      {
        name: "Seals Historic",
        path: "seals-historic",
        element: <SealsHistory />,
      },
      {
        name: "Update Product",
        path: "update-product",
        element: <UpdateProduct />,
      },
    ],
  },
];

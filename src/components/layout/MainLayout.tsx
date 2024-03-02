import { Outlet } from "react-router-dom";
import { Footer } from "../ui/footer/Footer";
import Header from "../ui/header";


export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

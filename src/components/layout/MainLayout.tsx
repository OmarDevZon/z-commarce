import { Outlet } from "react-router-dom";
import { Footer } from "../ui/footer/Footer";
import Header from "../ui/header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header subHeader={true} />
      <Outlet />
      <Footer />
    </>
  );
};

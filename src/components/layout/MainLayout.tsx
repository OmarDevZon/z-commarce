import { Outlet } from "react-router-dom";
import { Footer } from "../ui/footer/Footer";
import Header from "../ui/header/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Header subHeader={false} />
      <Outlet />
      <Footer />
    </>
  );
};

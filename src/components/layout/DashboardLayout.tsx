import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import Header from "../ui/header/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <section id="dashboard" className="flex min-h-screen mx-auto relative">
        <Sidebar />
        <div className="w-full">
          <Header subHeader={false} />
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;

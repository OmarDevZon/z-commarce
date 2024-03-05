import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../ui/dashbord/Sidebar";
import Header from "../../ui/header/Header";

const DashboardLayout = () => {
  //   const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div>
      <Header subHeader={false} />
      <section
        id="dashboard"
        className="flex min-h-screen pl-12 md:pl-0 mx-auto relative"
      >
        <Sidebar />
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default DashboardLayout;

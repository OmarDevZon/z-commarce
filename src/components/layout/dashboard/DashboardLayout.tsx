import { Outlet } from "react-router-dom";
import { Sidebar } from "../../ui/dashboard/Sidebar";
import Header from "../../ui/header/Header";

const DashboardLayout = () => {
  //   const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div>
      <section
        id="dashboard"
        className="flex min-h-screen pl-12 md:pl-0 mx-auto relative"
      >
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

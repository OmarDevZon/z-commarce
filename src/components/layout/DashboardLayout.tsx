import { Outlet } from "react-router-dom";
import { Sidebar } from "../ui/dashboard/Sidebar";
import Header from "../ui/header/Header";

const DashboardLayout = () => {
  //   const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div>
      <section
        id="dashboard"
        className="flex min-h-screen mx-auto relative"
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

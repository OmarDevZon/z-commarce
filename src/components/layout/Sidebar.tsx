/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { dashboard } from "../ui/dashboard/dashboard";
import DashboardItem from "../ui/dashboard/DashboardItem";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { sellerPaths } from "../../routers/SellerRouts";
import { adminPaths } from "../../routers/admin.routs";
import { userRole } from "../../utils/constent/constent.type";
import { buyerPaths } from "../../routers/BuyerRouts";

export const Sidebar = () => {
  const [subItemShow, setSubItemShow] = useState("");
  const [openDrawer, setOpenDrawer] = useState(true);
  const [toggle, setToggle] = useState({});

  const user = useAppSelector(selectCurrentUser);

  let sidebarItems;

  switch (user!.role) {
    case userRole.admin:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.admin);
      break;
    case userRole.saenBoxSeller:
      sidebarItems = sidebarItemsGenerator(sellerPaths, userRole.saenBoxSeller);
      break;
    case userRole.seller:
      sidebarItems = sidebarItemsGenerator(sellerPaths, userRole.seller);

      break;
    case userRole.buyer:
      sidebarItems = sidebarItemsGenerator(buyerPaths, userRole.buyer);
      break;

    default:
      break;
  }

  // console.log(dashboard, "file name : Sidebar line number : +-42");
  console.log(sidebarItems, "file name : Sidebar line number : +-31");

  return (
    <section id="sidebar">
      {!openDrawer && (
        <div
          onClick={() => setOpenDrawer(!openDrawer)}
          style={{ background: "rgba(80, 21, 76, 0.30)" }}
          className="block md:hidden absolute top-0 left-0 z-10 w-full h-full"
        ></div>
      )}
      <div
        className={`bg-gray-800 z-20 h-full absolute left-0 top-0 md:sticky md:min-h-screen ${
          openDrawer ? "w-14 md:w-56 xl:w-60" : "w-64 smm:w-68 md:w-16"
        } duration-300 md:duration-500`}
      >
        <div className="px-3 md:px-4 text-gray-100 sticky top-0 left-0">
          <div className="pt-3 flex justify-end">
            <HiMenuAlt3
              className="cursor-pointer active:bg-gray-600 rounded-full text-xl md:text-2xl xl:text-4xl"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 relative">
            {sidebarItems?.map((item, index) => (
              <>
                {console.log(item, "file name : Sidebar line number : +-67")}
                <DashboardItem
                  key={index}
                  item={item}
                  index={index}
                  openDrawer={openDrawer}
                  subItemShow={subItemShow}
                  setSubItemShow={setSubItemShow}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

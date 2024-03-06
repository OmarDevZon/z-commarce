import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { dashboard } from "./dashboard";
import DashboardItem from "./DashboardItem";

export const Sidebar = () => {
  const [subItemShow, setSubItemShow] = useState("");
  const [openDrawer, setOpenDrawer] = useState(true);
  const [toggle, setToggle] = useState({});
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
            {dashboard?.map((item, index) => (
              <DashboardItem
                item={item}
                index={index}
                openDrawer={openDrawer}
                key={index}
                subItemShow={subItemShow}
                setSubItemShow={setSubItemShow}
                toggle={toggle}
                setToggle={setToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { AiFillHdd } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaCashRegister, FaHome, FaUsers, FaUsersCog } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { ImUpload2 } from "react-icons/im";
import { MdOutlineDashboardCustomize, MdOutlineReportOff, MdPreview } from "react-icons/md";
import { SiAdobeacrobatreader } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
import { TbActivity } from "react-icons/tb";

export const dashboard = [
  {
    name: "Dashboard",
    link: `/user/dashboard`,
    icon: MdOutlineDashboardCustomize,
  },

  {
    name: "Make Order",
    link: "/dashboard/offline-order-make",
    icon: BsPencilSquare,
    margin: true,
  },
  {
    name: "services",
    subMenu: [
      {
        subName: "All Service",
        subLink: "/user",
        subIcon: SiAdobeacrobatreader,
      },
      {
        subName: "Add New Service",
        subLink: "/dashboard/add-new-service",
        subIcon: ImUpload2,
      },
      {
        subName: "Service Review",
        subLink: "/dashboard/service-review",
        subIcon: MdPreview,
      },
      {
        subName: "Reported Service",
        subLink: "/dashboard/reported-service",
        subIcon: MdOutlineReportOff,
      },
    ],
    icon: AiFillHdd,
  },
  {
    name: "Create Employee & user",
    link: "/dashboard/create-employee",
    icon: FaUsersCog,
  },
  {
    name: "All customer & user",
    link: "/dashboard/all-user",
    icon: FaUsers,
  },
  {
    name: "Sales History",
    subMenu: [
      {
        subName: "Orders",
        subLink: "/dashboard/order-history",
        subIcon: SlNotebook,
      },
      {
        subName: "Bookings",
        subLink: "/dashboard/booking-history",
        subIcon: FaHome,
      },
    ],
    icon: FcSalesPerformance,
  },
  {
    name: "Staff Activity log",
    link: "/dashboard/activity-log/all",
    icon: TbActivity,
  },
  {
    name: "Cash Management",
    subMenu: [
      { subName: "All cash", subLink: "/all-cash", subIcon: FaHome },
      { subName: "All Expense", subLink: "/all-expense", subIcon: FaHome },
      { subName: "All Sales", subLink: "/all sales", subIcon: FaHome },
      {
        subName: "Cas management",
        subLink: "/dashboard/cash-management",
        subIcon: FaHome,
      },
    ],
    icon: FaCashRegister,
    margin: true,
  },
];

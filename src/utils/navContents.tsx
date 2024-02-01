// IMPORTS -
import { IconType } from "react-icons";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";

// INTERFACE -
interface ListProps {
  url: string;
  text: string;
  Icon: IconType;
  id: number;
}

// DASHBOARD -
export const DashboardContents: ListProps[] = [
  {
    url: "/",
    text: "Dashboard",
    Icon: RiDashboardFill,
    id: Math.random() * 100,
  },

  {
    url: "/admin/product",
    text: "Product",
    Icon: RiShoppingBag3Fill,
    id: Math.random() * 100,
  },

  {
    url: "/admin/customer",
    text: "Customer",
    Icon: IoIosPeople,
    id: Math.random() * 100,
  },

  {
    url: "/admin/transaction",
    text: "Transaction",
    Icon: AiFillFileText,
    id: Math.random() * 100,
  },
];

// CHARTS -
export const ChartContents: ListProps[] = [
  {
    url: "/admin/chart/bar",
    text: "Bar",
    Icon: FaChartBar,
    id: Math.random() * 100,
  },

  {
    url: "/admin/chart/pie",
    text: "Pie",
    Icon: FaChartPie,
    id: Math.random() * 100,
  },

  {
    url: "/admin/chart/line",
    text: "Line",
    Icon: FaChartLine,
    id: Math.random() * 100,
  },
];

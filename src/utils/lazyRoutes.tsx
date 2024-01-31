// IMPORTS -
import { lazy } from "react";

// ROUTES -
export const Dashboard = lazy(() => import("../pages/Dashboard"));
export const Products = lazy(() => import("../pages/Products"));
export const Transaction = lazy(() => import("../pages/Transaction"));
export const Customers = lazy(() => import("../pages/Customers"));
export const NewProduct = lazy(() => import("../pages/management/NewProduct"));
export const ProductManagement = lazy(() => import("../pages/management/ProductManagement"));
export const TransactionManagement = lazy(() => import("../pages/management/TransactionManagement"));
export const BarChart = lazy(() => import("../pages/charts/BarChart"));
export const LineChart = lazy(() => import("../pages/charts/LineChart"));
export const PieChart = lazy(() => import("../pages/charts/PieChart"));
export const Coupon = lazy(() => import("../pages/apps/Coupon"));
export const Stopwatch = lazy(() => import("../pages/apps/Stopwatch"));
export const Toss = lazy(() => import("../pages/apps/Toss"));
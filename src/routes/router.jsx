import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPhones from "../pages/AllPhones";
import DashboardHome from "../component/Dashboad/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRouter";
import ManageAllProduct from "../component/Dashboad/ManageAllProduct";
import EditPhone from "../component/Dashboad/EditPhone";
import AddPhone from "../component/Dashboad/AddPhone";
import EditProfile from "../component/Dashboad/EditProfile";
import Details from "../component/Cards/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-phones",
        element: <AllPhones />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-phone",
        element: <ManageAllProduct />,
      },
      {
        path: "edit-phone/:id",
        element: <EditPhone />,
      },
      {
        path: "add-phone",
        element: <AddPhone />,
      },
      {
        path: "edit-profile/:id",
        element: <EditProfile />,
      },
    ],
  },
]);

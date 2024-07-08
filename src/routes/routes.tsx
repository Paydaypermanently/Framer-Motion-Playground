import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import BasicLayout from "../layouts/BasicLayout";
import Error404 from "../pages/errors/Error404";
import Login from "../pages/auth/login";
import Index from "../pages/index";
import Playground1 from "../pages/playground1";
import Playground2 from "../pages/playground2";
import Playground3 from "../pages/Playground3";

export default createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [{ path: "/login", element: <Login /> }],
    errorElement: <Error404 />,
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [{ index: true, element: <Index /> }],
    errorElement: <Error404 />,
  },
  {
    path: "/playground1",
    element: <BasicLayout />,
    children: [{ index: true, element: <Playground1 /> }],
    errorElement: <Error404 />,
  },
  {
    path: "/playground2",
    element: <BasicLayout />,
    children: [{ index: true, element: <Playground2 /> }],
    errorElement: <Error404 />,
  },
  {
    path: "/playground3",
    element: <BasicLayout />,
    children: [{ index: true, element: <Playground3 /> }],
    errorElement: <Error404 />,
  },
  {
    path: "/playground4",
    element: <BasicLayout />,
    children: [{ index: true, element: <Playground4 /> }],
    errorElement: <Error404 />,
  },
]);

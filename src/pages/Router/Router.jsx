import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Layout from "../../Layout/Layout";
import Aboutus from "../Aboutus/Aboutus";
import NotFound from "../NotFound/NotFound";
import Opportunity from "../Opportunity/Opportunity";
import Profile from "../Profile/Profile";
import ViewMore from "../ViewMore/ViewMore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/opportunity",
        element: <Opportunity />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/viewmore",
        element: <ViewMore />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

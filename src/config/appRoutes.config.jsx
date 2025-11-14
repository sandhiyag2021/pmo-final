import {
  HomePage,
  PortFolioStatus,
  PageNotFound,
  PortFolioHomePage,
} from "../pages";
import LoginPage from "../pages/Login";
import { Navigate } from "react-router-dom";

export const appRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/portfolio-status",
    element: <PortFolioStatus />,
  },
  {
    path: "/portfolioStatusView",
    element: <PortFolioStatus />,
  },
  {
    path: `/portfolio-status/edit/:id`,
    element: <PortFolioStatus />,
  },
  {
    path: "/portfolio",
    element: <PortFolioHomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />
  }
];

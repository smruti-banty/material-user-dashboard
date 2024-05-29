import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Users from "../pages/Users";
import Roles from "../pages/Roles";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "roles",
        element: <Roles />,
      },
    ],
  },
]);

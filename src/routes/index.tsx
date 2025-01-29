import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import AllTask from "../pages/AllTask";
import AddTask from "../pages/AddTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><AllTask/></ProtectedRoute>,
      },
      {
        path: "/add-task",
        element: <ProtectedRoute><AddTask/></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);
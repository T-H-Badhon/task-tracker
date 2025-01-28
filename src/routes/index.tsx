import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import AllTask from "../pages/AllTask";
import AddTask from "../pages/AddTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <AllTask/>,
      },
      {
        path: "/add-task",
        element: <AddTask/>,
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
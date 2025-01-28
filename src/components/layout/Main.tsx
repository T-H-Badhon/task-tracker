
import { Outlet } from "react-router-dom";
import NavBar from "../Navber/Navber";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
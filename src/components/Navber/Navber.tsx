import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="h-14 card-shadow-full  place-content-center">
      <div className=" flex justify-between items-center max-w-[1100px] mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800">T2</h1>
        <div className="space-x-4 font-medium">
          <Link className="text-blue-800" to={"/add-task"}>Add Task</Link>
          <Link className="text-blue-800" to={"/"}>All Tasks</Link>
        </div>
        <div>
          <button className="py-1 px-2 bg-blue-800 rounded text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

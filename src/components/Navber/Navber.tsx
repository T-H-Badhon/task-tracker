import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut } from "../../redux/slices/authSlice";


const NavBar = () => {
   const user = useAppSelector((state) => state.auth);
   const dispatch = useAppDispatch()
   const navigator = useNavigate()
  return (
    <div className="h-14 card-shadow-full  place-content-center">
      <div className=" flex justify-between items-center max-w-[1100px] mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800">T2</h1>
        {user?.email != "" && <div className="space-x-4 font-medium">
          <Link className="text-blue-800" to={"/add-task"}>Add Task</Link>
          <Link className="text-blue-800" to={"/"}>All Tasks</Link>
        </div> }
        <div>
          {
            user?.email !=""? <button onClick={()=>{
              sessionStorage.clear()
              dispatch(logOut())
              navigator("/login")
            }} className="py-1 px-2 bg-blue-800 rounded text-white">
            Logout
          </button> : <Link to={"/login"} className="py-1 px-2 bg-blue-800 rounded text-white">
            Login
          </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;

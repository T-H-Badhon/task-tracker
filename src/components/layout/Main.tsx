
import { Outlet } from "react-router-dom";
import NavBar from "../Navber/Navber";
import Loader from "../common/Loader";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { setUser } from "../../redux/slices/authSlice";
import { useGetUserProfileByTokenQuery } from "../../redux/api/auth";
import { Toaster } from "sonner";

const Main = () => {

    // hooks
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth);
    console.log(user)
  
    // state
    const [laoding, setLoading] = useState(true);
    // query
    const { data,isFetching } = useGetUserProfileByTokenQuery({},{skip:user?.email == "" });
  
    useEffect(() => {
      if (data?.data) {
        const user = data?.data
        
        dispatch(setUser({
          _id: user?._id,
          username: user?.username,
          email: user?.email,
        }));

        setLoading(false);
      }
  
      if (!isFetching) {
        setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data?.data, isFetching]);
  
    if (laoding) {
      return <Loader height="100vh" />;
    }



  return (
    <div>
      <Toaster richColors position="top-center"/>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
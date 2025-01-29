/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/auth";
import { toast } from "sonner";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/slices/authSlice";

const Login = () => {
  const navigator = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const dispatch = useAppDispatch();

  const [loginUser] = useLoginMutation();

  const onSubmit = async (data: any) => {
    const res = await loginUser(data);

    if (res?.data) {
      const user = res?.data?.data?.user;
      toast.success("Login Successfull.");
      dispatch(
        setUser({
          _id: user?._id,
          username: user?.username,
          email: user?.email,
        })
      );
      sessionStorage.setItem("accessToken",res?.data?.data?.token )
      reset();
      navigator("/");
    } else {
      const err = res?.error as any;
      toast.error(err?.data?.errorMessage);
    }
  };

  return (
    <div className="max-w-[500px] mx-auto my-20 p-5 card-shadow-full rounded-sm">
      <div>
        <h1 className="pb-2 px-2 font-semibold border-b-2 border-blue-800 mb-5">
          Login
        </h1>
      </div>

      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              required
              {...register("email", { required: "email is required" })}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              required
              {...register("password", {
                required: "password is required",
              })}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <div></div>

            <div>
              <button className="py-1 px-2 bg-blue-800 text-white rounded-md">
                Login
              </button>
            </div>
          </div>
        </form>
        <h1>
          Don't have account?{" "}
          <Link to={"/register"} className="text-blue-800 font-medium">
            Register Here.
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;

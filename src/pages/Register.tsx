/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/auth";
import { toast } from "sonner";

const Register = () => {
  const navigator = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [registerUser] = useRegisterMutation();

  const onSubmit = async (data: any) => {
    const { confirmPassword, ...payload } = data;
    if (data?.password != confirmPassword) {
      toast.error("Password not match!");

      return;
    }

    const res = await registerUser(payload);

    if (res?.data) {
      toast.success("Registration Successfull.");

      reset();
      navigator("/login");
    } else {
      const err = res?.error as any;
      toast.error(err?.data?.errorMessage);
    }
  };

  return (
    <div className="max-w-[500px] mx-auto my-20 p-5 card-shadow-full rounded-sm">
      <div>
        <h1 className="pb-2 px-2 font-semibold border-b-2 border-blue-800 mb-5">
          Create Account
        </h1>
      </div>

      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              required
              {...register("username", { required: "username is required" })}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
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
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm">
              confirmPassword<span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              required
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <div></div>

            <div>
              <button className="py-1 px-2 bg-blue-800 text-white rounded-md">
                Create
              </button>
            </div>
          </div>
        </form>
        <h1>
          Already have account?.{" "}
          <Link to={"/login"} className="text-blue-800 font-medium">
            Login here.
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

const AddTask = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      dueDate: "",
      description: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1100px] mx-auto my-20 p-5 card-shadow-full rounded-sm">
      <div>
        <h1 className="pb-2 px-2 font-semibold border-b-2 border-blue-800 mb-5">
          Add Task
        </h1>
      </div>

      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                required
                {...register("title", { required: "Title is required" })}
                className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
              />
            </div>

            <div>
              <label htmlFor="dueDate" className="block mb-2 text-sm">
                Due Date<span className="text-red-500">*</span>
              </label>
              <input
                id="dueDate"
                type="date"
                required
                {...register("dueDate", { required: "Due Date is required" })}
                className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-sm">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              required
              {...register("description", {
                required: "Description is required",
              })}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <div></div>

            <div>
              <button className="py-1 px-2 border border-blue-800 rounded-md text-blue-800 mr-3">
                cancel
              </button>
              <button className="py-1 px-2 bg-blue-800 text-white rounded-md">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;

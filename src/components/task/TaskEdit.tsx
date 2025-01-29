/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useUpdateTaskMutation } from "../../redux/api/task";
import { toast } from "sonner";

const TaskEdit = ({
  setIsOpen,
  selectedTask,
  setIsEdit,
}: {
  selectedTask: any;
  setIsEdit: any;
  setIsOpen: any;
}) => {
  const { register, handleSubmit, reset } = useForm({
    values: {
      title: selectedTask?.title,
      dueDate: selectedTask?.dueDate,
      description: selectedTask?.description,
      status: selectedTask?.status,
    },
  });

  const [updateTask] = useUpdateTaskMutation();


  const onSubmit = async (data: any) => {
    const payload = { id: selectedTask?._id, taskData: data }  
    const res = await updateTask(payload);

    if (res?.data) {
      toast.success("Task Updated Successfull.");
      reset();
      setIsEdit(false);
      setIsOpen(false)
    } else {
      const err = res?.error as any;
      toast.error(err?.data?.errorMessage);
    }
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm">
              Title
            </label>
            <input
              id="title"
              defaultValue={selectedTask?.title}
              {...register("title")}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="dueDate" className="block mb-2 text-sm">
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                defaultValue={selectedTask?.dueDate}
                {...register("dueDate")}
                className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
              />
            </div>

            <div>
              <label htmlFor="dueDate" className="block mb-2 text-sm">
                Status
              </label>
              <select
                id="status"
                {...register("status")}
                className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-sm">
              Description
            </label>
            <textarea
              id="description"
              defaultValue={selectedTask?.description}
              {...register("description")}
              className={`mt-1 p-1 block w-full rounded-md border-gray-300 card-shadow-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 }`}
            />
          </div>

          <div className="flex items-center justify-between mt-5">
            <div></div>

            <div>
              <button
                type="reset"
                onClick={() => {
                  reset();
                  setIsEdit(false);
                }}
                className="py-1 px-2 border border-blue-800 rounded-md text-blue-800 mr-3"
              >
                cancel
              </button>
              <button className="py-1 px-2 bg-blue-800 text-white rounded-md">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEdit;

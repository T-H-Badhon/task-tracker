/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import TaskEdit from "../components/task/TaskEdit";
import {
  useDeleteTaskMutation,
  useMyTaskQuery,
  useUpdateTaskMutation,
} from "../redux/api/task";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "sonner";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AllTask = () => {
  const [selected, setSelected] = useState<any>();
  const [query, setQuery] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { data: taskData } = useMyTaskQuery(query);

  const [deleteTask] = useDeleteTaskMutation();

  const [updateTask] = useUpdateTaskMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteTask(id);
    if (res?.data) {
      toast.success("Task deleted Successfully.");
    } else {
      const err = res?.error as any;
      toast.error(err?.data?.errorMessage);
    }
  };

  const handleUpdateStatus = (id: string, value: boolean) => {
    const payload = {
      id: id,
      taskData: { status: value ? "complete" : "incomplete" },
    };
    updateTask(payload);
  };

  return (
    <>
      <div className="max-w-[1100px] mx-auto my-20 p-5 card-shadow-full rounded-sm">
        <div className="flex items-center justify-between">
          <h1>Manage Tasks</h1>

          <Link
            to={"/add-task"}
            className="bg-blue-800 py-1 px-2 rounded-md text-white flex items-center"
          >
            <h1>
              <FiPlus className="text-white" />
            </h1>
            <h1> Add Task</h1>
          </Link>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <div className=" flex items-center gap-2">
              {/* <h1>Search:</h1>
              <div><input type="text" onChange={(e)=>{
                console.log(e.target.value)
              }} className="border-2 border-blue-800 rounded outline-none" /></div> */}
            </div>
            <div className="flex items-center gap-2">
              <h1>Filter by Status:</h1>
              <select
                className="w-28 border-2 border-blue-800 rounded outline-none"
                onChange={(e) => {
                  if (e.target.value == "") {
                    setQuery({});
                  } else {
                    setQuery({ status: e.target.value });
                  }
                }}
              >
                <option value="">All</option>
                <option value="incomplete">pending</option>
                <option value="complete">complete</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="w-10 hidden md:block">#</th>
                <th>Task</th>
                <th className="hidden md:block">Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {taskData?.data?.map((task: any, index: number) => {
                return (
                  <tr
                    key={task?._id}
                    onClick={() => {
                      setIsOpen(true);
                      setSelected(task);
                    }}
                    className="cursor-pointer"
                  >
                    <td
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        defaultChecked={
                          task?.status == "complete" ? true : false
                        }
                        onChange={(e) => {
                          const value = e.target.checked;

                          handleUpdateStatus(task?._id, value);
                        }}
                      />
                    </td>
                    <td>{index + 1}</td>

                    <td className="text-sm md:text-base">{task?.title}</td>

                    <td className="hidden md:block">
                      {new Date(task?.dueDate).toDateString()}
                    </td>
                    <td>
                      <h1
                        className={` px-2 pb-[1px] w-fit rounded-full uppercase text-xs md:text-sm font-semibold ${
                          task?.status == "complete"
                            ? "bg-green-400/40 text-green-700"
                            : "bg-yellow-200/40 text-yellow-600"
                        }`}
                      >
                        {task?.status == "complete" ? "completed" : "pending"}
                      </h1>
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();

                          handleDelete(task?._id);
                        }}
                      >
                        <AiOutlineDelete className="text-base rounded bg-red-300 w-6 h-6 p-1 text-red-700" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* sidebar */}

      <div
        onClick={() => {
          setSelected({});
          setIsEdit(false);
          setIsOpen(false);
        }}
        className={`fixed top-0 left-0 overflow-hidden  bg-black/20 transition-all duration-0 ${
          isOpen ? "w-screen h-screen" : "w-0 h-0 delay-700"
        } `}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`w-full max-w-[700px] h-full bg-white ml-auto p-5 transition-all duration-700 ${
            isOpen ? "translate-x-0" : "translate-x-[750px]"
          }`}
        >
          <div className="w-full flex items-center justify-between">
            <div>
              <button
                onClick={() => {
                  setSelected({});
                  setIsEdit(false);
                  setIsOpen(false);
                }}
              >
                <MdKeyboardDoubleArrowRight className="w-7 h-7" />
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setIsEdit(true);
                }}
                className="bg-blue-800 py-1 px-2 rounded text-white"
              >
                Edit
              </button>
            </div>
          </div>

          {isEdit ? (
            <div>
              <TaskEdit
                selectedTask={selected}
                setIsEdit={setIsEdit}
                setIsOpen={setIsOpen}
              />
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-semibold ">{selected?.title}</h1>

              <div className="mt-5 space-y-5">
                <h1
                  className={` px-2 pb-[1px] w-fit rounded-full uppercase text-sm font-semibold ${
                    selected?.status == "complete"
                      ? "bg-green-400/40 text-green-700"
                      : "bg-yellow-200/40 text-yellow-600"
                  }`}
                >
                  {selected?.status == "complete" ? "completed" : "pending"}
                </h1>

                <h1 className="font-medium pb-2 ">
                  Due Date: {new Date(selected?.dueDate).toDateString()}
                </h1>

                <div className="space-y-3">
                  <h1 className="font-medium pb-2 border-b-2 border-gray-200 ">
                    Description
                  </h1>

                  <pre className="font-sans">{selected?.description}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllTask;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import TaskEdit from "../components/task/TaskEdit";

const AllTask = () => {
  const [selected, setSelected] = useState<any>();

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
          <table>
            <thead>
              <tr>
                <th className="w-10">#</th>
                <th>Task</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() => {
                  setIsOpen(true);
                  setSelected({
                    title: "sfsfasf",
                    status: "incomplete",
                    description: "fsdfsdffffffff",
                    dueDate: "2025-01-29",
                  });
                }}
                className="cursor-pointer"
              >
                <td>ds</td>
                <td>ds</td>
                <td>ds</td>
                <td>ds</td>
                <td>ds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* sidebar */}

      <div
        onClick={() => {
          setSelected({})
          setIsEdit(false)
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
            <div></div>
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
              <TaskEdit selectedTask={selected} setIsEdit={setIsEdit} />
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
                  {selected?.status}
                </h1>

                <h1 className="font-medium pb-2 ">
                  Due Date: {new Date(selected?.dueDate).toDateString()}
                </h1>

                <div className="space-y-3">
                  <h1 className="font-medium pb-2 border-b-2 border-gray-200 ">
                    Description
                  </h1>

                  <p>{selected?.description}</p>
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

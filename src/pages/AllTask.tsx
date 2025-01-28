import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const AllTask = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-20 p-5 card-shadow-full rounded-sm">
      <div className="flex items-center justify-between">
        <h1>Manage Tasks</h1>

        <Link to={"/add-task"} className="bg-blue-800 py-1 px-2 rounded-md text-white flex items-center">
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
            <tr>
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
  );
};

export default AllTask;

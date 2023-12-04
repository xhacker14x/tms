import { useState } from "react";
import { taskPriorities } from "../constants/data";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Task = ({ id, taskName, description, status, priority, getData }) => {
  const [showDesc, setShowDesc] = useState(false);

  // pass data
  const handleData = () => {
    const task = {
      id,
      taskName,
      description,
      status,
      priority,
    };
    getData(task);
  };

  return (
    <>
      <div className="py-1 px-2 bg-slate-100 hover:bg-slate-200 duration-200 ease-in-out rounded-[5px] border border-slate-200">
        <div className="flex items-center justify-between py-1">
          <div
            className="flex items-center flex-1 cursor-pointer"
            onClick={() => setShowDesc(!showDesc)}
          >
            {taskPriorities.map((item) => {
              if (item.value === priority) {
                return (
                  <div key={item.value} className="flex items-center">
                    <span
                      className={`h-[20px] w-[5px] block mr-1.5 rounded-[5px]`}
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <h2
                      className={`font-medium text-slate-500 truncate w-[200px]`}
                    >
                      {taskName}
                    </h2>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex items-center justify-between w-10">
            <button
              className="duration-200 ease-in-out text-slate-400 hover:text-slate-600"
              onClick={handleData}
            >
              <FaGear size={13} />
            </button>
            <button
              className="duration-200 ease-in-out text-slate-400 hover:text-slate-600"
              onClick={() => setShowDesc(!showDesc)}
            >
              {showDesc ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </button>
          </div>
        </div>
        {showDesc && (
          <div className="p-2 text-sm text-gray-500 border-t border-slate-300">
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Task;

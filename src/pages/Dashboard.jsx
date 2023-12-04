import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/thunks/tasksThunks";
import { taskPriorities, taskStatus } from "../constants/data";
import { TaskContainer, Button, Title, Popup, Container } from "../components";
import { MdAdd } from "react-icons/md";
import { toast } from "react-toastify";
import { SearchField } from "../components";
import { IoSearch } from "react-icons/io5";

const Dashboard = () => {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("low");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const clearValues = () => {
    setTaskName("");
    setStatus("todo");
    setPriority("low");
    setDescription("");
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { taskName, description, status, priority };

    dispatch(addTask(task))
      .unwrap()
      .then(() => {
        toast.success("New task has been added successfully.");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again!");
      });

    setShowAddPopup(false);
    clearValues();
  };

  const handlePopup = () => {
    setShowAddPopup(!showAddPopup);
    clearValues();
  };

  return (
    <>
      <Container className="flex flex-col items-start justify-between lg:items-center lg:flex-row">
        <div className="mb-5 lg:mb-0">
          <Title>Legend</Title>
          <div>
            <div className="flex items-center gap-6 mt-3">
              {taskPriorities.map((priority) => {
                return (
                  <div
                    className="flex items-center gap-1.5"
                    key={priority.value}
                  >
                    <span
                      className={`w-[15px] h-[15px] block rounded-[2px]`}
                      style={{ backgroundColor: priority.color }}
                    ></span>

                    <span className="font-medium text-[14px]">
                      {priority.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full sm:flex-row lg:justify-normal lg:w-auto">
          <div className="relative border border-slate-300 py-2 px-2 w-full lg:w-[300px] rounded-[5px] text-slate-500 bg-white lg:mr-3">
            <IoSearch size={20} className="absolute" />
            <SearchField />
          </div>
          <div className="block mt-4 sm:mt-0 sm:flex sm:justify-end w-full sm:w-[150px] lg:w-auto">
            <Button
              className="w-full sm:w-auto"
              primary
              onClick={() => setShowAddPopup(!showAddPopup)}
              icon={<MdAdd size={20} />}
            >
              Add Task
            </Button>
          </div>
        </div>
      </Container>

      <TaskContainer />

      <Popup label="Add Task" visible={showAddPopup} onClick={handlePopup}>
        <form className="grid gap-4" onSubmit={handleAddTask}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1 font-medium">Task Name</label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full px-2 py-1 border rounded-[5px] border-slate-300 hover:outline-none active:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Status</label>
              <select
                className="w-full px-2 py-1 border rounded-[5px] cursor-pointer border-slate-300 hover:outline-none active:outline-none"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {taskStatus.map((status) => {
                  return (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Priority</label>
            <div className="flex items-center gap-4">
              {taskPriorities.map((item) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input
                      type="radio"
                      value={item.value}
                      name="priority"
                      id={item.value}
                      onChange={(e) => setPriority(e.target.value)}
                      checked={priority === item.value}
                      className="mr-1"
                    />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full px-2 py-1 border rounded-[5px] border-slate-300 hover:outline-none active:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              cols={40}
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button secondary onClick={handlePopup}>
              Cancel
            </Button>
            <Button primary>Add</Button>
          </div>
        </form>
      </Popup>
    </>
  );
};

export default Dashboard;

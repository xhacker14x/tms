import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../store/thunks/tasksThunks";
import { taskPriorities, taskStatus } from "../constants/data";
import { Popup, Title, Button, Container, Task } from ".";
import { toast } from "react-toastify";

const TasksList = ({ onRefresh, category }) => {
  const { data } = useSelector((state) => state.tasks);
  const [id, setId] = useState("");
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  // search stuff
  const { searchFilter } = useSelector((state) => state.tasks);
  const searchedData = data.filter((task) => {
    return task.taskName.toLowerCase().includes(searchFilter.toLowerCase());
  });

  const filteredData = searchedData.filter((item) => item.status === category);
  const dispatch = useDispatch();

  // get data
  const handleData = (task) => {
    setId(task.id);
    setTaskName(task.taskName);
    setStatus(task.status);
    setPriority(task.priority);
    setDescription(task.description);
    setShowModal(!showModal);
  };

  // update task
  const handleUpdateTask = () => {
    const task = {
      id,
      taskName,
      description,
      status,
      priority,
    };
    dispatch(updateTask(task))
      .unwrap()
      .then(() => {
        toast.success("Selected task has been updated successfully.");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again!");
      });
    onRefresh();
    setShowModal(false);
  };

  // delete task
  const handleDelete = () => {
    dispatch(deleteTask(id))
      .unwrap()
      .then(() => {
        toast.success("Selected task has been deleted successfully.");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again!");
      });
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Title className="flex items-center gap-2">
          {category}
          <span className="bg-cyan-500 w-[35px] h-[18px] flex items-center text-white rounded-full text-[13px] font-normal justify-center">
            {filteredData.length}
          </span>
        </Title>
        {filteredData.length > 0 && (
          <div className="max-h-[520px] overflow-auto grid gap-2.5 mt-5 px-3">
            {filteredData.map((data) => {
              return <Task key={data.id} getData={handleData} {...data} />;
            })}
          </div>
        )}
      </Container>
      <Popup
        label="Edit Task"
        visible={showModal}
        onClick={() => setShowModal(!showModal)}
      >
        <form className="grid gap-4" onSubmit={handleUpdateTask}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1 font-medium">Task Name</label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full px-2 py-1 border border-slate-300 hover:outline-none active:outline-none rounded-[5px]"
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
            <Button danger onClick={handleDelete}>
              Delete
            </Button>
            <Button primary>Update</Button>
          </div>
        </form>
      </Popup>
    </>
  );
};

export default TasksList;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../store/thunks/tasksThunks";
import { Title, Skeleton, TaskList } from ".";

const TaskContainer = () => {
  const { isLoading, error } = useSelector((state) => state.tasks);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  if (isLoading) return <Skeleton />;
  if (error)
    return <Title>Something went wrong. Please try again later!.</Title>;

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <TaskList category="todo" onRefresh={handleRefresh} />
      <TaskList category="inprogress" onRefresh={handleRefresh} />
      <TaskList category="completed" onRefresh={handleRefresh} />
    </div>
  );
};

export default TaskContainer;

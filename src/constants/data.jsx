// icons
import { RxDashboard } from "react-icons/rx";

// content
const sidebarMenu = [{ label: "Dashboard", url: "/", icon: <RxDashboard /> }];

const taskStatus = [
  { value: "todo", label: "To Do" },
  {
    value: "inprogress",
    label: "In Progress",
  },
  {
    value: "completed",
    label: "Completed",
  },
];

const taskPriorities = [
  { value: "low", label: "Low", color: "#64748b" },
  { value: "medium", label: "Medium", color: "#f59e0b" },
  { value: "high", label: "High", color: "#ef4444" },
];

// export
export { sidebarMenu, taskStatus, taskPriorities };

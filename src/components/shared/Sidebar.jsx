import { NavLink } from "react-router-dom";
import { Title } from "../";
import { sidebarMenu } from "../../constants/data";
import { BsFillKanbanFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="h-screen px-3 py-5 bg-neutral-900 text-neutral-300">
      <div className="flex items-center font-medium">
        <BsFillKanbanFill className="mr-2 fill-accent" size={20} />
        <Title
          className="text-lg font-normal tracking-widest font-paytone"
          inverted
        >
          Omar's Tasks
        </Title>
      </div>
      <nav className="mt-5 border-t border-neutral-700">
        <ul className="mt-6">
          {sidebarMenu.map((menuItem) => {
            return (
              <li key={menuItem.label}>
                <NavLink
                  to={menuItem.url}
                  className="flex items-center gap-2 px-2 py-2 cursor-pointer text-neutral-500 hover:text-neutral-300 duration-200 ease-in-out rounded-[5px] font-medium"
                >
                  {menuItem.icon}
                  {menuItem.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

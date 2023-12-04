import { PiUserFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/sidebarSlice";
import Title from "../Title";

const Header = () => {
  const { visible } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar(!visible));
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-lg shadow-slate-300">
      <div className="cursor-pointer " onClick={handleToggle}>
        <FaBars className="hidden lg:block" />
        <Title className="block text-xl font-normal tracking-widest font-paytone lg:hidden">
          Omar's Tasks
        </Title>
      </div>
      <div className="bg-default rounded-full w-[35px] h-[35px] flex items-center justify-center">
        <PiUserFill className="text-white bg-slate-400 w-[35px] h-[35px] p-[8px] rounded-full" />
      </div>
    </div>
  );
};

export default Header;

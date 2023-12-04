import { Title } from "./";
import { IoCloseSharp } from "react-icons/io5";

const Popup = ({ visible, label, children, ...rest }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-sm w-[90%] sm:w-[70%] lg:w-[55%] xl:w-[40%] p-5">
        <div className="flex items-center justify-between px-3 py-3 pb-3 border-b border-slate-200 bg-slate-100 rounded-[5px]">
          <Title className="text-xl">{label}</Title>
          <button
            className="flex items-center justify-center w-8 h-8 duration-200 ease-in-out rounded-sm bg-slate-200 hover:bg-slate-300"
            {...rest}
          >
            <IoCloseSharp size={20} />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Popup;

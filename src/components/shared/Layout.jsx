import { useSelector } from "react-redux";
import { Sidebar, Header } from "../";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { visible } = useSelector((state) => state.sidebar);

  return (
    <div className="flex flex-row items-center bg-slate-200 ">
      <div
        className={`absolute left:0 top-0 duration-300 ease-in-out w-[20%] hidden xl:block xl:w-[15%] ${
          visible ? "lg:block ml-0" : "ml-[-15%]"
        }`}
      >
        <Sidebar />
      </div>

      <div
        className={`self-start flex-1 h-screen duration-300 ease-in-out xl:ml-[15%] ${
          visible ? "ml-0 lg:ml-[20%] xl:ml-[15%]" : "xl:ml-[0]"
        }`}
      >
        <Header />
        <div className="grid gap-6 px-6 py-6">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;

import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-[5px] p-4 shadow-lg shadow-slate-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

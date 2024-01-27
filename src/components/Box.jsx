import React from "react";

const Box = ({ children, className }) => {
  return (
    <>
      <div
        className={`${className} overflow-x-auto p-4 border shadow-md rounded-lg bg-white`}
      >
        {children}
      </div>
    </>
  );
};

export default Box;

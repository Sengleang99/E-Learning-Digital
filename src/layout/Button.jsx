import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-white px-5 py-2 rounded-full mt-4 outline hover: showdow-[rgba(0,_0,_0,_0.24)_opx_3px_8px] hover:bg-brightGreen hover:text-green-300 transition-all">
        {props.title}
      </button>
    </div>
  );
};
export default Button;

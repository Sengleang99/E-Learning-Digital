import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h3 className=" text-4xl font-semibold">{props.title}</h3>
      <span className=" text-green-500">{props.title}</span>
    </div>
  );
};
export default Heading;

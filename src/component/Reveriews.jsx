import React from "react";
import Heading from "../layout/Heading";
import ReveriewsCard from "../layout/ReveriewsCard";
import img1 from "../assets/bg3.jpg";
import img2 from "../assets/bg3.jpg";
import img3 from "../assets/bg3.jpg";

const Reveriews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center  md:px-32 px-5">
      <Heading title="Our Reveriews" />
      <div className=" flex flex-col md:flex-row gap-5 mt-5 p-5">
        <ReveriewsCard img={img1} />
        <ReveriewsCard img={img2} />
        <ReveriewsCard img={img3} />
      </div>
    </div>
  );
};
export default Reveriews;

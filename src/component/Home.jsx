import React from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../assets/bg4-removebg-preview.png";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          Knowledge with
        </h2>
        <span className=" text-5xl font-semibold text-green-400">
          E-Learning
        </span>
        <p className=" text-lightText mt-5 text-start ">
          estudy is your gateway to a world of limitless learing possiblities.
          with our cutting-egde eleaning platform, you can explore a vast
          library of course, from academic subject to practical skills, all
          desiged to help you achieve your goals.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" w-full md:w-3/5">
        <img src={img} alt="img" className=" w-[500px] h-[500px] left-10" />
      </div>
    </div>
  );
};
export default Home;

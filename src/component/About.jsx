import React from "react";
import img from "../assets/about.jpg";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" className=" w-[400px] h-[400px]" />
      </div>
      <div className=" w-full md:-end-2/4 text-center space-y-2">
        <Heading title="About Us" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          saepe alias iusto officia, doloremque ipsum itaque quidem minus
          pariatur hic cupiditate quos nam est omnis tempora fugit impedit nihil
          porro.
        </p>
        <Link to="Contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact us" />
        </Link>
      </div>
    </div>
  );
};
export default About;

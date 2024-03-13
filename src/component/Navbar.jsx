import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className=" flex flex-row justify-between p-5 md:px-32 bg-white show-[0_3px_10px-rgb(0,0,0.2)] ">
        <div>
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
            E-Learning
          </Link>
        </div>
        <nav className=" hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
          >
            About
          </Link>
          <Link
            to="Course"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
          >
            Course
          </Link>
          <Link
            to="Reveriews"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
          >
            Reveiews
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
          >
            Contact
          </Link>
        </nav>

        <div className=" flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <IoMdMenu size={22} />
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? " translate-x-0" : " -transtate-x-full"
        } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
        >
          Home
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
        >
          About
        </Link>
        <Link
          to="Course"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
        >
          Course
        </Link>
        <Link
          to="Reveriews"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
        >
          Reveiews
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-pink-500 transition-all cursor-pointer hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

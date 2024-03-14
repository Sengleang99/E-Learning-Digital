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
      <div className="flex flex-row justify-between p-5 bg-white shadow-md md:px-32">
        <div>
          <Link to="/" className="p-1 text-2xl font-semibold cursor-pointer">
            E-Learning
          </Link>
        </div>
        <nav className="hidden gap-5 p-1 font-medium cursor-pointer md:flex">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          >
            Home
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          >
            About
          </Link>
          <Link
            to="Course"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          >
            Course
          </Link>
          <Link
            to="Reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          >
            Reviews
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          >
            Contact
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <IoMdMenu size={22} />
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-auto transition-transform duration-300`}
      >
        <Link
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          onClick={handleChange}
        >
          Home
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          onClick={handleChange}
        >
          About
        </Link>
        <Link
          to="Course"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          onClick={handleChange}
        >
          Course
        </Link>
        <Link
          to="Reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          onClick={handleChange}
        >
          Reviews
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer hover:text-pink-500 hover:underline"
          onClick={handleChange}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

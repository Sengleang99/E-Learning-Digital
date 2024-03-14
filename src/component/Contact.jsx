import React from "react";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import img from "../assets/contact-removebg-preview.png";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10  md:mx-32">
      <Heading title="contact" />
      <div className="flex flex-col justify-between w-full md:flex-row">
        <form action="" className="w-full mt-20 space-y-5  md:w-2/5 sm:px-5">
          <div className="flex flex-col ">
            <label htmlFor="userName">Your Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="userEmail">Your email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="enter your Email"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="userName">Your number</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="enter your number"
            />
          </div>
          <div className="flex flex-row justify-center ">
            <Button title="Send Message" />
          </div>
        </form>
        <div className="w-full  md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Contact;

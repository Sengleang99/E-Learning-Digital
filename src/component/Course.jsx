import React from "react";
import Heading from "../layout/Heading";
import webImg from "../assets/app1.jpg";
import appImg from "../assets/web.jpg";
import graghicImg from "../assets/digital.jpg";
import digitalImg from "../assets/designer.jpg";
import CourseCard from "../layout/CourseCard";

const Course = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title="Our Course" />
      <div className=" flex flex-wrap justify-center md: gap-6 mt-10">
        <CourseCard img={webImg} title="App Development" />
        <CourseCard img={appImg} title="Web Development" />
        <CourseCard img={graghicImg} title="Graphic Designer" />
        <CourseCard img={digitalImg} title="Digital Maketing" />
      </div>
    </div>
  );
};
export default Course;

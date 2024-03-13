import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Course from "./component/Course";
import Reveriews from "./component/Reveriews";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Course">
        <Course />
      </div>
      <div id="reveriews">
        <Reveriews />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;

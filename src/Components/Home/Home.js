import React from "react";
import Banner from "./Banner";
import ContactUs from "./Contact";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

import React from "react";
import img from "../images/myself.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img
            className="w-72"
            src={img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="">
            <h1 class="text-5xl font-bold">H! I am Md Shohag</h1>
            <p class="py-6">
              Student of Shanto mariam university of creative technology.
              Department of Computer Science and Information Technology (CSIT).
              Learning web development, next goal is being a full stack web
              developer.
            </p>
            <a
              href="https://drive.google.com/file/d/1H-MXnwNi5CsxW5gQ4dgHph-ENEYue-71/view?usp=sharing"
              download
              className="btn btn-success"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

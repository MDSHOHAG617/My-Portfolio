import React from "react";
import prj1 from "../images/prj1.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold m-10">Projects</h1>
      <div className="grid lg:grid-cols-2 gap-4 p-5">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={prj1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tools Ware </h2>
            <p>
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.{" "}
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/projectsDetails"
                className="btn w-96 lg:w-52 mx-auto btn-primary"
              >
                Project Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={prj1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tools Ware </h2>
            <p>
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.{" "}
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/projectsDetails"
                className="btn w-96 lg:w-52 mx-auto btn-primary"
              >
                Project Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={prj1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tools Ware </h2>
            <p>
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.{" "}
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/projectsDetails"
                className="btn w-96 lg:w-52 mx-auto btn-primary"
              >
                Project Details
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={prj1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tools Ware </h2>
            <p>
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.{" "}
            </p>
            <div className="card-actions justify-end">
              <Link
                to="/projectsDetails"
                className="btn w-96 lg:w-52 mx-auto btn-primary"
              >
                Project Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

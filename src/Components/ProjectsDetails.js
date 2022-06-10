import React from "react";
import prj11 from "../Components/images/prj11.png";
import prj12 from "../Components/images/pjr12.png";
import prj13 from "../Components/images/prj13.png";
import prj14 from "../Components/images/prj14.png";
import prj21 from "../Components/images/prj21.png";
import prj22 from "../Components/images/prj22.png";
import prj23 from "../Components/images/prj23.png";
import prj24 from "../Components/images/prj24.png";

const ProjectsDetails = () => {
  return (
    <div>
      {" "}
      <h1 className="text-4xl font-bold  ">Projects</h1>
      <div className="tools-ware">
        <h1 className="text-4xl font-bold bg-slate-500 p-4 my-6">Tools Ware</h1>
        <div className="grid lg:grid-cols-2  gap-5 m-5">
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj11} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto my-auto">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              About Tools Ware
            </h1>
            <p className="text-left ml-5 py-5">
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.
            </p>
          </div>
          <div class="card w-96 glass mx-auto my-auto py-8">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              Features and functionality
            </h1>
            <p className="text-left ml-5  ">
              <li>used Auth state to maintain the login and sign </li>
              <li>up Used JWT token for </li>
              <li>verify user Payment Method by using stripe You </li>
              <li>can order any tools </li>
              <li>
                from this site An Admin can manage An admin will make an admin{" "}
              </li>
            </p>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj12} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj14} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj13} alt="car!" />
            </figure>
          </div>
        </div>
      </div>
      <div className="perfume-gallery">
        <h1 className="text-4xl font-bold bg-slate-500 p-4 my-6">
          Perfume Gallery
        </h1>
        <div className="grid lg:grid-cols-2  gap-5 m-5">
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj21} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto my-auto">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              About Tools Ware
            </h1>
            <p className="text-left ml-5 py-5">
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.
            </p>
          </div>
          <div class="card w-96 glass mx-auto my-auto py-8">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              Features and functionality
            </h1>
            <p className="text-left ml-5  ">
              <li>used Auth state to maintain the login and sign </li>
              <li>up Used JWT token for </li>
              <li>verify user Payment Method by using stripe You </li>
              <li>can order any tools </li>
              <li>
                from this site An Admin can manage An admin will make an admin{" "}
              </li>
            </p>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj22} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj23} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj24} alt="car!" />
            </figure>
          </div>
        </div>
      </div>
      <div className="perfume-gallery">
        <h1 className="text-4xl font-bold bg-slate-500 p-4 my-6">
          The Brain Train
        </h1>
        <div className="grid lg:grid-cols-2  gap-5 m-5">
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj21} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto my-auto">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              About Tools Ware
            </h1>
            <p className="text-left ml-5 py-5">
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an tool store type website where you can
              parches/order tools/products. for order you should must login An
              admin can make some difference like add products delete products,
              make others an admin etc.
            </p>
          </div>
          <div class="card w-96 glass mx-auto my-auto py-8">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              Features and functionality
            </h1>
            <p className="text-left ml-5  ">
              <li>used Auth state to maintain the login and sign </li>
              <li>up Used JWT token for </li>
              <li>verify user Payment Method by using stripe You </li>
              <li>can order any tools </li>
              <li>
                from this site An Admin can manage An admin will make an admin{" "}
              </li>
            </p>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj22} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj23} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj24} alt="car!" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;

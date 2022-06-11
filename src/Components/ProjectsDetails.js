import React from "react";
import prj11 from "../Components/images/prj11.png";
import prj12 from "../Components/images/pjr12.png";
import prj13 from "../Components/images/prj13.png";
import prj14 from "../Components/images/prj14.png";
import prj21 from "../Components/images/prj21.png";
import prj22 from "../Components/images/prj22.png";
import prj23 from "../Components/images/prj23.png";
import prj24 from "../Components/images/prj24.png";
import prj31 from "../Components/images/prj31.png";
import prj32 from "../Components/images/prj32.png";
import prj33 from "../Components/images/prj33.png";
import prj34 from "../Components/images/prj34.png";
import prj41 from "../Components/images/prj41.png";
import prj42 from "../Components/images/prj42.png";
import prj43 from "../Components/images/prj43.png";
import prj44 from "../Components/images/prj44.png";
import { Link } from "react-router-dom";

const ProjectsDetails = () => {
  return (
    <div>
      {" "}
      <h1 className="text-4xl font-bold  ">Projects</h1>
      <div className="tools-ware">
        <h1 className="text-4xl font-bold bg-slate-500 p-4 my-6">Tools Ware</h1>
        <div className="link-detail">
          <a href="https://tools-ware.web.app/" className="btn  m-2">
            Live
          </a>
          <a
            href="https://github.com/MDSHOHAG617/Tools_Ware_Client-side"
            className="btn  m-2"
          >
            Client
          </a>
          <a
            href="https://github.com/MDSHOHAG617/Tools_Ware_Server-side"
            className="btn  m-2"
          >
            Sever
          </a>
        </div>
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
        <div className="link-detail">
          <a
            href="https://assignment-11-node-mongo.web.app/"
            className="btn  m-2"
          >
            Live
          </a>
          <a
            href="https://github.com/MDSHOHAG617/Perfume_Gallery-Client-side"
            className="btn  m-2"
          >
            Client
          </a>
          <a
            href="https://github.com/MDSHOHAG617/Perfume_Gallery-Server-side"
            className="btn  m-2"
          >
            Server
          </a>
        </div>
        <div className="grid lg:grid-cols-2  gap-5 m-5">
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj21} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto my-auto">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              About Perfume Gallery
            </h1>
            <p className="text-left ml-5 py-5">
              This is a ful-stack website, in this app I work both frontend and
              backend. this is an perfume gallery type website where you can add
              items delete items. for this type of thing you should must login
            </p>
          </div>
          <div class="card w-96 glass mx-auto my-auto py-8">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              Features and functionality
            </h1>
            <p className="text-left ml-5  ">
              <li>google authentication </li>
              <li>email password authentication</li>
              <li>can add products </li>
              <li>can delete products </li>
              <li>if register then you can login your self </li>
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
      <div className="brain-train">
        <h1 className="text-4xl font-bold bg-slate-500 p-4 my-6">
          The Brain Train
        </h1>
        <div className="link-detail">
          <a
            href="https://assignment-10-firebase-auth.web.app/"
            className="btn  m-2"
          >
            Live
          </a>
          <a
            href="https://github.com/MDSHOHAG617/The-Brain-Train"
            className="btn  m-2"
          >
            Client
          </a>
        </div>
        <div className="grid lg:grid-cols-2  gap-5 m-5">
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj31} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto my-auto">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              About The Brain Train
            </h1>
            <p className="text-left ml-5 py-5">
              This is an Educational website where we can hire any teacher for
              our students. There are various type of teachers available. Each
              are different demanding though, but they are so much friendly and
              helpful
            </p>
          </div>
          <div class="card w-96 glass mx-auto my-auto py-8">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              Features and functionality
            </h1>
            <p className="text-left ml-5  ">
              <li>Create user with Email And pass </li>
              <li>Reset password button </li>
              <li>Protected route (using Required Auth) </li>
              <li>Can reset password </li>
              <li>Required input field (show firebase error) </li>
            </p>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj32} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj33} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj34} alt="car!" />
            </figure>
          </div>
        </div>
      </div>
      <div className="agency">
        <h1 className="text-4xl font-bold bg-slate-500 p-4 my-6">Agency</h1>
        <div className="link-detail">
          <a href="https://mdshohag617.github.io/Agency/" className="btn  m-2">
            Live
          </a>
          <a href="https://github.com/MDSHOHAG617/Agency" className="btn  m-2">
            Client
          </a>
        </div>
        <div className="grid lg:grid-cols-2  gap-5 m-5">
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj41} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto my-auto">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              About Agency
            </h1>
            <p className="text-left ml-5 py-5">
              This is an agency type website. This website has some section like
              services, team members, portfolio and contact. This is an simple
              website but it's really special project for me, because it is my
              ey first project with html and css
            </p>
          </div>
          <div class="card w-96 glass mx-auto my-auto py-8">
            <h1 className="card-title mx-auto my-5 text-white text-2xl">
              Used Technologies
            </h1>
            <p className="text-left ml-5  ">
              <li>Html5</li>
              <li>CSS3</li>

              <li>
                It's my very first time project, this web site i made with only
                Html and CSS{" "}
              </li>
            </p>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj42} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj43} alt="car!" />
            </figure>
          </div>
          <div class="card w-96 glass mx-auto">
            <figure>
              <img src={prj44} alt="car!" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;

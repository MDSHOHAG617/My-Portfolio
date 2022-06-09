import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jma1v4i",
        "template_w1vy61f",
        e.target,
        "Aw1U_DTBP_DYYuB0S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold my-10">Contact Me</h1>
      <div>
        <div className="">
          <form onSubmit={sendEmail}>
            <div className="row card pt-5 mx-auto ">
              <div className=" col-8 form-group mx-auto">
                <input
                  className="input input-bordered sm:w-80 lg:w-96  "
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="input input-bordered sm:w-80 lg:w-96  "
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="input input-bordered sm:w-80 lg:w-96  "
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="textarea textarea-bordered sm:w-80 lg:w-96  "
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input type="submit" className="btn " value="Send "></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

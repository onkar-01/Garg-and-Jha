"use client";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import toast, { Toaster } from "react-hot-toast";

export const GetInTouch = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
  });

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.status === 200) {
        toast.success("Your message has been sent successfully");
        setUser({
          name: "",
          email: "",
          phone: "",
          concern: "",
        });
      } else {
        const data = await response.json();
        toast.error(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while submitting the form.");
    }
  };
  return (
    <FormContainer className="">
      <div className=" relative max-w-sm h-[450px] bg-white  rounded-2xl px-8 py-8 mx-auto">
        <div className="title w-[80%] border-b-2 border-[#c08e02] m-auto">
          <h1 className="text-center text-xl">Get In Touch</h1>
        </div>
        <div className="form text-[#000]">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col my-3"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-flow-row grid-cols-2 gap-x-3 ">
              <div className="form-group border border-slate-500 p-2 rounded-md my-2 font-['Josefin Sans',sans-serif]">
                <input
                  type="text"
                  className="form-control focus:outline-none border-none  w-full h-5 "
                  name="name"
                  placeholder="Your Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="form-group border border-slate-500 p-2 rounded-md my-2 font-['Josefin Sans',sans-serif]">
                <input
                  type="phone"
                  className="form-control focus:outline-none border-none  w-full h-5 "
                  name="phone"
                  placeholder="Your Phone"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group border border-slate-500 p-2 rounded-md my-2 font-['Josefin Sans',sans-serif]">
              <input
                type="email"
                className="form-control focus:outline-none border-none  w-full h-5 "
                name="email"
                placeholder="Your Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className="form-group border border-slate-500 p-2 rounded-md">
              <textarea
                className="border-none focus:outline-none w-full tetx-"
                name="concern"
                id=""
                cols="30"
                rows="5"
                placeholder="Your Concern"
                value={user.concern}
                onChange={(e) => setUser({ ...user, concern: e.target.value })}
              ></textarea>
            </div>
          </form>
        </div>
        <button
          onClick={handleSubmit}
          className="relative inline-flex items-center cursor-pointer px-6 py-3 overflow-hidden font-medium transition-all bg-white border-2 border-[#c08e02] rounded-xl hover:bg-white group my-4 justify-centerr mx-auto"
        >
          <span className="w-48 h-48 rounded-xl rotate-[-40deg] bg-[#c08e02] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-[#c08e02] transition-colors duration-300 ease-in-out group-hover:text-white">
            Submit
          </span>
        </button>
      </div>
      <Toaster />
    </FormContainer>
  );
};

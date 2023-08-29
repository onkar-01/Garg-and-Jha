"use client";
import React from "react";
import FormContainer from "./FormContainer";
import Input from "./Input";

export const GetInTouch = () => {
  return (
    <FormContainer className="">
      <div className=" relative max-w-sm h-[450px] bg-white  rounded-2xl px-8 py-8 mx-auto">
        <div className="title w-[80%] border-b-2 border-[#c08e02] m-auto">
          <h1 className="text-center text-xl">Get In Touch</h1>
        </div>
        <div className="form">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col my-3"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-flow-row grid-cols-2 gap-x-3">
              <Input placeholder="Name" name="name" />
              <Input placeholder="Phone" name="phone" />
            </div>
            <Input placeholder="Enter your Email" name="email" />

            <div className="form-group border border-slate-500 p-2 rounded-md">
              <textarea
                className="border-none focus:outline-none w-full"
                name="concern"
                id=""
                cols="30"
                rows="5"
                placeholder="Your Concern"
              ></textarea>
            </div>
          </form>
        </div>
        <button className="relative inline-flex items-center cursor-pointer px-6 py-3 overflow-hidden font-medium transition-all bg-white border-2 border-[#c08e02] rounded-xl hover:bg-white group my-4 justify-centerr mx-auto">
          <span className="w-48 h-48 rounded-xl rotate-[-40deg] bg-[#c08e02] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-[#c08e02] transition-colors duration-300 ease-in-out group-hover:text-white">
            Submit
          </span>
        </button>
      </div>
    </FormContainer>
  );
};

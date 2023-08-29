"use client";
import React from "react";

const Input = ({ placeholder, name }) => {
  return (
    <div className="form-group border border-slate-500 p-2 rounded-md my-2 font-['Josefin Sans',sans-serif]">
      <input
        type={name}
        className="form-control focus:outline-none border-none  w-full h-5 "
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

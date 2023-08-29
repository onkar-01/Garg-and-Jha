"use client";
import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Button = ({ name, href }) => {
  return (
    <div className="">
      <a
        href={href}
        class="relative cta flex lg:w-[200px] right-3 top-1 md:top-1"
      >
        {href.split(":")[0] === "tel" && <BsFillTelephoneForwardFill />}
        <span className=" hidden lg:block sm:text-white sm:font-medium sm:mx-3 ">
          {name}
        </span>
      </a>
    </div>
  );
};

export default Button;

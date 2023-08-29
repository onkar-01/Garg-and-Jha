"use client";
import React from "react";
import { WiTime12 } from "react-icons/wi";
import { TbHomeOff, TbSettingsDown } from "react-icons/tb";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { MdFreeCancellation, MdSubtitlesOff } from "react-icons/md";

const Service = ({ name, icon, state }) => {
  return (
    <div className="border-4 gradient-border border-[#c08e02] w-[200px] h-[150px] rounded-2xl flex flex-col justify-center items-center">
      {state ? (
        <div className="icon icon-container text-[#c08e02]">{icon}</div>
      ) : (
        <div className="icon  text-[#c08e02]">{icon}</div>
      )}

      <div className="name service-name h-[50px] flex justify-center items-center">
        {name}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center lg:flex-row flex-2 w-[90%] lg:w-[80%] mx-auto my-10 gap-20">
      <Service
        name="Delayed Possession"
        icon={<WiTime12 className="rotate-icon" size={94} />}
        state="1"
      />
      <Service
        name="No Construction"
        icon={<TbHomeOff className="" size={94} />}
      />
      <Service
        name="Undisclosed Fees"
        icon={<PiCurrencyCircleDollar className="rotate-icon" size={94} />}
        state={1}
      />
      <Service
        name="Registration Frauds"
        icon={<MdFreeCancellation className="rotate-icon" size={94} />}
      />
      <Service name="Title Frauds" icon={<MdSubtitlesOff size={94} />} />
      <Service
        name="Low construction Quality"
        icon={<TbSettingsDown size={94} />}
      />
    </div>
  );
};

export default Services;

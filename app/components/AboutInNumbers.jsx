"use client";
import React from "react";
import NumberAnimation from "./NumberAnimation";

const AboutNumbers = ({ Heading, state }) => {
  return (
    <div>
      <div className="number text-[#c08e02] flex flex-col">
        <NumberAnimation state={state} />
      </div>
      <div className="number_name  ">{Heading}</div>
    </div>
  );
};

const AboutInNumbers = () => {
  return (
    <div className="w-screen  h-auto my-20 flex flex-wrap justify-around">
      <AboutNumbers Heading="Confidentiality" state={1} />
      <AboutNumbers Heading="Cases Solved" />
      <AboutNumbers Heading="Amount Settled" />
      <AboutNumbers Heading="Active Cases" />
    </div>
  );
};

export default AboutInNumbers;

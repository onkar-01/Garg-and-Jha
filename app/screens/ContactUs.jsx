"use client";
import React from "react";
import Image from "next/image";
import Title from "../components/Title";
import ContactUs from "../components/ContactUs";
import MapComponent from "../components/Map";

const Contact = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/contact.png"
          className="w-screen"
          alt="contact"
          width={2220}
          height={855}
        />
        <div className="absolute w-screen top-1/2">
          <Title heading="Contact Us" />
        </div>
      </div>
      <div className="contact-container my-10 lg:space-x-5 mx-auto w-[95%] flex flex-col md:flex-row ">
        <div className="form-container w-[100%] ">
          <ContactUs />
        </div>
        <div className="map-container w-[100%] h-[500px] md:h-[600px] ">
          <MapComponent />
        </div>
      </div>
    </>
  );
};

export default Contact;

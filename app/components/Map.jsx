"use client";
import React from "react";

const MapComponent = () => {
  return (
    <div className="relative h-full">
      <div className="overflow-hidden absolute inset-0">
        <iframe
          className="w-full h-full rounded-lg"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=gurgaon&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;

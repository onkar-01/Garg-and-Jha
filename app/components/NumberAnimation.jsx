"use client";
import React, { useState, useEffect } from "react"; // Create this CSS file to style the component

const NumberAnimation = ({ state }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById("number-animation");
      const rect = component.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (number < 100) {
          setNumber((prevNumber) => prevNumber + 1);
        } else {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isVisible, number]);

  return (
    <div className="number-animation" id="number-animation">
      <div className={`number ${isVisible ? "visible" : ""}`}>
        {state ? <span>{number + "%"}</span> : <span>{number + "+"}</span>}
      </div>
    </div>
  );
};

export default NumberAnimation;

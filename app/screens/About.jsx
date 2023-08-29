"use client";
import React from "react";
import Hero from "../components/RestPageHero";
import AboutUs from "../components/AboutUs";
import TeamProfileCard from "../components/TeamProfileCard";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <Hero imgSrc={"/about.png"} />
      <div className="about_container">
        <Title heading="About Us" />
        <AboutUs />
      </div>
      <div className="team_container">
        <Title heading="Meet our team" />
        <div className="team_member flex flex-wrap justify-around w-screen">
          <TeamProfileCard />
          <TeamProfileCard />
          <TeamProfileCard />
          <TeamProfileCard />
        </div>
      </div>
    </div>
  );
};

export default About;

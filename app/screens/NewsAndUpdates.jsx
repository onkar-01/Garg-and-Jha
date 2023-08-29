"use client";
import React from "react";
import Hero from "../components/RestPageHero";
import Title from "../components/Title";
import NewsCard from "../components/NewsCard";

const NewsAndUpdates = () => {
  return (
    <div>
      <Hero imgSrc={"/news&updates.png"} />
      <Title heading={"News & Updates"} />
      <div className="news flex flex-wrap justify-around ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default NewsAndUpdates;

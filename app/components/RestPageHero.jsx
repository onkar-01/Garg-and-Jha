"use client";

const Hero = ({ imgSrc }) => {
  const style = {
    backgroundImage: `url(${imgSrc})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return <div className="h-[626px] bg-contain " style={style}></div>;
};

export default Hero;

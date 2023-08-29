"use client";
import React from "react";
import { Slide } from "react-reveal";
import Image from "next/image";

const Mid_Section = ({ image }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row flex-2 w-[90%] lg:w-[80%] mx-auto my-10">
        <Slide right>
          <div className="image  lg:w-[50%]  md:p-10 p-4 ">
            <Image
              src={image}
              alt=""
              className="rounded-tl-[50px] rounded-br-[50px] mx-auto"
              width={500}
              height={500}
            />
          </div>
        </Slide>
        <Slide left>
          <div className="content lg:w-[50%] md:p-10">
            <p className="text-[18px] text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam sapiente recusandae labore consectetur eos est ex fugiat
              consequatur voluptatem expedita, delectus ipsa totam ut doloremque
              mollitia vero soluta voluptas eveniet necessitatibus accusamus.
              Perferendis magni molestias illo, harum fuga voluptates
              laboriosam. Placeat recusandae numquam alias ipsum sit labore
              possimus nulla vitae ducimus eligendi quam ut enim, laudantium
              quae tenetur aliquid minus porro. Quidem sapiente modi qui
              distinctio, architecto quia temporibus velit unde suscipit magnam
              necessitatibus exercitationem eum saepe aut. Sapiente ad nulla at
              quisquam officiis ducimus eligendi dolore quas maxime! Fuga
              quibusdam reprehenderit voluptatem cupiditate quidem quis quaerat
              doloribus, nesciunt fugit!
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Mid_Section;

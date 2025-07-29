import Image from "next/image";
import React from "react";

const NextStepCard = ({ img, title, heading, button }) => {
  return (
    <div className="mx-auto rounded-2xl overflow-hidden shadow-lg w-[300px] h-[450px]">
      <div className="relative">
        <div className="relative w-full h-[450px] ">
          <Image src={img} alt="img1" layout="fill" className="object-cover" />

          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white z-20 text-center">
          <p className="text-[10px] font-medium mb-1 opacity-90 tracking-wide">
            {title}
          </p>
          <h2 className="text-lg font-bold">{heading}</h2>
          <button className="bg-[#177CEF] cursor-pointer py-1.5 px-4 rounded-3xl my-1">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextStepCard;

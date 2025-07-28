import Image from "next/image";
import React from "react";

const Slider = ({ contents, icon, bgColor, textColor, numColor }) => {
  return (
    <div
      className={`flex justify-center items-center overflow-hidden whitespace-nowrap ${bgColor} py-2`}
    >
      {contents?.length > 0 && (
        <marquee behavior="" direction="left" scrollamount="5">
          {contents.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center justify-center mr-10 text-[20px]"
            >
              <Image
                src={`/images/${icon}`}
                width={25}
                height={25}
                alt="icon"
                className="mr-8"
              />
              <span className={`mx-1 ${numColor}`}>{item?.num}</span>
              <span className={`${textColor}`}>{item?.text}</span>
            </span>
          ))}
        </marquee>
      )}
    </div>
  );
};

export default Slider;

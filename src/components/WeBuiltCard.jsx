import Image from "next/image";
import React from "react";

const WeBuiltCard = ({ item }) => {
  return (
    <div className="bg-[linear-gradient(107.86deg,_#FAFAFA_44.18%,_#E7F2FD_128.92%)] w-[300px] rounded-[20px] border border-[#E5E5E5]">
      <Image src={item.img} width={300} height={300} alt={item.head} />
      <div className="p-6">
        <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
          <Image src={item.icon} width={30} height={30} alt={item.head} />
        </div>
        <h1 className="font-semibold text-[18px] leading-[36px] tracking-[-0.02em] align-middle ">
          {item.head}
        </h1>
        <p className="font-normal text-[15px] leading-[28px] tracking-normal align-middle">
          {item.title}
        </p>
        <div className="w-full flex justify-end my-2">
          <div className="w-10 h-10 p-[3px] rounded-full border border-[#e2e8f0]">
            <button className="w-full h-full bg-[#e2e8f0]  rounded-full flex justify-center items-center">
              <Image
                src={"/images/arrow-right.png"}
                width={15}
                height={15}
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBuiltCard;

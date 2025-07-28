import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";

const HeroSection = () => {
  const contents = [
    {
      text: "Students learning with flipbooks & video",
      num: "70%  /",
    },
    {
      text: "Students receive at least one school response in under 5 days",
      num: "85% / ",
    },
    {
      text: "Students uses both flipbooks and videos",
      num: "1 in 3 /  ",
    },
  ];
  return (
    <>
      <div className="h-screen bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className="flex w-full justify-center">
          <div className="max-w-[570px] flex w-full justify-center items-center flex-col">
            <h1 className="font-medium text-[58px] leading-[66px] tracking-[-0.02em] text-center align-middle text-white mt-5 ">
              Learn Smarter. Teach Better. Grow Digitally.
            </h1>
            <div className="flex w-full justify-center max-w-[450px]">
              <p className="font-medium text-[14px] leading-[28px] tracking-[-0.02em] text-center align-middle  text-white">
                Inupgro lets students explore, teachers earn, and schools scale
                — all in one platform designed to evolve with education.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Slider
        contents={contents}
        icon={"star_yellow.png"}
        bgColor="bg-[#083C77]"
        textColor={"text-white"}
        numColor="text-[#FEE86A]"
      />
    </>
  );
};

export default HeroSection;

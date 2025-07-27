import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="h-screen bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="flex w-full justify-center">
        <div className="max-w-[570px] flex w-full justify-center items-center flex-col">
          <h1 className="font-medium text-[58px] leading-[66px] tracking-[-0.02em] text-center align-middle text-white mt-5 ">
            Learn Smarter. Teach Better. Grow Digitally.
          </h1>
          <div className="flex w-full justify-center max-w-[450px]">
            <p className="font-medium text-[14px] leading-[28px] tracking-[-0.02em] text-center align-middle  text-white">
              Inupgro lets students explore, teachers earn, and schools scale —
              all in one platform designed to evolve with education.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

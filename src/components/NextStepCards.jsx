import React from "react";
import NextStepCard from "./NextStepCard";

const NextStepCards = () => {
  return (
    <div className="flex items-center  justify-center my-4 min-h-[90vh]">
      <div className="w-full relative">
        <div className="absolute left-1/2 top-0 -translate-1/2 z-40">
          <NextStepCard
            img="/images/img1.png"
            title="START CREATING AS A"
            heading="Teacher"
            button="Start Teaching"
          />
        </div>
        <div className="absolute left-[320px] top-0 -translate-1/2 z-30 -rotate-8 origin-bottom-right">
          <NextStepCard
            img="/images/img2.png"
            title=" Get Started as"
            heading="Students"
            button="Join as Student"
          />
        </div>
        <div className="absolute right-[20px] top-0 -translate-1/2 z-30 rotate-8 origin-bottom-left">
          <NextStepCard
            img="/images/img3.png"
            title="Digitize Your"
            heading="Schools"
            button="Register School"
          />
        </div>
      </div>
    </div>
  );
};

export default NextStepCards;

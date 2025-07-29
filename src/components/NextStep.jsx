import React from "react";
import NextStepCards from "./NextStepCards";

const NextStep = () => {
  return (
    <div className="p-8">
      <div>
        <h1 className="font-ibm font-medium text-[56px] leading-[64px] tracking-[-0.02em] text-center">
          Ready to Take the <br /> Next Step?
        </h1>
        <p className="font-ibm font-normal text-[18px] leading-[28px] tracking-normal text-center">
          Whether you're a student, teacher, or school — Inupgro has a <br />{" "}
          journey mapped just for you.
        </p>
      </div>
      <NextStepCards />
    </div>
  );
};

export default NextStep;

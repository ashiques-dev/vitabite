import { howItWorksList } from "@/components/data";
import { LinesIcon, LogoIcon } from "@/components/svg";
import React from "react";

const Process = () => {
  return (
    <>
      <div className=" bg-secondary-4  padding relative text-center">
        <div className="absolute  w-full max-w-5xl h-full  left-1/2 -translate-x-1/2 radial-bg "></div>
        <div className="flex flex-col items-center py-10 md:py-14 relative">
          <div className=" size-14 bg-linear-to-t from-secondary-4 to-secondary-1 rounded-md inline-flex items-center justify-center border-4 border-accent-4">
            <LogoIcon className="size-10 fill-primary-2" />
          </div>
          <h2 className="text-2xl font-semibold text-accent-1 mt-10">
            Your Journey to Health and Wellness
          </h2>
          <p className="max-w-4xl mt-4">
            At Nutritionist, we believe in providing a personalized and
            comprehensive approach to help you achieve your health and wellness
            goals. Our "How it Works" process is designed to guide you through
            each step of your journey, ensuring that you receive the support,
            knowledge, and tools you need to succeed. Here's a detailed
            breakdown of our process:
          </p>
        </div>
      </div>
      <div className="mt-16 padding">
        <h2 className="font-bold text-3xl text-accent-1 text-center">
          How It Works
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-6">
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We are here to simplify the
          process and make it easy for you to navigate our platform and access
          the resources you need to achieve your goals. Here's how it works
        </p>
      </div>
      <div className=" grid md:grid-cols-2 gap-8 mt-10  padding max-w-5xl mx-auto">
        {howItWorksList.map(({ icon, text, title }, index) => (
          <div key={title} className="flex flex-col">
            <h1 className="text-8xl font-bold ">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </h1>
            <div className="bg-secondary-4 hover:bg-secondary-3 active:bg-secondary-3 border rounded-md p-4 -mt-8 relative h-full">
              <div className=" flex items-center gap-3">
                <div className="bg-secondary-1 size-8 inline-flex items-center justify-center rounded-md">
                  {icon}
                </div>
                <p className="font-medium text-accent-1 text-base md:text-lg">
                  {title}{" "}
                </p>
              </div>
              <p className="mt-4">{text} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 padding  ">
        <div className="bg-secondary-4 px-4 md:px-8 lg:px-14 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-14 border rounded-md relative overflow-clip">
          <LinesIcon className="absolute -top-14 -left-14 size-32" />
          <LogoIcon className="absolute size-40 -bottom-4 -right-14 fill-secondary-3" />
          <div className="flex flex-col gap-4 relative max-w-4xl">
            <h2 className="text-2xl font-semibold text-accent-1">
              Are you ready to embark on a transformative journey towards better
              health and wellness?
            </h2>
            <p className=" ">
              Join us at Nutritionist and let us guide you on the path to a
              healthier and happier you.
            </p>
          </div>
          <button className="px-4 py-2 rounded-md bg-secondary-1 font-medium text-accent-1 shrink-0 relative">
            Join Us Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Process;

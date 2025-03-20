"use client";
import { teamList } from "@/components/data";
import { LinesIcon, LogoIcon } from "@/components/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Team = () => {
  const [isTabDraggable, setIsTabDraggable] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className=" bg-secondary-4  padding relative text-center">
        <div className="absolute  w-full max-w-5xl h-full  left-1/2 -translate-x-1/2 radial-bg "></div>
        <div className="flex flex-col items-center py-10 md:py-14 relative">
          <div className=" size-14 bg-linear-to-t from-secondary-4 to-secondary-1 rounded-md inline-flex items-center justify-center border-4 border-accent-4">
            <LogoIcon className="size-10 fill-primary-2" />
          </div>
          <h2 className="text-2xl font-semibold text-accent-1 mt-10">
            Meet Our Team of Experts
          </h2>
          <p className="max-w-4xl mt-4">
            Our team at Nutritionist is composed of highly skilled professionals
            who are passionate about helping you achieve your health and
            wellness goals. With a diverse range of expertise in nutrition,
            coaching, and support, our team is dedicated to providing you with
            the guidance and personalized care you need. Get to know the experts
            behind our success and discover how they can make a positive impact
            on your journey to better health.
          </p>
        </div>
      </div>
      <div
        className="flex cursor-grab  gap-x-3 padding overflow-x-scroll py-6  bg-secondary-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] border"
        onMouseDown={(e) => {
          setIsTabDraggable(true);
          setStartX(e.pageX);
          setScrollLeft(e.currentTarget.scrollLeft);
        }}
        onMouseMove={(e) => {
          if (!isTabDraggable) return;
          e.preventDefault();
          e.currentTarget.scrollLeft = scrollLeft - (e.pageX - startX);
        }}
        onMouseUp={() => setIsTabDraggable(false)}
        onMouseLeave={() => setIsTabDraggable(false)}
      >
        {teamList.map(({ label }, index) => (
          <button
            key={label}
            onClick={() => {
              setSelected(index);
            }}
            className={cn(
              "inline-flex items-center justify-center h-9 py-2 px-4 text-accent-4 font-medium bg-primary-3 rounded-md shrink-0 first:ms-8 last:me-8",
              selected === index && "bg-secondary-1 text-accent-1"
            )}
          >
            {label}{" "}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 padding ">
        {teamList[selected].members.map(({ src, name, position }, index) => (
          <div key={index} className=" ">
            <div className="h-96 rounded-md overflow-hidden bg-secondary-1">
              <Image
                alt="team image"
                src={src}
                height={720}
                width={640}
                className="size-full object-cover object-center"
              />
            </div>
            <div className=" -mt-10 bg-secondary-3  p-4 pe-8 w-fit rounded-tr-4xl relative">
              <p className="text-accent-1 font-medium">{name}</p>
              <p className="text-sm">{position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 padding  ">
        <div className="bg-secondary-4 px-4 md:px-8 lg:px-14 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-14 border rounded-md relative overflow-clip">
          <LinesIcon className="absolute -top-14 -left-14 size-32" />
          <LogoIcon className="absolute size-40 -bottom-4 -right-14 fill-secondary-3" />
          <div className="flex flex-col gap-4 relative">
            <h2 className="text-2xl font-semibold text-accent-1">
              Join Our Team
            </h2>
            <p className="max-w-4xl ">
              We are always on the lookout for talented individuals who are
              enthusiastic about making a difference. Explore our career
              opportunities and join us in our mission to help people achieve
              their health and wellness goals.
            </p>
          </div>
          <button className="px-4 py-2 rounded-md bg-secondary-1 font-medium text-accent-1 shrink-0 relative">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;

"use client";

import { blogsCategoryList, blogsList } from "@/components/data";
import { LogoIcon } from "@/components/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Blog = () => {
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
            Our Blogs
          </h2>
          <p className="max-w-4xl mt-4">
            Welcome to the Blog section of Nutritionist, your trusted source for
            insightful articles, tips, and expert advice on nutrition and
            wellness. Here, we strive to provide you with engaging and
            informative content that will inspire and empower you to make
            informed decisions about your health. Explore our blog to discover a
            wealth of resources that cover a wide range of topics related to
            nutrition, fitness, and overall well-being.
          </p>
        </div>
      </div>
      <div
        className="flex cursor-grab   gap-x-3 padding overflow-x-scroll py-6  bg-secondary-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] border"
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
        {blogsCategoryList.map(({ label }, index) => (
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
      <div className=" mt-10 padding grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {blogsList.map(({ category, src, text, title }, index) => (
          <div key={index} className="">
            <p className="text-lg text-accent-1 font-semibold border-b-3 border-secondary-1 w-fit">
              {category}
            </p>
            <div className="h-60 w-11/12 md:w-10/12 lg:w-9/12 ms-auto rounded-md overflow-hidden mt-4">
              <Image
                src={src}
                alt="blog image"
                height={720}
                width={640}
                className="size-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center mt-4">
              <div className="">
                <p className="font-semibold text-accent-1">{title} </p>
                <p className="mt-2">{text} </p>
              </div>
              <button className="px-4 py-2 bg-secondary-1 font-medium text-accent-1 rounded-md shrink-0">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

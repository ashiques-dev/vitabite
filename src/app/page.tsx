import { bannerImageList, blogList, featuresList } from "@/components/data";
import { BookmarkIcon, HeartIcon } from "@/components/svg";
import Testimonials from "@/components/home/testimonial";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pricing from "@/components/home/pricing";

const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-12">
        <div className="h-96 md:h-[30rem] bg-secondary-2 rounded-b-4xl md:rounded-bl-none overflow-hidden md:col-span-5">
          <Image
            src={"/home/banner_image.png"}
            alt="banner image"
            height={640}
            width={720}
            className="size-full object-cover object-center"
          />
        </div>
        <div className="padding flex flex-col items-center md:items-start md:col-span-7 md:py-10 text-center md:text-start">
          <div className="-mt-7 md:mt-8 md:order-last flex flex-col md:flex-row items-center md:gap-2">
            <div className="flex -space-x-4 p-1.5 border border-secondary-1 rounded-full bg-background ">
              {bannerImageList.map(({ src }, index) => (
                <div
                  key={index}
                  className="size-10 rounded-full  overflow-hidden"
                >
                  <Image
                    alt="profile image"
                    src={src}
                    height={40}
                    width={40}
                    className="size-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <p className="font-semibold text-primary-1 text-base md:text-lg">
              <span className="text-primary-3">430 + </span>
              Happy Customer
            </p>
          </div>

          <p className="border-b-3 border-secondary-1 w-fit font-semibold mt-8">
            Transform Your 💖 Health with
          </p>
          <h1 className="font-bold text-4xl text-accent-1 mt-2">
            Personalized Nutrition Coaching
          </h1>
          <p className="mt-6 max-w-xl">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
          <div className="flex gap-2 flex-wrap mt-4">
            <Link
              href={"/"}
              className="px-4 py-2 font-medium bg-secondary-1 rounded-md inline-flex hover-link animated"
            >
              Get Started Today
            </Link>

            <Link
              href={"/"}
              className="px-4 py-2 font-medium bg-secondary-4 hover:bg-secondary-3 active:bg-secondary-3 border rounded-md inline-flex hover-link animated"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 padding">
        <div className="">
          <h2 className="font-bold text-3xl text-accent-1 text-center">
            Features
          </h2>
          <p className="text-center mt-2">
            Welcome to the Feature Section of Nutritionist, your ultimate
            destination for all things nutrition and wellness.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
          {featuresList.map(({ icon, text, title }) => (
            <div
              key={title}
              className="bg-secondary-4 hover:bg-secondary-3 active:bg-secondary-3 border rounded-md p-4"
            >
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
          ))}
        </div>
      </div>
      <div className="mt-16 padding">
        <div className="">
          <h2 className="font-bold text-3xl text-accent-1 text-center">
            Our Blogs
          </h2>
          <p className="text-center mt-2 max-w-3xl mx-auto">
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here&apos;s what you can expect from our blog.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 max-w-6xl mx-auto gap-4 lg:gap-6 mt-10 ">
          {blogList.map(
            ({
              text,
              title,
              category,
              src,
              timeAndDuration,
              userSrc,
              username,
              bookmark,
              heart,
            }) => (
              <div
                key={title}
                className="bg-secondary-4 hover:bg-secondary-3 active:bg-secondary-3 border rounded-md p-4 grid"
              >
                <div className="h-60 lg:h-72 rounded-md overflow-hidden">
                  <Image
                    src={src}
                    alt="blog image"
                    height={720}
                    width={640}
                    className="size-full object-center object-cover"
                  />
                </div>
                <p className="mt-4">{category} </p>
                <p className="text-lg font-semibold leading-none text-accent-1 mt-2 ">
                  {title}{" "}
                </p>
                <div className="mt-2 md:grid md:grid-rows-2  h-full">
                  <p className="">{text} </p>
                  <div className="bg-background  p-2 rounded-md border md:flex justify-between items-center gap-3 mt-2 md:mt-0">
                    <div className=" flex items-center gap-2">
                      <div className="size-12 rounded-full  overflow-hidden">
                        <Image
                          alt="profile image"
                          src={userSrc}
                          height={40}
                          width={40}
                          className="size-full object-cover object-center"
                        />
                      </div>
                      <div className="">
                        <p className="font-medium text-accent-1">{username} </p>
                        <p className="text-accent-3 text-xs">
                          {timeAndDuration}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end mt-2 md:mt-0">
                      <button className="size-8 inline-flex items-center justify-center bg-secondary-4 rounded-md border">
                        <HeartIcon
                          className={cn(heart && "stroke-red fill-red")}
                        />
                      </button>
                      <button className="size-8 inline-flex items-center justify-center bg-secondary-4 rounded-md border">
                        <BookmarkIcon
                          className={cn(bookmark && "stroke-red fill-red")}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-16 padding">
        <div className="">
          <h2 className="font-bold text-3xl text-accent-1 text-center">
            Our Tetimonials
          </h2>
          <p className="text-center mt-2">
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </div>
        <Testimonials />
      </div>

      <div className="mt-16 padding">
        <div className="">
          <h2 className="font-bold text-3xl text-accent-1 text-center">
            Our Pricing
          </h2>
          <p className="text-center mt-2">
            We outline our flexible and affordable options to support you on
            your journey to optimal health and nutrition. We believe that
            everyone deserves access to personalized nutrition guidance and
            resources
          </p>
        </div>
        <Pricing />
      </div>
    </>
  );
};

export default Home;

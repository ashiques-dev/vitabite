import { achievementsList, ourStoryList } from "@/components/data";
import { LinesIcon, LogoIcon } from "@/components/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="h-44 md:h-56 lg:h-72 grid-rows-1  grid grid-cols-3 gap-0.75  p-0.75">
        <div className="grid gap-0.75 grid-cols-2 *:rounded-md ">
          <div className="bg-secondary-2"></div>
          <div className="bg-secondary-2"></div>
          <div className="bg-secondary-2"></div>
          <div className="bg-secondary-2"></div>
        </div>
        <div className="flex items-center justify-center bg-secondary-2 rounded-md">
          <LogoIcon className="size-3/4 fill-primary-2" />
        </div>
        <div className="grid gap-0.75 grid-cols-2 *:rounded-md">
          <div className="bg-secondary-2"></div>
          <div className="bg-secondary-2"></div>
          <div className="bg-secondary-2"></div>
          <div className="bg-secondary-2"></div>
        </div>
      </div>
      <div className="mt-16 padding ">
        <div className="bg-secondary-4 py-10 px-4 rounded-md border">
          <h2 className="font-bold text-3xl text-accent-1 text-center">
            Welcome to Nutritionist
          </h2>
          <p className="mt-8 max-w-6xl mx-auto text-balance">
            Your trusted source for personalized nutrition coaching. Our mission
            is to help you achieve your weight loss and health goals through
            tailored nutrition plans and expert guidance. We understand that
            every individual is unique, and that's why we believe in providing
            personalized solutions that fit your lifestyle and preferences. With
            our team of qualified nutritionists and dietitians, we are dedicated
            to empowering you with the knowledge and tools you need to make
            lasting changes. Whether you want to shed those extra pounds,
            improve your overall well-being, or develop a healthier relationship
            with food, we are here to support you every step of the way. At
            Nutritionist, we believe that healthy eating should be enjoyable and
            sustainable. We emphasize the importance of balanced nutrition,
            focusing on whole foods and mindful eating practices. Our approach
            is rooted in scientific research and evidence-based strategies,
            ensuring that you receive the most up-to-date and accurate
            information. Join our community of individuals committed to
            transforming their lives through nutrition. Take control of your
            health, boost your energy levels, and discover the joy of nourishing
            your body with wholesome foods. We are here to guide you towards a
            healthier, happier you.
          </p>
        </div>
      </div>
      <div className="mt-16 padding ">
        <h2 className="font-bold text-3xl text-accent-1 text-center">
          Our Story
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-6">
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey.
        </p>
        <div className="mt-10 ">
          {ourStoryList.map(({ date, src, text, title }, index) => (
            <div
              key={title}
              className="grid md:grid-cols-2 md:gap-x-2 max-w-5xl mx-auto bg-secondary-1"
            >
              <div
                className={cn(
                  "h-60 md:h-auto ",
                  (index + 1) % 2 === 0 && "md:order-2"
                )}
              >
                <Image
                  src={src}
                  alt="our story image"
                  height={720}
                  width={640}
                  className="size-full object-center object-cover"
                />
              </div>
              <div
                className={cn(
                  "padding py-10 md:py-14 space-y-3 bg-secondary-4 flex flex-col",
                  (index + 1) % 2 === 0 &&
                    "md:order-1 md:items-end md:text-right"
                )}
              >
                <p className="text-lg text-accent-1 font-semibold border-b-3 border-secondary-1 w-fit">
                  {title}{" "}
                </p>
                <p className="">{text} </p>
                <p className="text-accent-1 font-medium">{date} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 padding ">
        <h2 className="font-bold text-3xl text-accent-1 text-center">
          Company Achievements
        </h2>
        <p className="text-center max-w-3xl mx-auto mt-6">
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of our clients. Here are some of our
          notable achievements
        </p>
        <div className=" grid md:grid-cols-2  gap-4 mt-10 max-w-4xl mx-auto ">
          {achievementsList.map(({ icon, text, title }) => (
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
      <div className="mt-16 padding  ">
        <div className="bg-secondary-4 px-4 md:px-8 lg:px-14 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-14 border rounded-md relative overflow-clip">
          <LinesIcon className="absolute -top-14 -left-14 size-32" />
          <LogoIcon className="absolute size-40 -bottom-4 -right-14 fill-secondary-3" />
          <div className="flex flex-col gap-4 relative">
            <h2 className="text-2xl font-semibold text-accent-1">
              We Are Proud of Our Achievements
            </h2>
            <p className="max-w-4xl ">
              But our ultimate satisfaction comes from seeing our clients
              achieve their goals and live healthier, happier lives. Join
              Nutritionist today and embark on your own transformative journey
              towards optimal health and well-being.
            </p>
          </div>
          <button className="px-4 py-2 rounded-md bg-secondary-1 font-medium text-accent-1 shrink-0 relative">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default About;

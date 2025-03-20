import { faqList, pricingDataLlist } from "@/components/data";
import { DetailedPricing } from "@/components/home/pricing";
import { LogoIcon, RightIcon, XIcon } from "@/components/svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <>
      <div className=" bg-secondary-4  padding relative">
        <div className="absolute  w-full max-w-5xl h-full  left-1/2 -translate-x-1/2 radial-bg "></div>
        <div className="flex flex-col items-center py-10 md:py-14 relative text-center">
          <div className=" size-14 bg-linear-to-t from-secondary-4 to-secondary-1 rounded-md inline-flex items-center justify-center border-4 border-accent-4">
            <LogoIcon className="size-10 fill-primary-2" />
          </div>
          <h2 className="text-2xl font-semibold text-accent-1 mt-10">
            Our Pricing
          </h2>
          <p className="max-w-4xl mt-4">
            At Nutritionist, we offer flexible pricing options to accommodate
            your unique requirements and budget. Our goal is to provide you with
            exceptional personalized nutrition coaching that is accessible and
            tailored to your needs. Choose from our three plans below and take
            the first step towards a healthier lifestyle
          </p>
        </div>
      </div>
      <DetailedPricing />
      <div className="overflow-x-scroll md:overflow-clip padding scrollbar mt-16">
        <table className=" w-full min-w-full border-collapse whitespace-nowrap">
          <thead className="border ">
            <tr className="border">
              <th className="border p-3 ">
                <div className="bg-primary-1 text-accent-4 px-4 py-2 rounded-md text-left ">
                  Features
                </div>
              </th>
              <th className="border p-3">
                <div className="bg-primary-1 text-accent-4 px-4 py-2 rounded-md ">
                  Free Plan
                </div>
              </th>
              <th className="border p-3">
                <div className="bg-primary-1 text-accent-4 px-4 py-2 rounded-md ">
                  Premium Plan
                </div>
              </th>
              <th className="border p-3">
                <div className="bg-primary-1 text-accent-4 px-4 py-2 rounded-md ">
                  {" "}
                  Ultimate Plan
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingDataLlist.map(
              ({ name, freePlan, premiumPlan, ultimatePlan }, index) => (
                <tr key={index} className="border">
                  <td className="border p-4  ">{name}</td>
                  <td className="border p-4  text-center">
                    <div
                      className={cn(
                        "size-6 bg-secondary-1 inline-flex items-center justify-center rounded-md",
                        !freePlan && "bg-secondary-3"
                      )}
                    >
                      {freePlan ? (
                        <RightIcon />
                      ) : (
                        <XIcon className="size-4 stroke-accent-2" />
                      )}
                    </div>
                  </td>
                  <td className="border p-4  text-center">
                    <div
                      className={cn(
                        "size-6 bg-secondary-1 inline-flex items-center justify-center rounded-md",
                        !premiumPlan && "bg-secondary-3"
                      )}
                    >
                      {premiumPlan ? (
                        <RightIcon />
                      ) : (
                        <XIcon className="size-4 stroke-accent-2" />
                      )}
                    </div>
                  </td>
                  <td className="border p-4  text-center">
                    <div
                      className={cn(
                        "size-6 bg-secondary-1 inline-flex items-center justify-center rounded-md",
                        !ultimatePlan && "bg-secondary-3"
                      )}
                    >
                      {ultimatePlan ? (
                        <RightIcon />
                      ) : (
                        <XIcon className="size-4 stroke-accent-2" />
                      )}
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-16 padding">
        <h2 className="text-3xl font-bold text-accent-1 text-center">FAQ</h2>
        <p className="max-w-3xl mx-auto text-center mt-2">
          We address commonly asked questions and provide comprehensive answers
          to help you navigate your way through your nutrition and wellness
          journey.
        </p>
        <div className="grid lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-7 max-w-2xl mx-auto px-4 py-6 bg-secondary-4 border rounded-md divide-y-1">
            {faqList.map(({ title, detail }) => (
              <div key={title} className="py-4 first:pt-0 last:pb-0">
                <div className="flex justify-between items-center gap-8">
                  <p className="text-accent-1 font-semibold">{title} </p>
                  <button className="size-8 inline-flex items-center justify-center bg-primary-1 rounded-md shrink-0">
                    {detail ? (
                      <XIcon className="stroke-accent-4 size-4" />
                    ) : (
                      <XIcon className="stroke-accent-4 size-4 rotate-45" />
                    )}
                  </button>
                </div>
                {detail && <p className="w-10/12 mt-2">{detail} </p>}
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 py-10 bg-secondary-4 border rounded-md flex flex-col  justify-center items-center max-w-md w-full shrink-0 h-fit  mx-auto">
            <LogoIcon className="size-32" />
            <h2 className="text-2xl font-semibold text-accent-1 mt-8">
              Ask your question
            </h2>
            <p className="mt-2">Feel Free to Ask questions on anytime</p>
            <Link
              href={"/"}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium bg-secondary-1 text-accent-1 mt-8"
            >
              Ask A Question
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

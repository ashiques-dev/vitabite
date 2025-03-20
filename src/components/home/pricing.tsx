"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { detailedPrcingList, pricingList } from "../data";

const Pricing = () => {
  const [planType, setPlanType] = useState("monthly");
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              setPlanType("monthly");
            }}
            className={cn(
              "px-4 py-2 rounded-md animated",
              planType === "monthly" ? "bg-primary-1 text-accent-4" : "border"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => {
              setPlanType("yearly");
            }}
            className={cn(
              "px-4 py-2 rounded-md animated",
              planType === "yearly" ? "bg-primary-1 text-accent-4" : "border"
            )}
          >
            Yearly
          </button>
        </div>
        <p className="text-center mt-4 font-medium text-accent-1">
          Save 50% on Yearly
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {pricingList.map(({ monthly, text, title, yearly }, index) => (
            <div
              onClick={() => {
                setSelected(index);
              }}
              key={title}
              className={cn(
                "bg-secondary-4 px-4 py-8 rounded-md flex flex-col justify-between  cursor-pointer",
                selected === index
                  ? "bg-primary-1 md:-mt-4 animated"
                  : "border "
              )}
            >
              <p
                className={cn(
                  "text-lg font-semibold",
                  selected === index ? "text-accent-4" : "text-accent-1"
                )}
              >
                {title}
              </p>
              <p
                className={cn(
                  "mt-10",
                  selected === index && "text-secondary-3 "
                )}
              >
                {text}
              </p>
              <div className="flex items-center mt-4">
                <p
                  className={cn(
                    "text-4xl font-bold leading-none  ",
                    selected === index ? "text-secondary-1" : "text-primary-1"
                  )}
                >
                  ${planType === "monthly" ? monthly : yearly}
                </p>
                <p
                  className={cn(
                    "font-medium",
                    selected === index && " text-secondary-3"
                  )}
                >
                  / {planType === "monthly" ? "monthly" : "yearly"}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelected(index);
                }}
                className={cn(
                  "w-full py-2 px-4  inline-flex justify-center font-medium mt-8 rounded-md",
                  selected === index
                    ? "bg-primary-2 border border-primary-3 text-secondary-3"
                    : "bg-secondary-1"
                )}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;

export const DetailedPricing = () => {
  const [planType, setPlanType] = useState("monthly");
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              setPlanType("monthly");
            }}
            className={cn(
              "px-4 py-2 rounded-md animated",
              planType === "monthly" ? "bg-primary-1 text-accent-4" : "border"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => {
              setPlanType("yearly");
            }}
            className={cn(
              "px-4 py-2 rounded-md animated",
              planType === "yearly" ? "bg-primary-1 text-accent-4" : "border"
            )}
          >
            Yearly
          </button>
        </div>
        <p className="text-center mt-4 font-medium text-accent-1">
          Save 50% on Yearly
        </p>
      </div>
      <div className="mt-10 padding flex flex-wrap justify-center gap-8">
        {detailedPrcingList.map(
          ({ details, monthly, title, yearly, extra }, index) => (
            <div
              onClick={() => {
                setSelected(index);
              }}
              key={title}
              className={cn(
                "bg-secondary-4 px-4 py-8 rounded-md h-fit cursor-pointer w-full max-w-sm shrink-0",
                selected === index ? "bg-primary-1 animated" : "border "
              )}
            >
              <p
                className={cn(
                  "text-lg font-semibold",
                  selected === index ? "text-accent-4" : "text-accent-1"
                )}
              >
                {title}
              </p>

              <div
                className={cn(
                  "bg-secondary-2 rounded-md flex flex-col gap-px overflow-hidden mt-10 mx-2",
                  selected === index && "bg-primary-2"
                )}
              >
                {details.map((detail, id) => (
                  <p
                    key={id}
                    className={cn(
                      " bg-secondary-3 p-4",
                      selected === index && "bg-primary-3  text-secondary-3"
                    )}
                  >
                    {detail}{" "}
                  </p>
                ))}
              </div>

              {extra && (
                <p
                  className={cn(
                    "bg-primary-1 p-4 rounded-md text-accent-4 mt-4",
                    selected === index && " bg-secondary-2 text-accent-1"
                  )}
                >
                  {extra}{" "}
                </p>
              )}
              <div className="flex items-center mt-6">
                <p
                  className={cn(
                    "text-4xl font-bold leading-none  ",
                    selected === index ? "text-secondary-1" : "text-primary-1"
                  )}
                >
                  ${planType === "monthly" ? monthly : yearly}
                </p>
                <p
                  className={cn(
                    "font-medium",
                    selected === index && " text-secondary-3"
                  )}
                >
                  / {planType === "monthly" ? "monthly" : "yearly"}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelected(index);
                }}
                className={cn(
                  "w-full py-2 px-4  inline-flex justify-center font-medium mt-8 rounded-md",
                  selected === index
                    ? "bg-primary-2 border border-primary-3 text-secondary-3"
                    : "bg-secondary-1"
                )}
              >
                Choose Plan
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
};

import React from "react";
import { ArrowIcon, LocationIcon, LogoIcon, MailIcon, PhoneIcon } from "../svg";
import { headerNavList } from "../data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 bg-primary-1 py-10 padding">
      <div className=" flex gap-4 flex-wrap justify-between">
        <div className="flex items-center md:order-1">
          <LogoIcon />
          <span className="text-accent-4 font-bold text-2xl">VitaBite</span>
        </div>
        <Link
          href="#home"
          className="size-8 inline-flex items-center justify-center rounded-full border border-primary-3 bg-primary-2 rotate-275 md:order-3"
        >
          <ArrowIcon />
        </Link>
        <div className="flex flex-wrap w-full md:w-fit md:order-2 ">
          {headerNavList.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-accent-4 font-medium px-4 py-2 inline-flex"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-8 flex-col md:items-center lg:flex-row lg:justify-between mt-8 lg:mt-10">
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href={"/"}
            className="text-accent-4 font-medium px-4 py-2 inline-flex items-center justify-center gap-2 border rounded-md border-primary-3 bg-primary-2"
          >
            <MailIcon /> hello@squareup.com
          </Link>
          <Link
            href={"/"}
            className="text-accent-4 font-medium px-4 py-2 inline-flex items-center justify-center gap-2 border rounded-md border-primary-3 bg-primary-2"
          >
            <PhoneIcon /> +91 98765 43210
          </Link>
          <Link
            href={"/"}
            className="text-accent-4 font-medium px-4 py-2 inline-flex items-center justify-center gap-2 border rounded-md border-primary-3 bg-primary-2"
          >
            <LocationIcon /> Somewhere in the World
          </Link>
        </div>
        <p
          className="text-accent-4/75 text-center"
        >
          {" "}
          &copy; {new Date().getFullYear()} VitaBite. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

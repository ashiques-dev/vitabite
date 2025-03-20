import {
  FacebookIcon,
  LinesIcon,
  LinkedInIcon,
  LocationIcon,
  LogoIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className=" bg-secondary-4  padding relative">
        <div className="absolute  w-full max-w-5xl h-full  left-1/2 -translate-x-1/2 radial-bg "></div>
        <div className="flex flex-col items-center py-10 md:py-14 relative text-center">
          <div className=" size-14 bg-linear-to-t from-secondary-4 to-secondary-1 rounded-md inline-flex items-center justify-center border-4 border-accent-4">
            <LogoIcon className="size-10 fill-primary-2" />
          </div>
          <h2 className="text-2xl font-semibold text-accent-1 mt-10">
            Contact Us
          </h2>
          <p className="max-w-4xl mt-4">
            We value your feedback, questions, and concerns at Nutritionist. Our
            dedicated team is here to assist you and provide the support you
            need on your nutritional journey. Please don't hesitate to reach out
            to us using any of the following contact methods
          </p>
        </div>
      </div>
      <div className="mt-16 padding bg-primary-1 py-6">
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Link
            href={"/"}
            className="text-accent-4 font-semibold p-4 inline-flex flex-col  items-center justify-center gap-3 border rounded-md border-primary-3 bg-primary-2"
          >
            <MailIcon className="size-5" /> hello@squareup.com
          </Link>
          <Link
            href={"/"}
            className="text-accent-4 font-semibold p-4 inline-flex flex-col  items-center justify-center gap-3 border rounded-md border-primary-3 bg-primary-2"
          >
            <PhoneIcon className="size-5" /> +91 98765 43210
          </Link>
          <Link
            href={"/"}
            className="text-accent-4 font-semibold p-4 inline-flex flex-col  items-center justify-center gap-3 border rounded-md border-primary-3 bg-primary-2"
          >
            <LocationIcon className="size-5" /> Somewhere in the World
          </Link>
        </div>
      </div>
      <div className="mt-16 padding grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-12 md:items-center">
        <div className="md:col-span-7  grid lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-medium text-accent-1 cursor-pointer inline-flex"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-9 bg-secondary-4 border rounded-md flex w-full px-4 py-2"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-medium text-accent-1 cursor-pointer inline-flex"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-9 bg-secondary-4 border rounded-md flex w-full px-4 py-2"
            />
          </div>
          <div className="space-y-2 col-span-full">
            <label
              htmlFor="number"
              className="font-medium text-accent-1 cursor-pointer inline-flex"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="h-9 bg-secondary-4 border rounded-md flex w-full px-4 py-2"
            />
          </div>
          <div className="space-y-2 col-span-full">
            <label
              htmlFor="message"
              className="font-medium text-accent-1 cursor-pointer inline-flex"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="min-h-28 bg-secondary-4 border rounded-md flex w-full px-4 py-2"
            ></textarea>
          </div>
          <button className="inline-flex px-4 py-2 rounded-md bg-secondary-1 text-accent-1 font-medium justify-center items-center ">
            Send Message
          </button>
        </div>
        <div className="md:col-span-5 ">
          <div className="h-72  rounded-md overflow-hidden">
            <Image
              src={"/contact-us/contact-us_image_one.png"}
              alt="blog image"
              height={720}
              width={640}
              className="size-full object-center object-cover"
            />
          </div>
          <div className=" flex gap-2 justify-center items-center mt-4">
            <Link
              href={"/"}
              className="inline-flex size-8 justify-center items-center bg-secondary-1 rounded-md"
            >
              <FacebookIcon />
            </Link>
            <Link
              href={"/"}
              className="inline-flex size-8 justify-center items-center bg-secondary-1 rounded-md"
            >
              <TwitterIcon />
            </Link>
            <Link
              href={"/"}
              className="inline-flex size-8 justify-center items-center bg-secondary-1 rounded-md"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
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

export default ContactUs;

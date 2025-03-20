"use client";
import React, { useEffect, useState } from "react";
import { LogoIcon, MenuIcon, XIcon } from "../svg";
import { headerNavList } from "../data";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = "auto";
        setShow(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileNav = () => {
    setShow(!show);
    document.body.style.overflow = show ? "auto" : "hidden";
  };

  return (
    <>
      <div id="home" className="padding bg-primary-1">
        <div className=" flex items-center justify-between py-4">
          <Link href={"/"} className="flex items-center">
            <LogoIcon />
            <span className="text-accent-4 font-bold text-2xl">VitaBite</span>
          </Link>
          <div className="hidden md:flex">
            {headerNavList.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-accent-4 font-medium px-4 py-2"
              >
                {label}
              </Link>
            ))}
            <Link
              href={"/contact-us"}
              className="bg-secondary-1 font-medium px-4 py-2 rounded-md"
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={closeMobileNav}
            className="border border-primary-3 bg-primary-2 hover:bg-primary-1 p-2 rounded-md md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      {show && (
        <div className="h-svh w-full fixed bg-primary-1 top-0 z-10 py-14 overflow-y-scroll">
          <div className="place-self-end me-8 ">
            {" "}
            <button
              onClick={closeMobileNav}
              className="bg-primary-2 size-8 inline-flex justify-center items-center rounded-md border border-primary-3 "
            >
              <XIcon />{" "}
            </button>
          </div>

          <div className="flex flex-col gap-4 items-start place-self-center mt-14">
            {headerNavList.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-accent-4 font-medium px-4 py-2"
                onClick={closeMobileNav}
              >
                {label}
              </Link>
            ))}
            <Link
              href={"/contact-us"}
              className="bg-secondary-1 font-medium px-4 py-2 rounded-md"
              onClick={closeMobileNav}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

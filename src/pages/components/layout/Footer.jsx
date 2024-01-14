import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "next/image";

function Footer() {
  return (
    <div className="web:bg-[#F6F6F7] w-full flex flex-col web:px-[350px] px-5 py-16">
      <div className="flex flex-col web:flex-row gap-5 items-center web:items-start">
        <div className="web:flex flex-col gap-3 w-[23%] hidden">
          <h1 className="text-lg font-semibold">About</h1>
          <p className="text-[#696A75] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <h3 className="text-[#181A2A] mt-3 mb-[-12px]">
            Email : info@jstemplate.net
          </h3>
          <h3 className="text-[#181A2A] ">Phone : 880 123 456 789</h3>
        </div>
        <div className="flex flex-col gap-2 w-[50%] items-center">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <IconContext.Provider
          value={{ color: "#6D6E76", className: "global-class-name" }}
        >
          <div className="flex gap-4">
            <FaFacebook />
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
          </div>
        </IconContext.Provider>
      </div>
      <div className="border-[1px] web:block hidden mt-4 mb-4"></div>
      <div className=" mt-4 flex web:justify-between justify-center items-center">
        <div className="flex gap-2">
          <Image src='./Logo.svg' width={48} height={48} alt='logosmall'/>
          <div className="flex flex-col">
            <h1 className="text-xl">Meta<span className="font-bold">Blog</span></h1>
            <h1>© All Rights Reserved.</h1>
          </div>
        </div>
        <div className="web:flex gap-8 hidden">
          <h1>Terms of Use</h1>
          <h1>Privacy Policy</h1>
          <h1>Cookie Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

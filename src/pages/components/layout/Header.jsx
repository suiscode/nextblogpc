"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menu, setMenu] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <div className="flex web:px-[150px] px-5 justify-between items-center web:p-0 min-w-[390px] w-full fixed top-0 h-[80px] bg-white z-100 ">
      <Link
        href="/"
        className="min-w-[135px] min-h-[26px] relative web:w-[158px] web:h-[36px] web-[135px] h-[25px]"
      >
        <Image src="/Logo.png" layout="fill" alt="logo" />
      </Link>
      <FiMenu
        onClick={() => setMenu((prev) => !prev)}
        className={`w-8 h-8 pointer web:hidden ${menu ? "hidden" : "flex"}`}
      />
      <div className="hidden web:flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="hidden web:flex items-center gap-2">
        <form className="flex relative bg-[#F4F4F5] py-2 pl-4 pr-2 items-center rounded-lg">
          <input placeholder="Search" className="bg-[#F4F4F5] outline-none" />
          <IoIosSearch className="w-4 h-4 cursor-pointer" />
        </form>
        <Link href="/profile">My Profile</Link>

        {!user ? (
          ""
        ) : (
          <button onClick={() => signOut(auth)} href="/login">
            Sign out
          </button>
        )}
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ scale: "0%" }}
            animate={{ scale: "100%", transition: { duration: 0.5 } }}
            exit={{ scale: "0%" }}
            className="w-[200px] bg-white h-[200px] justify-center items-center border-[1px] rounded-lg flex flex-col  absolute top-0 right-0 m-5"
          >
            <FiMenu
              onClick={() => setMenu((prev) => !prev)}
              className={`w-8 h-8 pointer web:hidden`}
            />
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;

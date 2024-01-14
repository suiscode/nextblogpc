import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <div className='flex web:px-[350px] px-5 justify-between items-center web:p-0 min-w-[390px] w-full fixed top-0 h-[80px] bg-white z-100'>
        <Link href='/' className='min-w-[135px] min-h-[26px] relative web:w-[158px] web:h-[36px] web-[135px] h-[25px]'>
        <Image src='/Logo.png' layout='fill' alt='logo' />

        </Link>
        <FiMenu className='w-8 h-8 pointer web:hidden'/>
        <div className='hidden web:flex gap-10'>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
        </div>
        <form className='hidden web:flex relative bg-[#F4F4F5] py-2 pl-4 pr-2 items-center rounded-lg'>
            <input placeholder='Search' className='bg-[#F4F4F5] outline-none'/>
            <IoIosSearch className='w-4 h-4 cursor-pointer'/>
        </form>
    </div>
  )
}

export default Header
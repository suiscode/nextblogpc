import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Work_Sans } from "next/font/google";

export const worksans = Work_Sans(
  { subsets: ['latin'],
  display: 'swap', }
  );

function Layout({children}) {
  return (
    <div className={`w-[99vw]  web:pt-8 flex flex-col items-center gap-[100px]`}>
        <style jsx global>{`
        body {
          font-family: ${worksans.style.fontFamily};
        }
      `}
      </style>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
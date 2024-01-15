import React from 'react'
import Layout from './components/layout/Layout'
import Link from 'next/link'

function error() {
  return (
    <Layout>
    <div className='flex gap-6 w-screen h-[500px] justify-center items-center mt-[80px]'>
        <h1 className='text-[72px]'>404</h1>
        <div className='flex flex-col border-l-2 h-[200px] pl-8 justify-center gap-4 w-[500px]'>
            <h1 className='text-[24px] font-semibold'>Page Not Found</h1>
            <p>We're sorry, This page is unknown or does not exist the page you are looking for.</p>
            <Link href='/' className='bg-[#4B6BFB] text-white px-4 py-[10px] w-[150px] rounded-lg'>Back To Home</Link>
        </div>
    </div>
    </Layout>
  )
}

export default error
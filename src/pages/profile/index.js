'use client'
import React from 'react'
import Layout from '../components/layout/Layout'
import { auth } from '@/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'

function index() {
  
  const router = useRouter()
  const [user] = useAuthState(auth)

  if(!user) {
    router.push('/login')
  }
  console.log(user);

  return (
    <Layout>
    <div className='mt-[80px]'>
      <h1>hello</h1>
    </div>
    </Layout>
  )
}

export default index
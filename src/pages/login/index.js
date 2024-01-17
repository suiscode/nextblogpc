'use client'
import {React, useState} from 'react'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/config'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'


function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()

    const handleSignIn =async()=>{
        try{
            const res = await signInWithEmailAndPassword(email,password)
            setEmail('')
            setPassword('')
        } catch(e){
            console.log(e);
        }
    }

    const [user] =useAuthState(auth)

    if (user) {
        router.push('/')
    }

  return (
    <Layout>
    <div className='flex w-screen h-[850px] justify-center items-center'>
        <div className='flex flex-col w-[400px] py-8 border-2 rounded-xl p-4 gap-4 items-center border-black'>
        <input
            className="w-full h-12 border-2 rounded-xl px-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input
            className="w-full h-12 border-2 rounded-xl px-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
            <button onClick={handleSignIn} className='w-full h-14 text-2xl border-2 rounded-xl px-3'>Sign in</button>
            <h1 className='text-xl'>or</h1>
            <Link href='/signup' className='flex justify-center items-center w-full h-14 text-2xl border-2 rounded-xl px-3'>Sign up</Link>
        </div>
    </div>
    </Layout>
  )
}

export default Index
"use client";
import React from "react";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/config'
import { useRouter } from "next/router";

function page() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const handleSignUp= async ()=>{
    try{
      const res = await createUserWithEmailAndPassword(email, password)
    setEmail('')
    setPassword('')
    router.push('/login')
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <Layout>
      <div className="flex w-screen h-[850px] justify-center items-center">
        <div className="flex flex-col w-[400px] py-8 border-2 rounded-xl p-4 gap-4 items-center border-black">
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
          <button onClick={handleSignUp} className="w-full h-14 text-2xl border-2 rounded-xl px-3">
            Sign up
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default page;

import React, { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import { Plus_Jakarta_Sans } from "next/font/google";

export const jakartasans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

function index() {

  const [letter,setLetter] = useState()

  const name = useRef()
  const email = useRef()
  const subject = useRef()
  const message = useRef()

  const handleSubmit =(e)=>{
    e.preventDefault()

    setLetter({'name':name.current.value,'email':email.current.value,'subject':subject.current.value,'message':message.current.value})
    name.current.value=''
    email.current.value=''
    subject.current.value=''
    message.current.value=''
  }
  console.log(letter);


  return (
    <Layout>
      <style jsx global>
        {`
          p {
            font-family: ${jakartasans.style.fontFamily};
          }
        `}
      </style>
      <div className="flex flex-col gap-8 web:px-[350px] mt-[120px] items-start w-2/3">
        <h1 className="text-4xl font-semibold">Contact us</h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="w-full flex justify-between">
          <div className="flex flex-col border-[1px] p-4 rounded-xl w-[45%]">
            <h1 className="text-2xl font-semibold mb-[10px]">Address</h1>
            <h5>1328 Oak Ridge Drive, Saint Louis, Missouri</h5>
          </div>
          <div className="flex flex-col border-[1px] p-4 rounded-xl w-[45%]">
            <h1 className="text-2xl font-semibold mb-[10px]">Contact</h1>
            <h5>313-332-8662</h5>
            <h5>info@email.com</h5>
          </div>
        </div>
        <div className="w-full bg-[#F6F6F7] rounded-xl p-10 items-start flex flex-col gap-6">
          <h1>Leave a Message</h1>
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <input ref={name} className="p-2 h-[38px] rounded-md w-[48%]" placeholder="Your Name" type="text" required/>
              <input ref={email} className="p-2 h-[38px] rounded-md w-[48%]" placeholder="Your Email" type="email" required/>
            </div>
            <input ref={subject} className="p-2 h-[38px] rounded-md " placeholder="Subject" type="text" required/>
            <textarea ref={message} className="p-2 h-[134px] rounded-md" placeholder="Write a message" type="text" required />
            <button className="self-start px-4 py-[10px] text-sm bg-[#4B6BFB] text-white rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default index;

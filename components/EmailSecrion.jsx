"use client"
import React from 'react'
import GithubIcon from "./../public/github-icon.svg"
import LinkedinIcon from "./../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect,useState } from 'react'
export const EmailSecrion = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={
      email:e.target.email.value,
      subject:e.target.subject.value,
      message:e.target.message.value,
    }

    const JSONdata=JSON.stringify(data);
    const endpoint='/api/send'

    const options={
           method:"POST",
           headers:{
            'Content-Type':"application/json"
           },
           body : JSONdata
    }

const response=await fetch(endpoint,options);
const resData=await response.json();
console.log("resdata",resData)
if(resData.status===200){
  console.log("message sent")
  setEmailSubmitted(true)
}
  }
  return (
    <section className='grid md:grid-cols-2 relative my-12 md:my-12 py-24 gap-4'>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
     <div className=' z-10'>
     <h5 className=' text-xl font-bold text-white my-2'>Lets connect</h5> 
     <p className=' text-[#ADB7BE] mb-4 max-w-md'>
     I'm currently looking for new opportunities, my inbox is always open. 
     Whether you have a
    question or just want to say hi, I'll try my best to get back to you!
     </p>
     <div className=' socials flex flex-row gap-2'>
        <Link href="github.com">
            <Image
                src={GithubIcon}
                alt='Github icon'
            />
        </Link>
        <Link href="linkdin.com">
            <Image
                src={LinkedinIcon}
                alt='LinkedinIcon'
            />
        </Link>
     </div>
     </div>  
     <div>
        <form className=' flex flex-col gap-4'
        onSubmit={handleSubmit}>
        <label htmlFor='email' className=' text-white block text-sm font-medium'>
            enter email
        </label>
            <input 
            name='email'
            type='email'
             id='email' 
             className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
             required placeholder='jacob@gmail.com'/>
              <label htmlFor='subject' className=' text-white block text-sm font-medium'>
         Suject
        </label>
            <input 
            name='subject'
            type='text'
             id='text' 
             className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
             required placeholder='just saying hi'/>
                    <label htmlFor='message' className=' text-white block mb-2 text-sm font-medium'>
            message
           </label>
            <textarea
            name='message'
            type='message'
             id='message' 
             className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
             required placeholder='lets talk about...'/>
                <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {
              emailSubmitted &&
              <p className=' text-green-500 text-sm mt-2'>
                Email sent Successful
              </p>

            }
        </form>
     </div>
    </section>
  )
}

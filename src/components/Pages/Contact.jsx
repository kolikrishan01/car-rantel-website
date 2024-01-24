import React from 'react'
import CompoBanner from '../UI/CompoBanner'
import Button from "../UI/Button"
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Contact = () => {
  return (
    <section>
        <CompoBanner compoName={"Contact Us"}/>
        <div className=' flex items-center justify-center my-10'>
          <div className='  w-[80%] h-full flex items-start justify-start gap-5 max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap max-xl:flex-wrap'>
            <div className='  w-full h-full'>
              
                
              
              <div className=' flex items-start justify-center flex-col w-full gap-8'>
              <h2 className=' font-semibold text-ms'>Get In Touch</h2>
              <input type="text" className=' border w-full h-[40px] pl-3 outline-none' placeholder='Your Name'/>
              <input type="text" className=' border w-full h-[40px] pl-3 outline-none' placeholder='Email'/>
              <textarea name="" id="" cols="30" rows="10" className=' border w-full pl-3 pt-3 outline-none' placeholder='Message'></textarea>
              <Button background={"#ff4c30"} button={"Send Message"}/>
              </div>
            </div>
            <div className='  w-full h-full'>
              <h2 className=' font-semibold text-ms pb-2'>Contact Information</h2>
              <p  className=' text-sm text-gray-400 pb-2'>123 ZindaBazar, Sylhet, Bangladesh</p>
             <div className=' text-sm flex items-center gap-1 pb-2' ><p >Phone:</p><span className=' text-gray-400'>+88683896366</span></div>
             <div className=' text-sm flex items-center gap-1 pb-2'><p>Email:</p> <span className=' text-gray-400'>example@gmail.com</span></div>
             <div>
              <h2>Follow Us</h2>
              <div className=' flex items-start justify-start gap-2 pt-4'>
              <TiSocialFacebook size={20} color='#ff4c30'/>
              <BiLogoInstagramAlt size={20} color='#ff4c30'/>
              <TiSocialLinkedin size={20} color='#ff4c30'/>
              <TiSocialTwitter size={20} color='#ff4c30'/>
              </div>
            </div>
            </div>
           
          </div>
        </div>
    </section>
  )
}

export default Contact

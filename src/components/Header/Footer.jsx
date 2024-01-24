import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Button from '../UI/Button';
const Footer = () => {
  return (
  <section>
    <div className=' w-full border h-full flex items-center justify-center bg-white mt-8'>
  <div className=' w-[80%] flex items-center justify-between flex-wrap max-sm:h-full max-sm:w-full max-md:h-full max-md:w-full gap-5 max-sm:justify-center max-md:justify-center'>
  <div className=' w-[300px] h-[300px] flex items-start justify-center gap-8 flex-col max-sm:items-center'>
        <h1 className=' text-2xl'><span className=' font-bold'>CAR</span> Rental</h1>
        <p className=' text-gray-400 max-sm:text-center'>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
       <div>
       <div className=' flex items-center gap-2'><IoMdCall color='#ff4c30'/><span>+91- 8726384763</span></div>
        <div className=' flex items-center gap-2'><MdOutlineEmail color='#ff4c30'/><span>example@gmail.com</span></div>
       </div>
    </div>



    <div className=' w-[300px] h-[300px] flex items-start justify-center gap-8 flex-col max-sm:items-center'>
        <h1 className=' text-2xl font-bold'>COMPANY</h1>
        <ul className=' flex items-start justify-center gap-2 flex-col'>
            <li>New York</li>
            <li>Career</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How We Work</li>
        </ul>
    </div>




    <div className=' w-[300px] h-[300px] flex items-start justify-center gap-10 flex-col max-sm:items-center'>
        <h1 className=' text-2xl font-bold'>WORKING HOURS</h1>
       
       <p><span className=' text-gray-400'>Mon - Fri:</span> 09:00AM - 09:00PM</p>
        <p><span className=' text-gray-400'>Sat:</span> 09:00AM - 07:00PM</p>
        <p><span className=' text-gray-400'>Sun:</span> Closed</p>
      
    </div>


    <div className=' w-[300px] h-[300px] flex items-start justify-center gap-4 flex-col max-sm:items-center'>
        <h1 className=' text-2xl font-bold'>SUBSCRIPTION</h1>
        <p className=' text-gray-400 max-sm:text-center'>Subscribe your Email address for latest news & updates.</p>
       <div className=' w-full'>
       <input type="text" className=' w-full h-[50px] outline-none pl-4 bg-gray-100' placeholder='Enter Email Address'/>
       </div>
        <Button button={"Submit"} background={"#ff4c30"}/>
    </div>
  </div>
    </div>
  </section>
  )
}

export default Footer

import React from 'react'
import "../Style/book-a-car.css"
import { FaCarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Button from '../UI/Button'
const BookACar = () => {
  return (
   <section className=' flex items-center justify-center w-[100%] my-10'>
    <div className='book-a-car w-[70%] h-[320px] max-lg:h-full max-xl:h-full max-sm:h-full max-md:h-full max-sm:w-full max-md:w-full max-sm:mx-8 max-md:mx-8 max-sm:pb-6 max-md:pb-6 shadow-xl'>
    <div className=' pt-9 pl-9 pb-10'>
    <h1 className=' text-2xl font-semibold'>Book a car</h1>
    </div>

{/* =========================book a car input fuield==================== */}
<div className='w-full flex items-center justify-between px-8 gap-5 max-md:flex-wrap max-sm:flex-wrap max-lg:flex-wrap mb-5 max-xl:flex-wrap'>
    <div className=' flex items-start justify-start flex-col w-[320px] max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
        <label className='flex items-center pb-2'>
        <FaCarAlt color='#ff4c30'/>
        <span className='text-sm font-semibold'>Select Your Car Type</span>
        </label>
        <input type="text" placeholder='Select your car type' className='w-full border h-[50px] pl-4 outline-none' />
    </div>
    <div className=' flex items-start justify-start flex-col w-[400px]  max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
        <label className='flex items-center pb-2'>
        <FaLocationDot color='#ff4c30'/>
        <span className='text-sm font-semibold'>Pick-up</span>
        </label>
        <input type="text" placeholder='Delhi'  className='w-full border h-[50px] pl-4 outline-none'/>
    </div>
    <div className=' flex items-start justify-start flex-col w-[400px]  max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
    <label className='flex items-center pb-2'>
        <FaLocationDot color='#ff4c30'/>
        <span className='text-sm font-semibold'>Drop-of</span>
        </label>
    <input type="text" placeholder='Mumbai' className='w-full border h-[50px] pl-4 outline-none'/>
    </div>
</div>

<div className='w-full flex items-center justify-between px-8 gap-5 max-md:flex-wrap max-sm:flex-wrap max-lg:flex-wrap max-xl:flex-wrap'>
    <div className=' flex items-start justify-start flex-col w-[320px] max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
        <label className='flex items-center pb-2'>
        <FaCalendarAlt color='#ff4c30'/>
        <span className='text-sm font-semibold'>Pic-up</span>
        </label>
        <input type="text" placeholder='Select your car type' className='w-full border h-[50px] pl-4 outline-none' />
    </div>
    <div className=' flex items-start justify-start flex-col w-[100px]  max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
        <label className='flex items-center pb-5'>
        <span className='text-sm font-semibold pb-2'></span>
        </label>
        <select type="text" placeholder='Delhi'  className='w-full border h-[50px] text-[#b5b5b5] outline-none'>
            <option>12:00AM</option>
            <option>01:00AM</option>
            <option>01:30AM</option>
            <option>02:00AM</option>
            <option>02:30AM</option>
            <option>03:00AM</option>
            <option>03:30AM</option>
            <option>04:00AM</option>
            <option>04:30AM</option>
            <option>05:00AM</option>
            <option>05:30AM</option>
            <option>06:00AM</option>
            <option>06:30AM</option>
            <option>07:00AM</option>
            <option>07:30AM</option>
            <option>08:00AM</option>
            <option>08:30AM</option>
            <option>09:00AM</option>
            <option>09:30AM</option>
            <option>10:00AM</option>
            <option>10:30AM</option>
            <option>11:00AM</option>
            <option>11:30AM</option>
            <option>12:00PM</option>
            <option>01:00PM</option>
            <option>01:30PM</option>
            <option>02:00PM</option>
            <option>02:30PM</option>
            <option>03:00PM</option>
            <option>03:30PM</option>
            <option>04:00PM</option>
            <option>04:30PM</option>
            <option>05:00PM</option>
            <option>05:30PM</option>
            <option>06:00PM</option>
            <option>06:30PM</option>
            <option>07:00PM</option>
            <option>07:30PM</option>
            <option>08:00PM</option>
            <option>08:30PM</option>
            <option>09:00PM</option>
            <option>09:30PM</option>
            <option>10:00PM</option>
            <option>10:30PM</option>
            <option>11:00PM</option>
            <option>11:30PM</option>
        </select>
    </div>
    <div className=' flex items-start justify-start flex-col w-[400px]  max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
    <label className='flex items-center pb-2'>
        <FaLocationDot color='#ff4c30'/>
        <span className='text-sm font-semibold'>Drop-of</span>
        </label>
    <input type="text" placeholder='Mumbai' className='w-full border h-[50px] pl-4 outline-none'/>
    </div>
    <div className=' flex items-start justify-start flex-col w-[100px]  max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full'>
        <label className='flex items-center pb-5'>
        <span className='text-sm font-semibold pb-2'></span>
        </label>
        <select type="text" placeholder='Delhi'  className='w-full border h-[50px] text-[#b5b5b5] outline-none'>
            <option>12:00AM</option>
            <option>01:00AM</option>
            <option>01:30AM</option>
            <option>02:00AM</option>
            <option>02:30AM</option>
            <option>03:00AM</option>
            <option>03:30AM</option>
            <option>04:00AM</option>
            <option>04:30AM</option>
            <option>05:00AM</option>
            <option>05:30AM</option>
            <option>06:00AM</option>
            <option>06:30AM</option>
            <option>07:00AM</option>
            <option>07:30AM</option>
            <option>08:00AM</option>
            <option>08:30AM</option>
            <option>09:00AM</option>
            <option>09:30AM</option>
            <option>10:00AM</option>
            <option>10:30AM</option>
            <option>11:00AM</option>
            <option>11:30AM</option>
            <option>12:00PM</option>
            <option>01:00PM</option>
            <option>01:30PM</option>
            <option>02:00PM</option>
            <option>02:30PM</option>
            <option>03:00PM</option>
            <option>03:30PM</option>
            <option>04:00PM</option>
            <option>04:30PM</option>
            <option>05:00PM</option>
            <option>05:30PM</option>
            <option>06:00PM</option>
            <option>06:30PM</option>
            <option>07:00PM</option>
            <option>07:30PM</option>
            <option>08:00PM</option>
            <option>08:30PM</option>
            <option>09:00PM</option>
            <option>09:30PM</option>
            <option>10:00PM</option>
            <option>10:30PM</option>
            <option>11:00PM</option>
            <option>11:30PM</option>
        </select>
    </div>
<div className=' pt-7 max-sm:w-full max-md:w-full max-lg:w-full max-lg:pb-5 max-xl:pb-5 max-xl:w-full'>
<Button button={"Search"} background={"#ff4c30"} width={"full"}/>
</div>
</div>
    </div>
   </section>
  )
}

export default BookACar

import React from 'react'
import about1 from "../assets/about-3.png"
import about2 from "../assets/about-2.png"
import about3 from "../assets/about-1.png"
import about_img from "../assets/about_image.jpg"
const AboutUs = () => {
  return (
    <section>
    <div className=' flex items-center justify-center mt-32'>
        <div className=' w-[70%] h-[100%] pt-5'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold pb-3'>Plan your trip now</h4>
                <h1 className='text-5xl font-bold'><span className='text-[#ff4c30]'>Quick</span> & easy car rental</h1>
            </div>
            <div className=' pt-20 flex items-center justify-between max-sm:flex-wrap max-md:flex-wrap max-xl:justify-center max-xl:gap-10 max-xl:flex-wrap max-sm:gap-10 max-md:gap-10 max-md:justify-center max-sm:justify-center'>
                <div className=' w-[300px] flex items-center justify-center flex-col gap-2'>
                    <img src={about1} alt="" />
                    <h3 className='text-2xl font-semibold' >Select Car</h3>
                    <p className=' text-center text-sm text-gray-400'>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                </div>
                <div className=' w-[300px] flex items-center justify-center flex-col gap-2'>
                    <img src={about2} alt="" />
                    <h3 className='text-2xl font-semibold'>Select Car</h3>
                    <p className=' text-center text-sm text-gray-400'>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                </div>
                <div className=' w-[300px] flex items-center justify-center flex-col gap-2'>
                    <img src={about3} alt="" />
                    <h3 className='text-2xl font-semibold'>Select Car</h3>
                    <p className=' text-center text-sm text-gray-400'>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                </div>
            </div>
        </div>
        </div>

        <div className='w-full h-[100%] py-48 flex items-center justify-center'>
        <div className='text-center'>
                <h4 className='text-2xl font-semibold pb-3'>Vehicle Models</h4>
                <h1 className='text-5xl font-bold pb-5'>Our rental fleet</h1>
                <p className=' text-center text-sm text-gray-400'>To contribute to positive change and achieve our sustainability <br /> goals with many extraordinary</p>
            </div>
        </div>

        <div className=' flex items-center justify-center'>
        <div className='w-[70%] h-full  flex items-center justify-between flex-row pr-20 max-sm:p-0 max-md:p-0  max-lg:p-0 max-xl:p-0 max-sm:p-0max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap max-xl:flex-wrap max-lg:justify-center max-xl:justify-center max-md:justify-center max-sm:justify-center max-sm:gap-10 max-md:gap-10 max-lg:gap-10 max-xl:gap-10'>
        <div>
            <img src={about_img} alt="" />
        </div>
        <div className=''>
        <div className=' w-[500px] max-sm:w-full max-md:w-full h-full flex items-center justify-center gap-10 flex-col text-center'>
                <h4 className='text-2xl font-semibold pb-3'>About Company</h4>
                <h1 className='text-5xl font-bold pb-5'>You start the engine and your adventure begins</h1>
                <p className=' text-center text-sm text-gray-400'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUs

import React from 'react'
import "../Style/home.css"
import bannerImg from "../assets/banner_car.png"
import Button from '../UI/Button'
import BookACar from '../UI/BookACar'
import AboutUs from '../UI/AboutUs'
import Serviece from '../UI/Serviece'
import carData from '../data/carData'
import CarItem from '../UI/CarItem'
import Testimonial from '../UI/Testimonial'
import BlogItem from '../UI/BlogItem'
import blogData from '../data/blogData'


const Home = () => {
  return (
    <>
    <section className=' h-full w-full'>
      {/* ================= banner section ========================== */}
      <div className='hero-banner h-[750px]  w-[full] bg-[#f8f8f8] flex items-center justify-center'>
     <div className=' w-[100%] h-full flex items-center justify-between pl-[16rem] max-md:flex-col-reverse max-md:w-full max-md:px-0 max-sm:flex-col-reverse max-sm:w-full max-sm:px-0 max-lg:w-full max-lg:p-5'>
     <div className=' w-[520px] h-[520px] flex items-start justify-evenly flex-col max-sm:items-center max-sm:w-full max-lg:w-full max-md:items-center'>
      <div className=' flex items-start justify-start flex-col gap-5 max-sm:items-center max-sm:justify-center max-md:items-center max-md:justify-center'>
      <span className=' text-2xl font-semibold'>Plan your trip now</span>
        <h1 className=' text-5xl font-bold max-sm:text-center max-md:text-center'>Save <span className=' text-[#ff4c30]'>big</span> with our car rental</h1>
        <p className=' text-sm text-gray-400  max-sm:text-center'>To contribute to positive change and achieve our sustainability <br /> goals with many extraordinary</p>
      </div>
      <div className=' flex item-start justify-center gap-3 max-sm:flex-wrap max-md:flex-wrap'>
        <Button button={"Book Ride"} background={"#ff4c30"}/>
        <Button button={"Learn More"} background={"#000"} boxshadow={"shadow-none"}/>
        {/* <button className={`button px-8 py-3  bg-[#000]  text-white `}>Learn More</button> */}
      </div>
     </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
     </div>
     </div>
      <BookACar />
    <AboutUs />
    <Serviece />
    <div className=' w-full '>
    <div className='text-center pt-24'>
    <h4 className='text-2xl font-semibold pb-3'>Come with</h4>
    <h1 className='text-5xl font-bold'> Hot <span className='text-[#ff4c30]'>Offers</span></h1>
    </div>
  <div className=' flex items-center justify-center mt-20'>
  <div className=' w-[90%] py-5 max-sm:w-full max-md:w-full'>
  <div className=' flex items-center justify-center gap-10 flex-wrap'>
  {
      carData.slice(0,6).map((item)=>{
        return(
          <CarItem item={item} key={item?.id}/>
        )
      })
    }
    </div>
    </div>
  </div>
    </div>


   
      <div className='home-bg-image border w-full h-[400px] my-20 '>
        <div className='overlay flex items-center justify-center'>
        <div className=' w-[70%] h-full flex items-center justify-start max-sm:w-full max-md:w-full max-sm:justify-center max-md:justify-center'>
         <div className=' max-sm:w-full max-md:w-full'>
         <h1 className=' text-6xl font-semibold text-[#807f7f] pb-5 max-sm:text-3xl max-md:4xl max-sm:text-white max-md:text-white max-md:text-center max-sm:text-center'>Save big with our <span className=' text-[#ff4c30]'>cheap</span> <br /> car rental!</h1>
          <p className=' text-2xl text-[#807f7f] max-sm:text-center max-md:text-center max-sm:text-white max-md:text-white max-sm:text-xl'>Top Airports. Local Suppliers. 24/7 Support.</p>
         </div>
        </div>
        </div>
      </div>
<Testimonial />
<div className=' flex items-center justify-center mt-20'>
  <div className=' w-[90%] py-5 max-sm:w-[100%] max-md:w-[100%] max-lg:w-full'>
  <div className='flex items-center justify-center gap-10 flex-wrap '>
  {
      blogData.map((item)=>{
        return(
          <BlogItem item={item} key={item?.id}/>
        )
      })
    }
    </div>
    </div>
  </div>
    </section>
    </>
  )
}

export default Home

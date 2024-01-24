import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import carData from '../data/carData';
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiBuildingsThin } from "react-icons/pi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import BookACar from '../UI/BookACar';

const CarDetails = () => {
    const {slug} = useParams();
    const singleProduct = carData.find((item)=> item.carName === slug);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [singleProduct]);
  return (
    <section>
      <div className=' flex items-center justify-center'>
        <div className='  w-[80%] h-[500px] max-sm:h-full max-md:h-full flex items-center justify-between max-sm:w-full max-md:w-full max-sm:flex-wrap max-md:flex-wrap'>
        <div className='  h-full w-[700px] max-sm:w-full max-md:w-full flex items-center justify-center'>
        <img src={singleProduct?.imgUrl} alt="" className=' w-full' />
        </div>
        <div className=' flex items-start max-sm:items-center max-md:items-center justify-center gap-6 flex-col w-[800px] max-sm:w-full max-md:w-full h-full px-5'>
        <h1 className=' text-3xl font-semibold text-[#ff4c30]' >{singleProduct?.carName}</h1>
        <div className=' flex items-center justify-evenly gap-20'>
          <span className=' text-xl font-semibold'>${singleProduct?.price}/Day</span>
          <div className=' flex items-center justify-center text-sm gap-1'>
            <MdOutlineStarPurple500 color='#ff4c30'/>
            <MdOutlineStarPurple500 color='#ff4c30'/>
            <MdOutlineStarPurple500 color='#ff4c30'/>
            <MdOutlineStarPurple500 color='#ff4c30'/>
            <MdOutlineStarPurple500 color='#ff4c30'/>
            <span>{`(${singleProduct?.rating}ratings)`}</span>
          </div>
        </div>
        <p className=' text-sm text-gray-400 max-sm:text-center max-md:text-center'>{singleProduct?.description}</p>
        <div className=' flex items-start justify-start gap-20 text-sm text-gray-400 flex-wrap max-sm:items-center max-md:items-center max-sm:justify-center max-md:justify-center'>
          <div className=' flex items-center gap-1'><span><MdOutlineDirectionsCarFilled color='#ff4c30'/></span><span>{singleProduct?.model}</span></div>
          <div className=' flex items-center gap-1'> <span><IoSettingsOutline color='#ff4c30' /></span><span>{singleProduct?.automatic}</span></div>
          <div className=' flex items-center gap-1'><span><BsSpeedometer2 color='#ff4c30'/></span><span>{singleProduct?.speed}</span></div>
        </div>
        <div className=' flex items-center justify-start w-full gap-20 text-sm text-gray-400 flex-wrap max-sm:items-center max-md:items-center max-sm:justify-center max-md:justify-center'>
          <div className=' flex items-center gap-1'><span><CiLocationOn color='#ff4c30'/></span><span>{singleProduct?.gps}</span></div>
          <div className=' flex items-center gap-1'><span><MdAirlineSeatReclineNormal color='#ff4c30'/></span><span>{singleProduct?.seatType}</span></div>
          <div className=' flex items-center gap-1'><span><PiBuildingsThin color='#ff4c30'/></span><span>{singleProduct?.brand}</span></div>
        </div>
        </div>
        </div>
      </div>
      <BookACar />
    </section>
  )
}

export default CarDetails

import React from 'react'
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import Button from './Button';
import { Link } from 'react-router-dom';

const CarItem = ({item}) => {
  return (
    <section>
    
   
     <div  className='border rounded flex items-center justify-center flex-col gap-2 w-full pb-5 min-w-[400px] max-sm:min-w-0'>
        <img src={item?.imgUrl} alt="" />
        <h2 className=' text-2xl font-semibold'>{item?.carName}</h2>
        <span className=' font-semibold'>${item?.price}/Day</span>
        <div className=' w-full flex items-center justify-between px-4 py-4 flex-wrap max-sm:justify-center max-sm:gap-3'>
           <div className=' flex items-center justify-center gap-1'><span><MdOutlineDirectionsCarFilled color='#ff4c30'/></span> <span className=' text-sm'>{item?.model}</span></div>
            <div className=' flex items-center justify-center gap-1'><span><IoSettingsOutline color='#ff4c30' /></span><span className=' text-sm'>{item?.automatic}</span></div>
            <div className=' flex items-center justify-center gap-1'><span><BsSpeedometer2 color='#ff4c30' /></span><span className=' text-sm'>{item?.speed}</span></div>
        </div>
        <div className=' flex items-center justify-center gap-3 w-full'>
        <Link to={`/car/${item?.carName}`}><Button button={"Rent"} background={"#000"} boxshadow={"shadow-none"}/></Link>
        <Link to={`/car/${item?.carName}`}><Button button={"Details"} background={"#ff4c30"} boxshadow={"shadow-none"}/></Link>
        </div>
      </div>
     
    </section>
  )
}

export default CarItem

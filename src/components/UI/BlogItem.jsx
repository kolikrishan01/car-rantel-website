import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoMdTimer } from "react-icons/io";
import { Link } from 'react-router-dom';

const BlogItem = ({item}) => {

  return (
    <section>
        <div className=' border w-[400px] h-full max-sm:w-full max-md:w-full'>
       <div className=' '> <img src={item?.imgUrl} alt="" className='w-full h-full'/></div>
        <div className=' flex items-start justify-center flex-col gap-5 pl-5 pt-5 max-sm:items-center max-md:items-center'>
            <h4 className=' text-xl font-semibold'>{item?.title}</h4>
            <p className=' text-sm text-gray-400'>{item?.description.slice(0,100)}</p>
            <Link to={`/blog/${item?.title}`}><span className=' font-semibold text-[#ff4c30] cursor-pointer'>Read Me</span></Link>
        </div>
       <div className=' py-5 flex items-center justify-center'>
       <hr  className=' w-[370px] max-sm:w-full max-md:w-full max-lg:w-full'/>
       </div>
       <div className=' flex items-center justify-between text-sm text-gray-400 px-3 pb-3 max-sm:justify-evenly max-md:justify-evenly max-sm:flex-wrap'>
        <div className=' flex items-center justify-center gap-1'>
        <CiUser color='#ff4c30'/>
        <span>{item?.author}</span>
        </div>
        <div className='flex items-center justify-center gap-3'>
            <div className='flex items-center justify-center gap-1'>
                <CiCalendar color='#ff4c30'/>
                <span>{item?.date}</span>
            </div>
            <div className='flex items-center justify-center gap-1'>
            <IoMdTimer color='#ff4c30'/>
                <span>{item?.time}</span>
            </div>
        </div>
       </div>
        </div>
    </section>
  )
}

export default BlogItem

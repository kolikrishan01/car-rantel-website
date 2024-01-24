import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import blogData from '../data/blogData';
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoMdTimer } from "react-icons/io";
import BookACar from '../UI/BookACar';
const BlogDetails = () => {
    const {slug} = useParams();
    const singleBlogProd = blogData.find((item)=> item?.title === slug)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [singleBlogProd]);
  return (
   <section>
    <div className=' flex items-center justify-center'>
      <div className=' w-[80%] h-[100%]'>
      <div className=' flex items-center justify-center flex-col gap-3'>
        <img src={singleBlogProd?.imgUrl} alt="" className=' h-full' />
        <h2 className=' text-2xl font-semibold max-sm:text-center max-md:text-center'>{singleBlogProd?.title}</h2>
        <div className=' flex items-start justify-center gap-5 text-sm text-gray-400 '>
          <div className=' flex items-center gap-1'><CiUser color='#ff4c30'/><span>{singleBlogProd?.author}</span></div>
          <div className=' flex items-center gap-1'><CiCalendar color='#ff4c30'/><span>{singleBlogProd?.date}</span></div>
          <div className=' flex items-center gap-1'><IoMdTimer color='#ff4c30'/><span>{singleBlogProd?.time}</span></div>
         
        </div>
        <div className=' pt-10'>
            <p className=' text-center text-sm text-gray-400'>{singleBlogProd?.description}</p>
            <p  className=' text-center py-10 text-2xl'>{singleBlogProd?.quote}</p>
            <p className=' text-center text-sm text-gray-400'>{singleBlogProd?.description}</p>
          </div>
      </div>
      </div>
    </div>
    <BookACar />
   </section>
  )
}

export default BlogDetails

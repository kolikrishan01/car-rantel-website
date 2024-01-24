import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import testimonialData from '../data/testimonialData';

const Testimonial = () => {
  return (
    <div>
     <div className=' flex items-center justify-center flex-col gap-4'>
     <span className=' text-xl font-semibold text-[#ff4c30]'>Our clients says</span>
     <h1 className='  text-5xl font-semibold'>Testimonial</h1>
     </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
            640:{
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    284: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    244: {
      slidesPerView: 1,
      spaceBetween: 30
    }
        }}
        autoplay={{
            delay:500
        }}
        pagination={{
          clickable: true,
        }}
      
        
        modules={[Pagination]}
        className="mySwiper mx-28 h-[500px] max-sm:mx-0"
      >
     
        {
            testimonialData.map((item, index)=>(
                <SwiperSlide key={index} className=' flex items-center justify-center max-sm:w-full'>
                    <div className=' flex items-start justify-center flex-col gap-8 w-[500px] max-sm:w-[100%] max-md:w-full max-sm:items-center max-md:items-center'>
                        <p className=' text-sm text-gray-400 max-sm:text-center max-md:text-center'>{item?.desc}</p>
                        <div className=' flex items-center justify-between gap-5'>
                            <img src={item?.image} alt="" className=' w-[100px] rounded-md'/>
                            <div>
                            <h5 className=' text-sm text-[#ff4c30] font-medium'>{item?.name}</h5>
                            <span className=' text-[13px] text-gray-400'>{item?.relation}</span> 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }   
      </Swiper>
    
    </div>
  )
}

export default Testimonial

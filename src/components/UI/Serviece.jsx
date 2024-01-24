import React from 'react'
import serviceData from '../data/serviceData'
const Serviece = () => {
  return (
   <>
    <section>
        <div className=' flex items-center justify-center mt-20'>
            <div className='w-[70%] h-full pt-10'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold pb-3'>See our</h4>
                <h1 className='text-5xl font-bold'> Popular <span className='text-[#ff4c30]'>Services</span></h1>
            </div>
            <div className=' flex items-center justify-evenly flex-wrap gap-8 my-10'>
                {
                    serviceData.map((item)=>{
                        return(
                            <div key={item?.id} className=' w-[500px] h-[200px] flex items-start justify-center pl-5 flex-col max-sm:items-center max-md:items-center'>
                <span className=' pb-3 text-3xl text-[#ff4c30]'>
                <i class={item?.icon}></i>
                </span>
                <h4 className=' text-xl font-semibold hover:text-[#ff4c30] pb-2'>{item?.title}</h4>
                <p className='text-sm text-gray-400'>{item?.desc}</p>
                </div>
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

export default Serviece

import React from 'react'
import CarItem from '../UI/CarItem'
import carData from '../data/carData'
import CompoBanner from '../UI/CompoBanner'

const Cars = () => {
  return (
    <div>
    <CompoBanner compoName={"Car Listing"}/>
      <div className=' flex items-center justify-center mt-20'>
  <div className=' w-[100%] py-5'>
  <div className=' flex items-center justify-center gap-10 flex-wrap'>
  {
      carData.map((item)=>{
        return(
          <CarItem item={item} key={item?.id}/>
        )
      })
    }
    </div>
    </div>
  </div>
    </div>
  )
}

export default Cars

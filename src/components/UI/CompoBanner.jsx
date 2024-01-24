import React from 'react'
import "../Style/compo-banner.css"
const CompoBanner = ({compoName}) => {
  return (
    <section>
        <div className=' w-full h-[300px]  compo-banner'>
<div className='flex items-center justify-center w-full h-full'>
<h1 className=' text-5xl font-medium text-white'>{compoName}</h1>
</div>
        </div>
    </section>
  )
}

export default CompoBanner

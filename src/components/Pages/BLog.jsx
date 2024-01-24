import React from 'react'
import BlogItem from '../UI/BlogItem'
import blogData from '../data/blogData'
import CompoBanner from '../UI/CompoBanner'

const BLog = () => {
  return (
    <div>
    <CompoBanner compoName={"Blogs"}/>
    <div className=' flex items-center justify-center mt-20'>
<div className=' w-[100%] py-5'>
<div className=' flex items-center justify-center gap-10 flex-wrap'>
{
    blogData.map((item)=>{
      return(
        <div key={item?.id}>
        <BlogItem item={item} />
        <br/>
        <br/>
        <BlogItem item={item} />
        </div>
      )
    })
  }
  </div>
  </div>
</div>
  </div>
  )
}

export default BLog

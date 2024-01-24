import React, { useState } from 'react'
import SiteLogo from "../assets/site_logo.png"
import "../Style/header.css"
import Button from '../UI/Button'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    const [hideShow, setHideShow] = useState(true)
    const [active, setActive] = useState(1);
  return (
   <header className=' flex items-center justify-center'>
  
   <div className={`w-[70%] h-[100px] flex items-center justify-between max-lg:w-[100%] max-lg:px-8 max-xl:w-[100%] max-xl:px-20 max-xl:justify-evenly  ${hideShow ? "responsive-header" : "responsive-header hide-show"}`}>
   <div className='close' onClick={()=>setHideShow(!hideShow)}>
<IoMdClose size={30} />
   </div>
    <div className='w-[150px]'>
        <img src={SiteLogo} alt=""  className='w-full'/>
    </div>
    <div className='header-unorder-list'>
        <ul className=' flex items-center justify-center gap-20 font-medium text-[15px] max-lg:gap-10 max-xl:gap-10'>
           <Link to={"/"}> <li className={`${active === 1 && "active"}`} onClick={()=>setActive(1)}>Home</li></Link>
          <Link to={"/about"}>  <li className={`${active === 2 && "active"}`} onClick={()=>setActive(2)}>About</li></Link>
            <Link to={"/car"}><li className={`${active === 3 && "active"}`} onClick={()=>setActive(3)}>Cars</li></Link>
           <Link to={"/blog"}>
           <li className={`${active === 4 && "active"}`} onClick={()=>setActive(4)}>Blog</li>
           </Link>
            <Link to={"/contact"}><li className={`${active === 5 && "active"}`} onClick={()=>setActive(5)}>Contact Us</li></Link>
        </ul>
    </div>
    <div className='flex items-center justify-center gap-5  text-[15px] font-medium'>
        <span className=' cursor-pointer'>Sign In</span>
        <Button button={"Register"} background={"#ff4c30"} />
        {/* <button className={`button px-8 py-3  bg-[#ff4c30]  text-white`}>Register</button> */}
    </div>
    </div>
    <span className='menu' onClick={()=>setHideShow(!hideShow)}>
    <CiMenuFries size={30}/>
    </span>
   </header>
  )
}

export default Header

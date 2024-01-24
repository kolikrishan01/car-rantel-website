import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Header from "../Header/Header"
import About from '../Pages/About'
import Cars from '../Pages/Cars'
import CarDetails from '../Pages/CarDetails'
import BLog from '../Pages/BLog'
import BlogDetails from '../Pages/BlogDetails'
import Footer from '../Header/Footer'
import Contact from '../Pages/Contact'


const Layout = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path='/car' element={<Cars />}/>
      <Route path='/car/:slug' element={<CarDetails />}/>
      <Route path='/blog' element={<BLog />}/>
      <Route path='/blog/:slug' element={<BlogDetails />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default Layout

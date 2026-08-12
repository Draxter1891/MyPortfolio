import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router'
import Hero from '../../sections/Hero'
import About from '../../sections/About'
import FeaturedWork from '../../sections/FeaturedWork'
import Footer from '../../components/Footer'

const MainLayout = () => {
  return (
    <div className='h-screen relative bg-bg-primary'>
        <Navbar/>
        <Hero/>
        <About/>
        <FeaturedWork/>
        <Footer/>
    </div>
  )
}

export default MainLayout
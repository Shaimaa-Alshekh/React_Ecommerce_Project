import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/navbar/Navbar';
import Hero from './../components/hero/Hero';
import Footer from './../components/footer/Footer';

function Root() {
  return (
    <>
    <Navbar />
    <Hero />
    <Outlet />
    <Footer/>
    </>

)
}

export default Root
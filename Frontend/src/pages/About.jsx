import React from 'react'
import AboutUs from '../components/AboutUs.jsx'
import Navbar from '../components/Navbar.jsx'
import Review from '../components/Review'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <Review/>
      <Footer/> 
    </div>
  )
}

export default About

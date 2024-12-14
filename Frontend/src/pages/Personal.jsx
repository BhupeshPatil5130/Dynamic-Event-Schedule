// import React from 'react'
import PersonalActivity from '../components/PersonalActivity';
import Navbar from '../components/Navbar';
import Review from '../components/Review.jsx';
import Footer from '../components/Footer';

import Hero from '../components/Hero.jsx';

const Personal = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
      <PersonalActivity/>
      <Review/>
      <Footer/>

    </div>
  )
}

export default Personal

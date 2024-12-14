import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AddEvent from '../components/AddEvent'
import EventScheduler from '../components/EventScheduler'
import Footer from '../components/Footer';
import Review from '../components/Review';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <div>
       <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Hero isLoggedIn={isLoggedIn} />
      </div>

      <div>
        <AddEvent />
        <h1>Upcoming event </h1>
        <EventScheduler />
        {/* <PersonalActivity/> */}
        <Review />
        <Footer />
      </div>
    </div>
  )
}

export default Home

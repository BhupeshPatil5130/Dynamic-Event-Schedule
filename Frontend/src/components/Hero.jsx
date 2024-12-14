import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center text-white flex flex-col justify-center items-center mb-5" style={{ backgroundImage: "url('./max-raber-wZZhkTvB9pI-unsplash.jpg')" }}>
      <h2 className="text-6xl font-bold m-0">Event Manager</h2>
      <p className="text-xl m-5 max-w-[80%] text-center">Your ultimate tool for organizing and managing events effectively.</p>
      {/* <button className='m-4 p-5 text-lg border-black text-white bg-blue-600 rounded-3xl hover:bg-blue-700  hover:text-black transition-all duration-300'>Add your event </button> */}
    </div>
  );
};

export default Hero;

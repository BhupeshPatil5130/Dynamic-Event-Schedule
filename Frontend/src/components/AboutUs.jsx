// import React from "react";



// const AboutUs = () => {
//     return (
//         <div className="bg-white text-gray-800">
//             {/* Header Section */}
//             <header className="text-center py-10">
//                 <h1 className="text-4xl font-bold">
//                     About <span className="text-yellow-500">Us</span>
//                 </h1>
//                 <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
//                     Welcome to the Dynamic Event Scheduling System, a cutting-edge platform designed to simplify event
//                     planning and management. Whether you’re organizing meetings, conferences, or social gatherings, our
//                     system ensures seamless scheduling, real-time updates, and personalized reminders. Join us in
//                     transforming the way events are planned and executed!
//                 </p>
//             </header>

//             {/* Hexagon Image Section */}
//             <div className="flex flex-wrap justify-center space-x-4 py-10">
//                 {["https://storage.googleapis.com/a1aa/image/hhSruImvVkqhDhAr2iHjpoQrTYNM7hDCO4Twew9myBtGsm3JA.jpg",
//                   "https://storage.googleapis.com/a1aa/image/DTTUx4LMCgYMHtPLGzALKu5E4m009Y0l4BwSouSJyZ1CWz7E.jpg",
//                   "https://storage.googleapis.com/a1aa/image/yO0VDfELyA0wNiCqFXvs8341Xv3XwAon6RcMH3V69yaHsm3JA.jpg",
//                   "https://storage.googleapis.com/a1aa/image/bmRDL0MlCJ4RA5PlPPt7eiELO6rPxhBeWoTfQ7z08C5SwaeOB.jpg",
//                   "https://storage.googleapis.com/a1aa/image/fDYlkKwByoXUDibgK9LX3ldU44m6jjsxfQJuNLt6PeEhwaeOB.jpg"].map((src, index) => (
//                     <div className="hexagon relative w-[100px] h-[55px] bg-teal-400 my-[27.5px] transition-transform duration-300" key={index}>
//                         <div className="absolute inset-0 w-0 border-l-[50px] border-r-[50px] border-transparent top-[-27.5px] border-b-[27.5px] border-teal-400"></div>
//                         <div className="absolute inset-0 w-0 border-l-[50px] border-r-[50px] border-transparent bottom-[-27.5px] border-t-[27.5px] border-teal-400"></div>
//                         <img
//                             src={src}
//                             alt="Event"
//                             className="absolute w-full h-[110px] object-cover top-[-27.5px] clip-path-hexagon transition-transform duration-300 hover:translate-y-[-5px]"
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* Action Buttons Section */}
//             <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 py-4">
//                 <button className="bg-teal-500 text-white px-6 py-2 rounded-full w-full md:w-auto">VIEW ALL</button>
//                 <button className="bg-yellow-500 text-white px-6 py-2 rounded-full w-full md:w-auto">BOOK NOW</button>
//             </div>

//             {/* What We Do Section */}
//             <section className="bg-gray-900 text-white py-10">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold">What We Do?</h2>
//                 </div>
//                 <div className="flex flex-wrap justify-center space-x-8 py-10">
//                     {[
//                         { icon: "fa-seedling", text: "Events Scheduling", color: "text-yellow-500" },
//                         { icon: "fa-paint-brush", text: "Event Management", color: "text-teal-500" },
//                         { icon: "fa-users", text: "Personal Organization", color: "text-gray-500" }
//                     ].map((item, index) => (
//                         <div className="text-center" key={index}>
//                             <div className={`bg-white ${item.color} rounded-full p-6`}>
//                                 <i className={`fas ${item.icon} fa-2x`}></i>
//                             </div>
//                             <p className="mt-4">{item.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AboutUs;
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">
          About <span className="text-yellow-500">Us</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-4xl mx-auto px-4">
          Welcome to the Dynamic Event Scheduling System, a cutting-edge platform designed to simplify event
          planning and management. Whether you’re organizing meetings, conferences, or social gatherings, our
          system ensures seamless scheduling, real-time updates, and personalized reminders. Join us in
          transforming the way events are planned and executed!
        </p>
      </header>

      {/* Hexagon Image Section */}
      <div className="flex flex-wrap justify-center space-x-4 py-10">
        {[
          "https://storage.googleapis.com/a1aa/image/hhSruImvVkqhDhAr2iHjpoQrTYNM7hDCO4Twew9myBtGsm3JA.jpg",
          "https://storage.googleapis.com/a1aa/image/DTTUx4LMCgYMHtPLGzALKu5E4m009Y0l4BwSouSJyZ1CWz7E.jpg",
          "https://storage.googleapis.com/a1aa/image/yO0VDfELyA0wNiCqFXvs8341Xv3XwAon6RcMH3V69yaHsm3JA.jpg",
          "https://storage.googleapis.com/a1aa/image/bmRDL0MlCJ4RA5PlPPt7eiELO6rPxhBeWoTfQ7z08C5SwaeOB.jpg",
          "https://storage.googleapis.com/a1aa/image/fDYlkKwByoXUDibgK9LX3ldU44m6jjsxfQJuNLt6PeEhwaeOB.jpg"
        ].map((src, index) => (
          <div
            className="hexagon relative w-[100px] h-[55px] bg-teal-400 my-[27.5px] transition-transform duration-300"
            key={index}
          >
            <div className="absolute inset-0 w-0 border-l-[50px] border-r-[50px] border-transparent top-[-27.5px] border-b-[27.5px] border-teal-400"></div>
            <div className="absolute inset-0 w-0 border-l-[50px] border-r-[50px] border-transparent bottom-[-27.5px] border-t-[27.5px] border-teal-400"></div>
            <img
              src={src}
              alt="Event"
              className="absolute w-full h-[110px] object-cover top-[-27.5px] clip-path-hexagon transition-transform duration-300 hover:translate-y-[-5px]"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons Section */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 py-4">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-full w-full md:w-auto">VIEW ALL</button>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full w-full md:w-auto">BOOK NOW</button>
      </div>

      {/* What We Do Section */}
      <section className="bg-gray-900 text-white py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">What We Do?</h2>
        </div>
        <div className="flex flex-wrap justify-center space-x-8 py-10">
          {[
            { icon: "fa-seedling", text: "Events Scheduling", color: "text-yellow-500" },
            { icon: "fa-paint-brush", text: "Event Management", color: "text-teal-500" },
            { icon: "fa-users", text: "Personal Organization", color: "text-gray-500" }
          ].map((item, index) => (
            <div className="text-center mb-6 sm:mb-0" key={index}>
              <div className={`bg-white ${item.color} rounded-full p-6`}>
                <i className={`fas ${item.icon} fa-2x`}></i>
              </div>
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

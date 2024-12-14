// /* eslint-disable react/no-unescaped-entities */
// import React, { useState } from 'react';

// const Review = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
//   const [reviewText, setReviewText] = useState(''); // State for review text
//   const [rating, setRating] = useState(0); // State for rating
//   const [name, setName] = useState(''); // State for user name
//   const [date] = useState(new Date().toISOString().split("T")[0]); // Automatically set current date
//   const [reviews, setReviews] = useState([]); // State to manage reviews

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     // Add the new review to the reviews state
//     const newReview = {
//       text: reviewText,
//       rating: rating,
//       username: name,
//       date: date,
//     };
//     setReviews([...reviews, newReview]); // Append new review to existing reviews
//     setReviewText(''); // Clear the review text after submission
//     setRating(0); // Reset the rating after submission
//     setName(''); // Reset the name after submission
//     setIsModalOpen(false); // Close the modal
//   };

//   return (
//     <section className="py-24 relative">
//       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
//         <div>
//           <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-8 text-center">
//             Customer reviews & rating
//           </h2>
//           <div className="grid grid-cols-12 mb-11">
//             {/* Rating Bars */}
//             <div className="col-span-12 xl:col-span-4 flex items-center">
//               <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
//                 {[5, 4, 3, 2, 1].map((rating, index) => (
//                   <div key={index} className="flex items-center w-full">
//                     <p className="font-medium text-lg py-[1px] text-black mr-[2px]">{rating}</p>
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g clipPath={`url(#clip0_${index})`}>
//                         <path fill="#FBBF24" />
//                       </g>
//                       <defs>
//                         <clipPath id={`clip0_${index}`}>
//                           <rect width="20" height="20" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
//                       <span
//                         className={`h-full ${
//                           rating === 5
//                             ? 'w-[30%]'
//                             : rating === 4
//                             ? 'w-[40%]'
//                             : rating === 3
//                             ? 'w-[20%]'
//                             : rating === 2
//                             ? 'w-[16%]'
//                             : 'w-[8%]'
//                         } rounded-[30px] bg-indigo-500 flex`}
//                       ></span>
//                     </p>
//                     <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
//                       {rating * 10}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Review Summary */}
//             <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
//               <div className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
//                 <div className="col-span-12 md:col-span-8 flex items-center">
//                   <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
//                     <div className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
//                       <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.3</h2>
//                       <div className="flex items-center gap-3 mb-4">
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="36"
//                             height="36"
//                             viewBox="0 0 36 36"
//                             fill="none"
//                           >
//                             <g clipPath={`url(#clip0_star_${i})`}>
//                               <path fill="#FBBF24" />
//                             </g>
//                             <defs>
//                               <clipPath id={`clip0_star_${i}`}>
//                                 <rect width="36" height="36" fill="white" />
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         ))}
//                       </div>
//                       <p className="font-normal text-lg leading-8 text-gray-400">46 Ratings</p>
//                     </div>

//                     <div className="sm:pl-3 sm:border-l border-gray-200 flex items-center justify-center flex-col">
//                       <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.8</h2>
//                       <div className="flex items-center gap-3 mb-4">
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="36"
//                             height="36"
//                             viewBox="0 0 36 36"
//                             fill="none"
//                           >
//                             <g clipPath={`url(#clip0_star_${i})`}>
//                               <path fill="#FBBF24" />
//                             </g>
//                             <defs>
//                               <clipPath id={`clip0_star_${i}`}>
//                                 <rect width="36" height="36" fill="white" />
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         ))}
//                       </div>
//                       <p className="font-normal text-lg leading-8 text-gray-400">Last Month</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
//                   <div className="flex items-center flex-col justify-center w-full h-full ">
//                     <button
//                       onClick={() => setIsModalOpen(true)} // Open the modal when clicked
//                       className="rounded-full px-6 py-4 bg-indigo-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
//                     >
//                       Write A Review
//                     </button>
//                     <button className="rounded-full px-6 py-4 bg-white font-semibold text-lg text-indigo-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                       See All Reviews
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Most Helpful Positive Review */}
//           <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
//             <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">
//               Most helpful positive review
//             </h4>
//             <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                     fill="none"
//                   >
//                     <g clipPath={`url(#clip0_small_star_${i})`}>
//                       <path fill="#FBBF24" />
//                     </g>
//                     <defs>
//                       <clipPath id={`clip0_small_star_${i}`}>
//                         <rect width="30" height="30" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 ))}
//               </div>
//               <div className="flex items-center gap-3">
//                 <h6 className="font-semibold text-lg leading-8 text-black">John Doe</h6>
//                 <p className="font-medium text-base leading-7 text-gray-400">{date}</p>
//               </div>
//             </div>
//             <p className="font-normal text-lg leading-8 text-gray-500">
//               I recently had the opportunity to explore Pagedone's UI design system, and it left a lasting impression on my workflow. The system seamlessly blends user-friendly features with a robust set of design components, making it a go-to for creating visually stunning and consistent interfaces.
//             </p>
//           </div>

//           {/* Reviews List */}
//           <div className="mt-8 max-xl:max-w-3xl max-xl:mx-auto">
//             {reviews.map((review, index) => (
//               <div key={index} className="pb-8 border-b border-gray-200 mb-4">
//                 <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
//                   <div className="flex items-center gap-3">
//                     {[...Array(review.rating)].map((_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         viewBox="0 0 30 30"
//                         fill="none"
//                       >
//                         <g clipPath={`url(#clip0_review_star_${i})`}>
//                           <path fill="#FBBF24" />
//                         </g>
//                         <defs>
//                           <clipPath id={`clip0_review_star_${i}`}>
//                             <rect width="30" height="30" fill="white" />
//                           </clipPath>
//                         </defs>
//                       </svg>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <h6 className="font-semibold text-lg leading-8 text-black">{review.username}</h6>
//                     <p className="font-medium text-base leading-7 text-gray-400">{review.date}</p>
//                   </div>
//                 </div>
//                 <p className="font-normal text-lg leading-8 text-gray-500">{review.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Review Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
//             <h2 className="font-bold text-xl mb-4">Write a Review</h2>
//             <form onSubmit={handleReviewSubmit}>
//               <div className="mb-4">
//                 <label className="text-lg font-medium" htmlFor="name">Name:</label>
//                 <input
//                   id="name"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter your name"
//                   className="border border-gray-300 rounded-md w-full p-2 mb-2"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <p className="text-lg font-medium">Rate:</p>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <svg
//                       key={star}
//                       onClick={() => setRating(star)}
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 30 30"
//                       fill={star <= rating ? "#FBBF24" : "gray"} // Highlight selected stars
//                       className="cursor-pointer"
//                     >
//                       <g clipPath={`url(#clip0_star_rating_${star})`}>
//                         <path fill="#FBBF24" />
//                       </g>
//                       <defs>
//                         <clipPath id={`clip0_star_rating_${star}`}>
//                           <rect width="30" height="30" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//               <textarea
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)}
//                 placeholder="Enter your review here..."
//                 className="border border-gray-300 rounded-md w-full h-32 p-2 mb-4"
//                 required
//               />
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)} // Close the modal
//                   className="bg-gray-300 text-black rounded-md px-4 py-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-indigo-600 text-white rounded-md px-4 py-2"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Review;

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const Review = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [date] = useState(new Date().toISOString().split("T")[0]);
  const [reviews, setReviews] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      rating: rating,
      username: name,
      date: date,
    };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setRating(0);
    setName('');
    setIsModalOpen(false);
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div>
          <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-8 text-center">
            Customer Reviews & Ratings
          </h2>
          <div className="grid grid-cols-12 mb-11">
            {/* Rating Bars */}
            <div className="col-span-12 xl:col-span-4 flex items-center">
              <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={index} className="flex items-center w-full">
                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">{rating}</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath={`url(#clip0_${index})`}>
                        <path fill="#FBBF24" />
                      </g>
                      <defs>
                        <clipPath id={`clip0_${index}`}>
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                      <span className={`h-full ${rating === 5 ? 'w-[30%' : rating === 4 ? 'w-[40%' : rating === 3 ? 'w-[20%' : rating === 2 ? 'w-[16%' : 'w-[8%]'} rounded-[30px] bg-indigo-500 flex`}></span>
                    </p>
                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">{rating * 10}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Summary */}
            <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
              <div className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="col-span-12 md:col-span-8 flex items-center">
                  <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                    <div className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                      <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.3</h2>
                      <div className="flex items-center gap-3 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clipPath={`url(#clip0_star_${i})`}>
                              <path fill="#FBBF24" />
                            </g>
                            <defs>
                              <clipPath id={`clip0_star_${i}`}>
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        ))}
                      </div>
                      <p className="font-normal text-lg leading-8 text-gray-400">46 Ratings</p>
                    </div>

                    <div className="sm:pl-3 sm:border-l border-gray-200 flex items-center justify-center flex-col">
                      <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.8</h2>
                      <div className="flex items-center gap-3 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clipPath={`url(#clip0_star_${i})`}>
                              <path fill="#FBBF24" />
                            </g>
                            <defs>
                              <clipPath id={`clip0_star_${i}`}>
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        ))}
                      </div>
                      <p className="font-normal text-lg leading-8 text-gray-400">Last Month</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                  <div className="flex items-center flex-col justify-center w-full h-full ">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="rounded-full px-6 py-4 bg-indigo-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
                    >
                      Write A Review
                    </button>
                    <button className="rounded-full px-6 py-4 bg-white font-semibold text-lg text-indigo-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                      See All Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Most Helpful Positive Review */}
          <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
            <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">Most Helpful Positive Review</h4>
            <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
              <div className="flex items-center gap-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clipPath={`url(#clip0_small_star_${i})`}>
                      <path fill="#FBBF24" />
                    </g>
                    <defs>
                      <clipPath id={`clip0_small_star_${i}`}>
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <h6 className="font-semibold text-lg leading-8 text-black">John Doe</h6>
                <p className="font-medium text-base leading-7 text-gray-400">{date}</p>
              </div>
            </div>
            <p className="font-normal text-lg leading-8 text-gray-500">
              I recently had the opportunity to explore Pagedone's UI design system, and it left a lasting impression on my workflow. The system seamlessly blends user-friendly features with a robust set of design components, making it a go-to for creating visually stunning and consistent interfaces.
            </p>
          </div>

          {/* Reviews List */}
          <div className="mt-8 max-xl:max-w-3xl max-xl:mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="pb-8 border-b border-gray-200 mb-4">
                <div className="flex sm:items-center flex-col sm:flex-row justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath={`url(#clip0_review_star_${i})`}>
                          <path fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id={`clip0_review_star_${i}`}>
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <h6 className="font-semibold text-lg leading-8 text-black">{review.username}</h6>
                    <p className="font-medium text-base leading-7 text-gray-400">{review.date}</p>
                  </div>
                </div>
                <p className="font-normal text-lg leading-8 text-gray-500">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Writing Review */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="font-semibold text-xl mb-4">Write Your Review</h2>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="rating">Rating:</label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select Rating</option>
                  {[5, 4, 3, 2, 1].map((rate) => (
                    <option key={rate} value={rate}>{rate}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="reviewText">Review:</label>
                <textarea
                  id="reviewText"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-black rounded px-4 py-2">Cancel</button>
                <button type="submit" className="bg-indigo-600 text-white rounded px-4 py-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Review;

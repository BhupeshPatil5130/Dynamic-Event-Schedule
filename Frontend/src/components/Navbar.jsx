
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import axios from 'axios';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSignupPopup, setShowSignupPopup] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showLoginPassword, setShowLoginPassword] = useState(false);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleSignupPopup = () => setShowSignupPopup(!showSignupPopup);
//   const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);
//   const toggleShowPassword = () => setShowPassword(!showPassword);
//   const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
//   const toggleShowLoginPassword = () => setShowLoginPassword(!showLoginPassword);

//   const handleLogOut = () => {
//     setIsLoggedIn(false);
//     setIsSignedUp(false);
//     setShowSignupPopup(false);
//     toast.success('Logged out successfully!');
//   };

//   const handleSignUp = async () => {
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match!');
//       return;
//     }

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(email)) {
//       toast.error('Please enter a valid email!');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/signup', { username, email, password });
//       setIsSignedUp(true);
//       setShowSignupPopup(false);
//       toast.success('Signed up successfully!');
//       setIsLoggedIn(true); // Automatically log in after signing up
//     } catch (error) {
//       toast.error('Error signing up. Please try again!');
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', { email: loginEmail, password: loginPassword });
//       toast.success('Logged in successfully!');
//       setIsLoggedIn(true);
//       setShowLoginPopup(false);
//     } catch (error) {
//       toast.error('Invalid login credentials!');
//     }
//   };

//   return (
//     <nav className="bg-blue-600 text-white shadow-lg">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <a href="#" className="text-2xl font-semibold">Interview Expo</a>

//         <div className="hidden md:flex items-center space-x-4">
//           {!isLoggedIn ? (
//             <>
//               {!isSignedUp ? (
//                 <>
//                   <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                     Sign up
//                   </button>
//                   <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                     Log in
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//                     <Link to="/add-event">Add Event</Link>
//                   </button>
//                 </>
//               )}
//             </>
//           ) : (
//             <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
//               Log out
//             </button>
//           )}
//         </div>

//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-blue-600 p-4 space-y-2">
//           {!isLoggedIn ? (
//             <>
//               {!isSignedUp ? (
//                 <>
//                   <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                     Sign up
//                   </button>
//                   <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                     Log in
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//                     Add Event
//                   </button>
//                 </>
//               )}
//             </>
//           ) : (
//             <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
//               Log out
//             </button>
//           )}
//         </div>
//       )}

//       {/* Sign-up Popup */}
//       {showSignupPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
//             <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleSignupPopup}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
//             <label className="block text-black font-medium mb-1">Username</label>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={(e) => setUsername(e.target.value)}
//             />
            
//             <label className="block text-black font-medium mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={(e) => setEmail(e.target.value)}
//             />
            
//             <label className="block text-black font-medium mb-1">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button onClick={toggleShowPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>

//             <label className="block text-black font-medium mb-1">Confirm Password</label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm your password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 value={confirmPassword}
//                 className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button onClick={toggleShowConfirmPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
//                 {showConfirmPassword ? "Hide" : "Show"}
//               </button>
//             </div>

//             <div className="flex justify-center mt-4">
//               <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700" onClick={handleSignUp}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Login Popup */}
//       {showLoginPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
//             <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleLoginPopup}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>

//             <label className="block text-black font-medium mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={(e) => setLoginEmail(e.target.value)}
//             />

//             <label className="block text-black font-medium mb-1">Password</label>
//             <div className="relative">
//               <input
//                 type={showLoginPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 value={loginPassword}
//                 className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button onClick={toggleShowLoginPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
//                 {showLoginPassword ? "Hide" : "Show"}
//               </button>
//             </div>

//             <div className="flex justify-center mt-4">
//               <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700" onClick={handleLogin}>
//                 Log In
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
// import EventScheduler from './EventScheduler';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false); // Tracks signup state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSignupPopup = () => setShowSignupPopup(!showSignupPopup);
  const toggleLoginPopup = () => setShowLoginPopup(!showLoginPopup);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const toggleShowLoginPassword = () => setShowLoginPassword(!showLoginPassword);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setIsSignedUp(false);
    setShowSignupPopup(false);
    toast.success('Logged out successfully!');
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/signup', { username, email, password });
      setIsSignedUp(true);
      setIsLoggedIn(true); // Automatically log in after signup
      setShowSignupPopup(false);
      toast.success('Signed up successfully!');
      setPassword('');  // Clear password field
      setConfirmPassword(''); // Clear confirm password field
    } catch (error) {
      toast.error('Error signing up. Please try again!');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email: loginEmail, password: loginPassword });
      setIsLoggedIn(true); // Log the user in after successful login
      setShowLoginPopup(false);
      toast.success('Logged in successfully!');
      setLoginPassword('');  // Clear login password after successful login
    } catch (error) {
      toast.error('Invalid login credentials!');
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-2xl font-semibold"> Event Scheduler</a>
          <div>
           
          </div>
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              {!isSignedUp ? (
                <>
                 <nav className=''>
              <Link to="/" className='text-lg px-3'>Home</Link>
              <Link to="/about-us" className='text-lg px-3' >About us </Link> 
              <Link to='/contact-us' className='text-lg px-3'>Contact us </Link>
              <Link to="/personal-activity" className='text-lg px-3'>Personal activity</Link>
             


            </nav>
                  <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                    Sign up
                  </button>
                  <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                    Log in
                  </button>
                 
                </>
              ) : (
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                  <Link to="/add-event">Add Event</Link>
                </button>
              )}
            </>
          ) : (
            <>
              <nav className=''>
              <Link to="/" className='text-lg px-3'>Home</Link>
              <NavLink to="/about-us" className='text-lg px-3'>Personal activity</NavLink>
              <a href="" className='text-lg px-3'>Contact us </a>
            
              <NavLink to="/personal-activity" className='text-lg px-3'>Personal activity</NavLink>
             


            </nav>
              <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                <Link to="/add-event">Add Event</Link>
              </button>
              <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                Log out
              </button>
            
            </>
          )}
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-2">
          {!isLoggedIn ? (
            <>
              {!isSignedUp ? (
                <>
                  <button onClick={toggleSignupPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                    Sign up
                  </button>
                  <button onClick={toggleLoginPopup} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                    Log in
                  </button>
                </>
              ) : (
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                  Add Event
                </button>
              )}
            </>
          ) : (
            <>
              <button className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                <Link to="/addevent">Add Event</Link>
              </button>
              <button onClick={handleLogOut} className="bg-white text-blue-600 font-semibold py-2 px-4 w-full rounded-md hover:bg-gray-200">
                Log out
              </button>
            </>
          )}
        </div>
      )}

      {/* Sign-up Popup */}
      {showSignupPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
            <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleSignupPopup}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
            <label className="block text-black font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <label className="block text-black font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <label className="block text-black font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button onClick={toggleShowPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <label className="block text-black font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button onClick={toggleShowConfirmPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              onClick={handleSignUp}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Sign up
            </button>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 w-96 rounded-lg relative shadow-lg text-black">
            <button className="absolute top-2 right-2 text-red-600 font-bold text-xl" onClick={toggleLoginPopup}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
            
            <label className="block text-black font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            
            <label className="block text-black font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
                className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button onClick={toggleShowLoginPassword} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                {showLoginPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

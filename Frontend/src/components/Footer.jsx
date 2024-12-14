import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">About Event Scheduler</h4>
          <p className="text-gray-400">
            Event Scheduler is your go-to platform for efficient and structured event management. From adding events
            to keeping track of schedules, we help you stay organized and productive.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <p className="text-gray-400 mb-4">Stay updated with our latest features and updates.</p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-full text-black mb-4 md:mb-0 md:mr-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Email: </span> support@eventscheduler.com
          </p>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold">Phone: </span> +1 (123) 456-7890
          </p>
          <p className="text-gray-400">
            <span className="font-semibold">Address: </span> 123 Event Road, Scheduler City, USA
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Footer Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 py-4">
        <p className="mb-4 md:mb-0">&copy; 2024 Event Scheduler. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

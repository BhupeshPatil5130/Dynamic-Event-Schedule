import React from "react";

const ContactUs = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-cover bg-center text-white text-center py-20" style={{ backgroundImage: "url('./contactusf.jpg')" }}>
        <h1 className="text-4xl md:text-6xl font-bold">Contact Informations</h1>
        <p className="mt-4 text-lg md:text-xl font-medium">Get in Touch with Us – We're Here to Help You Schedule Seamlessly!</p>
        <a
          href="#contact-form"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition"
        >
          CONTACT US
        </a>
      </header>

      {/* Contact Info Section */}
      <section className="flex flex-wrap bg-gray-100 py-10 px-4 md:px-20">
        <div className="w-full md:w-1/2 space-y-6">
          {/* Phone */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="fas fa-phone-alt text-orange-500 text-2xl mr-4"></i>
            <div>
              <h4 className="font-bold text-lg">Phone Number :</h4>
              <p className="text-gray-600">+0123 4567 9876</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="fas fa-envelope text-orange-500 text-2xl mr-4"></i>
            <div>
              <h4 className="font-bold text-lg">Email Address :</h4>
              <p className="text-gray-600">eventscheduling@mail.com</p>
            </div>
          </div>

          {/* Fax */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="fas fa-fax text-orange-500 text-2xl mr-4"></i>
            <div>
              <h4 className="font-bold text-lg">Fax Address :</h4>
              <p className="text-gray-600">+0123 4567 9876</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="fas fa-map-marker-alt text-orange-500 text-2xl mr-4"></i>
            <div>
              <h4 className="font-bold text-lg">Location:</h4>
              <p className="text-gray-600">
                Dynamic Event Solutions Pvt. Ltd.<br />
                Tech Park, 5th Floor, MG Road, Bengaluru,<br />
                Karnataka, India - 560001
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow" id="contact-form">
          <h3 className="text-xl font-bold mb-4">Send Message</h3>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold">Find Us on Google Maps</h2>
        <p className="text-gray-600 mt-4 mb-6">
          Locate our office easily using Google Maps for accurate directions.
        </p>
        <img
          src="https://storage.googleapis.com/a1aa/image/7KLNQfdr5RyqFy87oX3Fwj7UuyPa9IfCxT49iaOneDhZmBfOB.jpg"
          alt="Google Maps Placeholder"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
        />
      </section>

      
    </div>
  );
};

export default ContactUs;

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const AddEvent = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [startDateTime, setStartDateTime] = useState('');
//   const [endDateTime, setEndDateTime] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   // Convert file to base64
//   const convertFileToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   // Add a new event
//   const addEvent = async (e) => {
//     e.preventDefault();
//     let imageUrl = '';

//     if (imageFile) {
//       imageUrl = await convertFileToBase64(imageFile);
//     }

//     const newEvent = { title, description, startDateTime, endDateTime, imageUrl };

//     try {
//       const response = await axios.post('http://localhost:5000/events', newEvent);
//       toast.success('Event added successfully!');
//       resetForm();
//     } catch (error) {
//       console.error('Error adding event:', error);
//       toast.error('Failed to add event.');
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setTitle('');
//     setDescription('');
//     setStartDateTime('');
//     setEndDateTime('');
//     setImageFile(null);
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Add New Event</h2>
//       <form onSubmit={addEvent} className="mb-5">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Event Title"
//           required
//           className="border p-2 rounded w-full mb-2"
//         />
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Event Description"
//           required
//           className="border p-2 rounded w-full mb-2"
//         />
//         <input
//           type="datetime-local"
//           value={startDateTime}
//           onChange={(e) => setStartDateTime(e.target.value)}
//           required
//           className="border p-2 rounded w-full mb-2"
//         />
//         <input
//           type="datetime-local"
//           value={endDateTime}
//           onChange={(e) => setEndDateTime(e.target.value)}
//           required
//           className="border p-2 rounded w-full mb-2"
//         />
//         <input
//           type="file"
//           onChange={(e) => setImageFile(e.target.files[0])}
//           className="border p-2 rounded w-full mb-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Event
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddEvent;
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Convert file to base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    let imageUrl = '';

    if (imageFile) {
      imageUrl = await convertFileToBase64(imageFile);
    }

    const newEvent = { title, description, startDateTime, endDateTime, imageUrl };

    try {
      const response = await axios.post('http://localhost:5000/events', newEvent);
      toast.success('Event added successfully!');
      resetForm();
    } catch (error) {
      console.error('Error adding event:', error);
      toast.error('Failed to add event.');
    }
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setStartDateTime('');
    setEndDateTime('');
    setImageFile(null);
  };

  return (
    <div className="p-5 flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-md p-4 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Add New Event</h2>
        <form onSubmit={addEvent} className="space-y-3">
          <div className="flex items-center">
            <label className="w-1/3 text-right pr-4 font-medium">Event Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event title"
              required
              className="border p-2 rounded w-2/3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-right pr-4 font-medium">Event Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter event description"
              required
              className="border p-2 rounded w-2/3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-right pr-4 font-medium">Start Date and Time:</label>
            <input
              type="datetime-local"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
              required
              className="border p-2 rounded w-2/3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-right pr-4 font-medium">End Date and Time:</label>
            <input
              type="datetime-local"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
              required
              className="border p-2 rounded w-2/3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-right pr-4 font-medium">Upload Image:</label>
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="border p-2 rounded w-2/3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

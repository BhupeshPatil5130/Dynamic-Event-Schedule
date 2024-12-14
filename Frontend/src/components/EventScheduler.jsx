
import React, { useState, useEffect } from 'react'; 
import toast from 'react-hot-toast';
import axios from 'axios';

const EventScheduler = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // For edit modal

  // Fetch events from the database and filter for future events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        const currentDate = new Date();
        const futureEvents = response.data.filter(event => new Date(event.endDateTime) >= currentDate);
        setEvents(futureEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

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
      setEvents([...events, response.data]);
      toast.success('Event added successfully!');
      resetForm();
    } catch (error) {
      console.error('Error adding event:', error);
      toast.error('Failed to add event.');
    }
  };

  // Update an event
  const updateEvent = async (eventId) => {
    let updatedImageUrl = selectedEvent.imageUrl;

    if (imageFile) {
      updatedImageUrl = await convertFileToBase64(imageFile);
    }

    const updatedEvent = { 
      title, 
      description, 
      startDateTime, 
      endDateTime, 
      imageUrl: updatedImageUrl 
    };

    try {
      const response = await axios.put(`http://localhost:5000/events/${eventId}`, updatedEvent);
      setEvents(events.map(event => (event._id === eventId ? response.data : event)));
      toast.success('Event updated successfully!');
      setSelectedEvent(null); // Close the edit modal
      resetForm();
    } catch (error) {
      console.error('Error updating event:', error);
      toast.error('Failed to update event.');
    }
  };

  // Delete an event
  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:5000/events/${eventId}`);
      setEvents(events.filter(event => event._id !== eventId));
      toast.success('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event.');
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
    <div className="p-5">
     

      {/* Display Events as Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10 m-10">
        {events.map((event) => (
          <div key={event._id} className="bg-white rounded-lg shadow-lg p-9 flex flex-col items-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-center mb-2">Upcoming Event</h3>
            <img src={event.imageUrl || 'https://via.placeholder.com/150'} alt="Event" className="w-32 h-32 object-cover rounded-full mb-4" />
            <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
            <p className="text-gray-600 text-center mb-4">{event.description}</p>
            <p className="text-gray-500 text-center">
              {new Date(event.startDateTime).toLocaleString()} - {new Date(event.endDateTime).toLocaleString()}
            </p>
            <div className="flex space-x-4 mt-4">
              <button onClick={() => {
                setSelectedEvent(event);
                setTitle(event.title);
                setDescription(event.description);
                setStartDateTime(event.startDateTime);
                setEndDateTime(event.endDateTime);
              }} className="bg-green-500 text-white px-4 py-2 rounded">Edit</button>
              <button onClick={() => deleteEvent(event._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Event</h2>
            <form onSubmit={(e) => { e.preventDefault(); updateEvent(selectedEvent._id); }}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Event Title"
                required
                className="border p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Event Description"
                required
                className="border p-2 rounded w-full mb-2"
              />
              <input
                type="datetime-local"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
                required
                className="border p-2 rounded w-full mb-2"
              />
              <input
                type="datetime-local"
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
                required
                className="border p-2 rounded w-full mb-2"
              />
              {/* Disable file input during edit */}
              {!selectedEvent.imageUrl && (
                <input
                  type="file"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="border p-2 rounded w-full mb-2"
                />
              )}
              {/* Show image preview if it's available */}
              {selectedEvent.imageUrl && (
                <div className="mb-4">
                  <img src={selectedEvent.imageUrl} alt="Event" className="w-32 h-32 object-cover rounded-full" />
                </div>
              )}
              <div className="flex justify-between">
                <button type="button" onClick={() => setSelectedEvent(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventScheduler;

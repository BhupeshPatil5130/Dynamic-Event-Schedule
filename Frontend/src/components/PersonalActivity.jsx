
import React, { useState } from "react";

const PersonalActivity = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");

  const formattedDate = selectedDate.toISOString().split("T")[0];
  const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

  const daysArray = [
    ...Array(firstDay).fill(null), // Empty slots for days before the start of the month
    ...Array(lastDate).fill(null).map((_, index) => index + 1), // Days of the current month
  ];

  const addEvent = (e) => {
    e.preventDefault();
    if (!events[formattedDate]) {
      events[formattedDate] = [];
    }
    events[formattedDate].push({ title: eventTitle, time: eventTime });
    setEvents({ ...events });
    setEventTitle("");
    setEventTime("");
  };

  const displayEvents = () => {
    if (events[formattedDate]) {
      return events[formattedDate].map((event, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-2"
        >
          <p>{event.title}</p>
          <span>{event.time}</span>
        </div>
      ));
    }
    return <p className="text-gray-400">No events for this date</p>;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex flex-wrap justify-around w-full gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold text-blue-400 mb-4">
            Your All-In-One Scheduling Solution Awaits You
          </h2>
          <p className="mb-4">
            <b>Schedule your appointments and events with ease.</b>
          </p>
          <img
            src="./images/event.png"
            alt="Introduction"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">
              {selectedDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <div>
              <button
                onClick={() => {
                  setSelectedDate(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
                  );
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
              >
                &lt;
              </button>
              <button
                onClick={() => {
                  setSelectedDate(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
                  );
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md ml-2"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 text-center font-bold mb-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {daysArray.map((day, index) => (
              <div
                key={index}
                onClick={() =>
                  day &&
                  setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))
                }
                className={`p-3 rounded-md cursor-pointer ${
                  day ? "bg-gray-800 text-white hover:bg-gray-600" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
          <h3 className="text-lg font-bold mb-4">Events on {formattedDate}</h3>
          {displayEvents()}
          <form onSubmit={addEvent} className="mt-4">
            <input
              type="text"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="w-full mb-2 p-2 rounded-md text-black"
              required
            />
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              className="w-full mb-2 p-2 rounded-md text-black"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalActivity;

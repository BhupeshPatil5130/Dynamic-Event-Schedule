// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);

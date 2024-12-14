// routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Create a new event
router.post('/', upload.single('image'), async (req, res) => {
  const { username, name, title, description, startDateTime, endDateTime, location } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  const newEvent = new Event({
    username,
    name,
    title,
    description,
    startDateTime,
    endDateTime,
    location,
    imageUrl,
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an event
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { username, name, title, description, startDateTime, endDateTime, location } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, {
      username,
      name,
      title,
      description,
      startDateTime,
      endDateTime,
      location,
      imageUrl,
    }, { new: true });
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

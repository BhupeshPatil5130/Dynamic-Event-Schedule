
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const path = require('path');
    const multer = require('multer'); 

    const app = express();
    const PORT = process.env.PORT || 5000;
    const JWT_SECRET = 'your_jwt_secret'; 

    // Middleware
    app.use(cors());
    app.use(express.json({ limit: '5mb' })); 
    app.use(express.static('uploads')); 

    
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
        }
    });

    const upload = multer({ storage: storage });

    // Connect to MongoDB
    mongoose.connect('mongodb://localhost:27017/eventScheduler', {  })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));

    // User Schema
    const userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    });

    const User = mongoose.model('User', userSchema);

    // Event Schema
    const eventSchema = new mongoose.Schema({
        title: String,
        description: String,
        startDateTime: Date,
        endDateTime: Date,
        imageUrl: String
    });

    const Event = mongoose.model('Event', eventSchema);

    // Feedback Schema
    const FeedbackSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
    }, { timestamps: true });

    const Feedback = mongoose.model('Feedback', FeedbackSchema);

    // Routes for Sign-up
    app.post('/signup', async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const existingUser = await User.findOne({ $or: [{ email }, { username }] });
            if (existingUser) {
                return res.status(400).json({ message: 'Username or email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, email, password: hashedPassword });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error registering user', error: err.message });
        }
    });

    // Routes for Login
    app.post('/login', async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const user = await User.findOne({ $or: [{ email }, { username }] });
            if (!user) {
                return res.status(400).json({ message: 'User not found. Please sign up' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Invalid password' });
            }
            const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Login successful', token });
        } catch (err) {
            res.status(500).json({ message: 'Error logging in', error: err.message });
        }
    });

    // Routes for Events (handling base64 image and file upload)
    app.post('/events', async (req, res) => {
        const { title, description, startDateTime, endDateTime, imageUrl } = req.body;

        try {
            const newEvent = new Event({
                title,
                description,
                startDateTime: new Date(startDateTime),
                endDateTime: new Date(endDateTime),
                imageUrl
            });

            const savedEvent = await newEvent.save();
            res.status(201).json(savedEvent);
        } catch (err) {
            console.error('Error saving event:', err);
            res.status(500).json({ message: 'Error saving event', error: err.message });
        }
    });

    // Get all events
    app.get('/events', async (req, res) => {
        try {
            const events = await Event.find();
            res.json(events);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching events', error: err.message });
        }
    });

    // Update an event
    app.put('/events/:id', upload.single('image'), async (req, res) => {
        const { title, description, startDateTime, endDateTime } = req.body;
        let imageUrl = '';

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid event ID' });
        }

        // If file is uploaded
        if (req.file) {
            imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
        } else if (req.body.imageUrl) {
            // If base64 image URL is sent
            imageUrl = req.body.imageUrl;
        }

        try {
            const updatedEvent = await Event.findByIdAndUpdate(
                req.params.id,
                { title, description, startDateTime, endDateTime, imageUrl },
                { new: true, runValidators: true } // Ensure validation
            );

            if (!updatedEvent) {
                return res.status(404).json({ error: 'Event not found' });
            }

            res.json(updatedEvent);
        } catch (error) {
            console.error('Error updating event:', error);
            res.status(500).json({ error: 'Failed to update event', details: error.message });
        }
    });

    // Delete an event
    app.delete('/events/:id', async (req, res) => {
        try {
            await Event.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Event deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting event', error: err.message });
        }
    });

    // Routes for Feedback
    app.post('/feedback', async (req, res) => {
        const { name, email, message } = req.body;
        const feedback = new Feedback({ name, email, message });

        try {
            await feedback.save();
            res.status(201).json({ message: 'Feedback submitted successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error submitting feedback', error: err.message });
        }
    });

    // Start the server
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
    origin:"https://frontend-orcin-one-23.vercel.app/",
    credentials: true
}));
app.use(bodyParser.json());

// Database connection
const db = require('./config/db');
db();

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5550;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
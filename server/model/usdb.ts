// config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Use process.env to fetch from .env or hardcode the URL as needed
const mongoUrl = process.env.MONGODB_URI || "mongodb+srv://anees:Anees279%40@cluster0.1jchs.mongodb.net/login";

// Check if mongoUrl is undefined or empty
if (!mongoUrl) {
    throw new Error('MongoDB URI is not defined');
}

// Connect to MongoDB
mongoose.connect(mongoUrl)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.error('MongoDB Connection Error:', err));
// config/db.ts

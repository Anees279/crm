
// });
import express, { Application } from 'express';
import mongoose, { Connection } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import './model/usdb'; // Import the usdb model for database connection

import callRoutes from './routes/callRoutes';
import meetingRoutes from './routes/meeting.routes';
import clientRoutes from './routes/accountRoutes';
import contactRoutes from './routes/contactRoutes';
import leadRoutes from './routes/leadRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config(); // Load environment variables

const app: Application = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MongoDB connection for calls
const callsConnection: Connection = mongoose.createConnection(process.env.MONGODB_URI!);

// Create MongoDB connection for meetings
const meetingsConnection: Connection = mongoose.createConnection(process.env.MONGODB_MEETINGS_URI!);

// Create MongoDB connection for clients
const clientConnection: Connection = mongoose.createConnection(process.env.MONGODB_ACCOUNT_URI!);

// Create MongoDB connection for contacts
const contactConnection: Connection = mongoose.createConnection(process.env.MONGODB_CONTACT_URI!);

// Create MongoDB connection for leads
const leadConnection: Connection = mongoose.createConnection(process.env.MONGODB_LEAD_URI!);

// Create MongoDB connection for login

// Create MongoDB connection for usdb (new database)

// Event listeners for each connection
callsConnection.on('connected', () => {
  console.log('Connected to MongoDB Calls');
});

meetingsConnection.on('connected', () => {
  console.log('Connected to MongoDB Meetings');
});

clientConnection.on('connected', () => {
  console.log('Connected to MongoDB Clients');
});

contactConnection.on('connected', () => {
  console.log('Connected to MongoDB Contacts');
});

leadConnection.on('connected', () => {
  console.log('Connected to MongoDB Leads');
});



// Handle connection errors for each connection
callsConnection.on('error', (err) => {
  console.error('Error connecting to MongoDB Calls:', err);
});

meetingsConnection.on('error', (err) => {
  console.error('Error connecting to MongoDB Meetings:', err);
});

clientConnection.on('error', (err) => {
  console.error('Error connecting to MongoDB Clients:', err);
});

contactConnection.on('error', (err) => {
  console.error('Error connecting to MongoDB Contacts:', err);
});

leadConnection.on('error', (err) => {
  console.error('Error connecting to MongoDB Leads:', err);
});



// Handle login connection error



// Use Routes
app.use('/api/calls', callRoutes(callsConnection));
app.use('/api/meetings', meetingRoutes(meetingsConnection));
app.use('/api/clients', clientRoutes(clientConnection));
app.use('/api/contacts', contactRoutes(contactConnection));
app.use('/api/leads', leadRoutes(leadConnection));
app.use('/auth', authRoutes); // Authentication routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

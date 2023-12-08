const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routineRoutes = require('./routes/routineRoutes'); // Import the routineRoutes

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dvkshpandit:XN1lTKrFQ8EEpuVj@361portfolio.ugeyfo2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the routineRoutes for handling routine-related routes
app.use('/api', routineRoutes);

// Enable CORS for all origins and allowed headers
app.use(cors());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });










const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/realestate')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// 1. CORS Middleware
app.use(cors({
  origin: "https://your-frontend-domain.vercel.app" // Replace with your Vercel URL
}));

// 2. Body Parser
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// 3. Logger Middleware (Put it here, BEFORE the routes)
app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

// 4. Routes (Must be after middleware)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/logs', require('./routes/logRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
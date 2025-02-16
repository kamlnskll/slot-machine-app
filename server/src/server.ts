import express from 'express';
import 'dotenv/config'; // Load environment variables
import { pool } from './utils/db';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Test route
app.get('/', (req, res) => {
  res.send('Slot Machine API');
});

// Connect to PostgreSQL
async function startServer() {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
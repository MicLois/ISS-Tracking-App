require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { connectDB, sequelize } = require("./config/db");
require("./models/Item");

const app = express();

// Connect to database
connectDB().then(() => sequelize.sync());

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.get("/api/iss", async (req, res) => {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("ISS fetch error:", error);
    res.status(500).json({ message: "Failed to fetch ISS data" });
  }
});

// Add API routes here in the future - please take out after testing
const Item = require("./models/Item");

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Error fetching items" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// CORS configuration to allow requests from both local development and deployed frontend

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://iss-tracking-app-client.onrender.com",
    ],
    credentials: true,
  }),
);

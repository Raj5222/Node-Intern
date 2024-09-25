// src/server.ts
import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./db";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

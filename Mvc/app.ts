// src/app.ts
import express from "express";
import userRoutes from "./routes/register";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use("/api/register", userRoutes);
app.use("/api/login", userRoutes);

export default app;

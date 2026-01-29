import dotenv from "dotenv";
import path from "path";

// 🔥 ABSOLUTE, FOOLPROOF .env loading
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Portfolio Backend is running 🚀");
});

export default app;

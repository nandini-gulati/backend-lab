import express from "express";
import todoRoutes from "./routes/todoRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Error Handler Middleware
app.use(errorHandler);

export default app;

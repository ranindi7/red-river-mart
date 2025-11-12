import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./api/v1/users/routes/userRoutes"; 
import errorHandler from "./api/v1/users/middleware/errorHandler";

const app: Express = express();

dotenv.config();

app.use(morgan("combined"));
app.use(express.json());

// test route
app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

// API routes
app.use("/api/v1/users", userRoutes);

// error handler
app.use(errorHandler);

export default app;
import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import setupSwagger from "../config/swagger";

import corsOptions from "../config/cors";
import itemRoutes from "./api/v1/items/routes/itemRoutes"; 
import errorHandler from "./api/v1/items/middleware/errorHandler";

const app: Express = express();

dotenv.config();

app.use(morgan("combined"));
app.use(express.json());

//add cors middleware
app.use(cors(corsOptions));

// swagger docs
setupSwagger(app);

// test route
app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

// API routes
app.use("/api/v1/items", itemRoutes);

// error handler
app.use(errorHandler);

export default app;

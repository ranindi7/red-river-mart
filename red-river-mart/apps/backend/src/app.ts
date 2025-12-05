import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import corsOptions from "../config/cors";
import userRoutes from "./api/v1/users/routes/userRoutes"; 
import errorHandler from "./api/v1//middleware/errorHandler";
import setupSwagger from "../config/swagger";
import forumRoutes from "./api/v1/forums/routes/forumRoutes";
import itemRoutes from "./api/v1/items/routes/itemRoutes";
import CommentRoutes from "./api/v1/comments/routes/commentRoutes";
import { clerkMiddleware } from "@clerk/express";

const app: Express = express();

dotenv.config();

app.use(morgan("combined"));
app.use(express.json());

//add cors middleware
app.use(cors(corsOptions));

app.use(clerkMiddleware());

// swagger docs
setupSwagger(app);

// test route
app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

// API routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/forums", forumRoutes);
app.use("/api/v1/items", itemRoutes);
app.use("/api/v1/comments", CommentRoutes);

// error handler
app.use(errorHandler);

export default app;

import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // allows us to accept JSON data in the body of the request

// Middleware to log request details
app.use((req,res,next) => {           
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);  // Log the request method and URL
    next();
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});


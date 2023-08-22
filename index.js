const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./utils/db.js");
const blogRoutes = require("./routes/blogRoutes.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");

// Connects database from MongoDB cloud
connectDB();

app.use(express.json());

// Links to all the sub routes
app.use("/api/blogs", blogRoutes);

// Handles pages which do not exist
app.use(notFound);

// Handles any error
app.use(errorHandler);

exports.blog = app;

// https://us-central1-blog-stackruit-1.cloudfunctions.net/blog-funcs-1 - LIVE serverless cloud function API
// Server is connected to MongoDB Cloud in an environmental variable (MONGO_URI)
// All available routes - /api/blogs - GET, POST, DELETE
//                      - /api/blogs/id - GET, DELETE, PUT
// For more indept loop on each controller and routes, please refer the controller and routes folder!
// - Haneesh Raj

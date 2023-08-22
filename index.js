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

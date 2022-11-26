require("dotenv").config("../.env");
const express = require("express");
const connectDB = require("../config/db");
const { errorHandler, notFoundHandler } = require("./error");

const app = express();

// Connect Database
connectDB();

app.use(require("./middleware"));
app.use(require("./routes"));

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;

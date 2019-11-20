const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  morgan = require("morgan");

//instantiate the app

const app = express();

//database connection

require("./helpers/dbConnection");

//middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route handlers

//404 error handler

// export the app module
module.exports = app;

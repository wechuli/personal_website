const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  morgan = require("morgan");

//instantiate the app

const app = express();

//database connection

//middleware

//route handlers

//404 error handler

//listen

const PORT = process.env.PORT || 8099;

app.listen(PORT, () => {
  console.info(`The server is listening on port ${PORT}`);
});

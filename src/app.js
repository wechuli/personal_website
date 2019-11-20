const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  morgan = require("morgan");

// Custom routes

const articleRoutes = require("./routes/articleRoutes");
const projectRoutes = require("./routes/projectRoutes");
const techRoutes = require("./routes/techRoutes");
const topicRoutes = require("./routes/topicRoutes");
const userRoutes = require("./routes/userRoutes");

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

app.use("/api/user", userRoutes);
app.use("/api/tech", techRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/topic", topicRoutes);

//404 error handler
app.use((req, res) => {
  res.status(404).json({ error: true, message: "Route unavailable" });
});

// export the app module
module.exports = app;

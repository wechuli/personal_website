const mongoose = require("mongoose");

// connect to mongo atlas db

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.info("Database successfully connected");
  })
  .catch(error => console.log(error));

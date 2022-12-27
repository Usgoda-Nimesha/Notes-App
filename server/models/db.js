// require statement for mongoose
const mongoose = require("mongoose");

// connect to database
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log("Successfully connected to Database");
  } else {
    console.log(
      "Error connecting to Database" + JSON.stringify(err, undefined, 2)
    );
  }
});

require("./notes.model");

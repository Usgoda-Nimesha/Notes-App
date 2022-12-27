require("./config/config");
require("./models/db");
const indexRouter = require("./routes/index.router");

// installed packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

// configuring middleware
app.use(bodyParser.json()); // pass JSON data to node.js application
app.use(cors()); // communicate between client and server
app.use("/api", indexRouter);

// start server
app.listen(process.env.PORT, () =>
  console.log(`Server started at port: ${process.env.PORT}`)
);

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const registrationRoutes = require('./route');
const config = require('./DB.js');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
); 

// Serve up static assets (usually on heroku)
app.use(express.static("build"));

// Define middleware
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(bodyParser.json());
app.use("./schema/User", registrationRoutes);

  // Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/memeImages",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);



//use api route
app.use("/api",apiRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes")

// Serve up static assets (usually on heroku)
  app.use(express.static("build"));

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

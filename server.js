const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
  app.use(express.static("build"));


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});

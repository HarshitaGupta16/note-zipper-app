const express = require("express"); // require is used to breing in the packages from node_modules or package.json
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express(); // create an object of imported package: express
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..");
}); // gets data from backend to frontend an serves it

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); // create a web server

// when we fetch data from database or backend, api end point is the route from where the data is serve or on where data i9s served

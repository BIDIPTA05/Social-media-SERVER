const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
//I used the  dotenv to hide the credentialsof mongodb
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_CRED)
  .then(() => {
    console.log("Successfully Connected to the Database");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// route to show all available profile
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); // Send the list of users in JSON format
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});
//route to show us the individuual profiles
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
});

// server setup
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

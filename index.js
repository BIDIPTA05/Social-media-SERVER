const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes");
const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_CRED)
  .then(() => {
    console.log("Successfully Connected to the Database");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
//starting route
app.use("/", userRoutes);
// server setup
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

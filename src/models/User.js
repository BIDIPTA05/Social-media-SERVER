const mongoose = require("mongoose");

//I defined the schema of the app here
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});
//I populated the data through mongodb atlas insert document process(total 10 records)
const User = mongoose.model("User", userSchema);

module.exports = User;
